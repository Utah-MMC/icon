import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '../../lib/EmailService';
import { chatKnowledge } from '../../config/chatKnowledge';
import { securityUtils } from '../../config/security';

export const dynamic = 'force-dynamic';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
};

function generateSessionId(): string {
  try {
    // Use crypto if available (Node 18+ on Next)
    const crypto = require('crypto');
    return crypto.randomBytes(16).toString('hex');
  } catch (_) {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}

function sanitize(value: unknown): string {
  return securityUtils.sanitizeInput(String(value ?? ''));
}

function createAssistantReply(userText: string): string {
  const text = userText.toLowerCase();
  const now = new Date();
  try {
    // Localize to Mountain Time heuristically without external libs
    const locale = 'en-US';
    const hour = Number(new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: false, timeZone: chatKnowledge.business.timezone }).format(now));
    const day = new Intl.DateTimeFormat(locale, { weekday: 'long', timeZone: chatKnowledge.business.timezone }).format(now);
    const isWeekend = /(saturday|sunday)/i.test(day);

    if (/hour|open|close|today|tonight|are you open|availability|deliver today/i.test(text)) {
      const withinSameDayCutoff = hour < chatKnowledge.business.sameDayCutoffHourLocal && !isWeekend;
      const availability = isWeekend
        ? `tomorrow ${chatKnowledge.business.windows.tomorrowMorning}`
        : withinSameDayCutoff
          ? `today ${chatKnowledge.business.windows.todayAfternoon}`
          : `tomorrow ${chatKnowledge.business.windows.tomorrowMorning}`;
      return (
        `We offer ${chatKnowledge.business.support} scheduling.\n` +
        `Earliest availability: ${availability}.\n` +
        `Prefer a different time? We also have ${chatKnowledge.business.windows.tomorrowAfternoon}.\n\n` +
        `Share your zip and preferred size (15/20/30), or say "quote" and I’ll take your name and phone. For urgent help, call ${chatKnowledge.contact.phone}.`
      );
    }
  } catch {}

  // Friendly small talk and general intent
  if (/(^|\b)(hi|hello|hey|howdy|good (morning|afternoon|evening)|help|info|resources)\b/.test(text)) {
    return (
      'Hi there! I\'m Icon\'s assistant — happy to help with dumpster sizes, pricing, delivery, or what\'s allowed.\n\n' +
      'Share your zip code to confirm availability, or say "quote" and I\'ll take your name and phone. You can also call (801) 918-6000.'
    );
  }

  if (/(thank(s)?|appreciate|great,? thanks|thank you)/.test(text)) {
    return (
      'You\'re welcome! If you\'d like a quick quote, say "quote" or share your zip code and project type.\nFor immediate help, call (801) 918-6000.'
    );
  }

  if (/(who are you|what is icon|icon dumpsters|about you)/.test(text)) {
    return (
      'Icon Dumpsters is a Utah dumpster rental company serving Salt Lake County and nearby areas.\nWe offer 15, 20, and 30 yard roll‑off dumpsters with flexible 1, 3, 7, 14, and 30‑day options.\n\n' +
      'Want pricing? Share your zip or say "quote" and I\'ll start a quick quote.'
    );
  }

  // High-priority: zip/location detection
  const zipMatch = userText.match(/\b(\d{5})(?:-\d{4})?\b/);
  if (zipMatch || /(zip|zipcode|zip code|location|city|address|area)/i.test(userText)) {
    return (
      'Great! We serve that area.\n\n' +
      'Choose a size:\n' +
      '• 15 yd — Small cleanouts, garage cleanups\n' +
      '• 20 yd — Basement cleanouts, small renovations\n' +
      '• 30 yd — Large cleanouts, home renovations\n\n' +
      'Reply 15/20/30 with your size, or say "quote" and I’ll take your name and phone for exact pricing. You can also call (801) 918-6000.'
    );
  }

  // High-priority: size intent should lead into quote flow (ask for days)
  const sizeMatch = text.match(/\b(10|12|15|20|30)(?:\s*-?\s*(yd|yard)?s?)?\b/);
  if (sizeMatch) {
    const size = sizeMatch[1];
    if (size === '10' || size === '12') {
      return (
        'For heavy materials like clean dirt/concrete we use specialized 10/12 yard options. If that\'s what you need, say "specialized".\n\n' +
        'Otherwise, for a quick quote on 15/20/30 yard, how many days do you need? Options: 1, 3, 7, 14, or 30 days.'
      );
    }
    return (
      `Great — ${size} yard. How many days do you need? Options: 1, 3, 7, 14, or 30 days.\n\n` +
      'Weight billing note: We drop off empty and bill actual weight after pickup at $55/ton.'
    );
  }

  // Specialized flow if user mentions specialized keywords
  if (/(clean\s*dirt|dirt only|dirt dumpster|concrete|heavy duty|mixed load|10\s*yd|12\s*yd)/i.test(userText)) {
    return (
      'Specialized options:\n• 10 yd Clean Dirt — flat‑rate for clean dirt/soil only\n• 10 yd Mixed — heavy mixed materials (priced accordingly)\n• 12 yd Concrete — flat‑rate for clean concrete/asphalt\n\nWhich one would you like a quote for, and for how many days (1, 3, 7, 14, 30)?'
    );
  }

  const faqBlocks: Array<{ test: RegExp; answer: string }> = [
    // Materials specific
    {
      test: /(concrete|asphalt|brick|dirt|soil|rock|gravel|roof|shingle|drywall|wood|metal|appliance|mattress)/i,
      answer:
        'Materials guidance:\n• Clean concrete/asphalt: ask us about heavy‑load pricing (often 10/12 yd)\n• Dirt/soil/rock/gravel: specialized heavy loads (10 yd)\n• Roofing/shingles: 20 yd usually fits most roofs\n• Drywall/wood/metal: any size based on volume\n• Appliances/refrigerators: allowed only when freon is removed/tagged (varies by landfill)\n\nTell me what you have and I’ll confirm the best size and any special rules.'
    },
    // Driveway placement & space
    {
      test: /(driveway|placement|where|fit|space|clearance|street|alley)/i,
      answer:
        'Placement & clearance:\n• Ideal spot: flat driveway area with ~60–80 ft approach for the truck\n• Clearance: ~10–12 ft width, ~20–22 ft overhead (no low branches/lines)\n• Street placement: may require a city permit (varies by city/HOA)\n• We protect surfaces as best as possible; let us know if you have pavers\n\nNot sure if it fits? Share a quick description (driveway length/obstacles) and I’ll advise.'
    },
    // Permits & HOA
    {
      test: /(permit|hoa|association|city permission|street permit)/i,
      answer:
        'Permits & HOA:\n• Driveway placements typically don’t need permits\n• Street placements may require a city permit (rules vary by city)\n• HOAs can have rules on timing/placement — a quick heads up to them helps\n\nTell me your city and I’ll point you to the best next step.'
    },
    // Same-day, swap outs, overflows
    {
      test: /(same[- ]?day|today|asap|urgent|soon|rush)/i,
      answer:
        'We try to accommodate same‑day whenever possible. Earliest availability is often this afternoon (before our cutoff). Share your zip and preferred time — we’ll do our best to make it happen. For urgent help, call (801) 918-6000.'
    },
    {
      test: /(swap|switch|exchange|dump and return|second dumpster|another dumpster)/i,
      answer:
        'Need a swap‑out? We can do a dump‑and‑return so you keep working. Tell me your zip and preferred window; I’ll line it up.'
    },
    // Weather/terrain
    {
      test: /(snow|ice|steep|slope|hill|mud|rain)/i,
      answer:
        'Weather & terrain considerations:\n• Steep or icy driveways can affect safe placement\n• We can often find a safe nearby spot or plan around weather\n• Let us know driveway slope and conditions so we can plan the best approach'
    },
    // Tonnage examples
    {
      test: /(ton(nage)? example|how heavy|weight example|average weight)/i,
      answer:
        'Rough tonnage examples (estimates only):\n• Kitchen/bath remodel: 1.5–3 tons\n• Basement cleanout (mixed): 2–3 tons\n• Roofing (20–30 squares): 2–5 tons\n• Concrete (clean): ~2.5 tons per cubic yard\nOverage is billed at $55/ton. Want me to estimate based on your project?' 
    },
    {
      test: /(price|cost|how much|rate|pricing)/i,
      answer:
        `Pricing depends on size, rental length, and location.\n\n• 1‑day special available (≈ ${Math.round((chatKnowledge.pricing.oneDayDiscountRate) * 100)}% off base)\n• 3–7 day standard bundles\n• 14 and 30 day options (e.g., 30‑day: 15 yd $${chatKnowledge.pricing.thirtyDay['15']}, 20 yd $${chatKnowledge.pricing.thirtyDay['20']}, 30 yd $${chatKnowledge.pricing.thirtyDay['30']})\n• Weight billed separately at $${chatKnowledge.pricing.weightPerTon}/ton\n\nShare your zip and preferred size (15/20/30) and I’ll estimate. For instant estimates, open our calculator: https://icondumpsters.com/dumpster-calculator`,
    },
    // Local example pricing bundle
    {
      test: /(example|bundle|3-?7|three|seven|local)\s*(price|pricing|cost)/i,
      answer:
        `Local example bundle pricing (3–7 days):\n• 15 yd — $${chatKnowledge.pricing.exampleBundles.general['15'].bundle3to7} (1‑day: $${chatKnowledge.pricing.exampleBundles.general['15'].oneDay}, 30‑day: $${chatKnowledge.pricing.exampleBundles.general['15'].thirtyDay})\n• 20 yd — $${chatKnowledge.pricing.exampleBundles.general['20'].bundle3to7} (1‑day: $${chatKnowledge.pricing.exampleBundles.general['20'].oneDay}, 30‑day: $${chatKnowledge.pricing.exampleBundles.general['20'].thirtyDay})\n• 30 yd — $${chatKnowledge.pricing.exampleBundles.general['30'].bundle3to7} (1‑day: $${chatKnowledge.pricing.exampleBundles.general['30'].oneDay}, 30‑day: $${chatKnowledge.pricing.exampleBundles.general['30'].thirtyDay})\n\nSpecialized: 10 yd Clean Dirt/Mixed and 12 yd Concrete — $${chatKnowledge.pricing.exampleBundles.specialized.cleanDirt10.bundle3to7} (1‑day: $${chatKnowledge.pricing.exampleBundles.specialized.cleanDirt10.oneDay}, 30‑day: $${chatKnowledge.pricing.exampleBundles.specialized.cleanDirt10.thirtyDay}).\n\nNote: Weight billed separately at $${chatKnowledge.pricing.weightPerTon}/ton.`,
    },
    {
      test: /(size|yard|dimensions|capacity)/i,
      answer:
        'We offer 15, 20, and 30 yard roll‑off dumpsters. 15 yd: 16×7×4 ft. 20 yd: 22×7.5×4 ft. 30 yd: 22×7.5×6 ft. What project are you working on? I can recommend a size.',
    },
    // Fees & payment
    {
      test: /(fee|fees|fuel|environment|delivery fee|distance|extra charge|surcharge|overage|blocked|trip|relocation)/i,
      answer:
        'Fees & extras (when they apply):\n• Weight overage: $55/ton after disposal facility scale\n• Distance/zone: outside standard area or long approach\n• Blocked trip / relocation: if we cannot safely place/pick up or need to move after arrival\n• Additional days: we can extend your rental\n\nWe keep it transparent — ask about your address and I\'ll confirm.'
    },
    {
      test: /(pay|payment|card|credit|debit|cash|when do i pay|deposit)/i,
      answer:
        'Payments: We charge the base rental at drop‑off on your card. After pickup, the load is weighed and we bill/credit the difference at $55/ton. You\'ll receive a final receipt with the weight breakdown.'
    },
    // Pickups, changes, and cancellations
    {
      test: /(pickup|pick up|when do you pick up|schedule pickup|change|reschedule|cancel|cancellation)/i,
      answer:
        'Pickups & changes:\n• Standard pickup is at the end of your rental window — request earlier if needed\n• Reschedules/changes are no problem; just let us know ahead of time\n• Cancellations are fine — best if before your driver is dispatched\n\nShare your preferred pickup day and we\'ll line it up.'
    },
    // Loading rules, doors, overfill
    {
      test: /(overfill|level|fill line|doors?|swing|hinge|load rules|loading)/i,
      answer:
        'Loading rules:\n• Keep debris level with the top (no overfill above rails)\n• Heavier items on bottom to balance weight\n• Use the back door for easy walk‑in loading; please close and latch\n• Avoid placing items against the door hinge area\n\nNeed tips for your specific material? Tell me what you\'re loading.'
    },
    // Driveway protection
    {
      test: /(protect|boards|plywood|driveway protection|damage)/i,
      answer:
        'Driveway protection: Our drivers are careful and can place boards under the wheels/rails when appropriate. Let us know about pavers or sensitive surfaces and we\'ll plan accordingly.'
    },
    {
      test: /(hour|open|close|time|today)/i,
      answer:
        'Delivery & timing:\n\n• Next‑day delivery in most areas\n• Flexible scheduling around your timeline\n• Professional placement by our driver\n\nNeed ASAP? Call (801) 918-6000.',
    },
    {
      test: /(serve|area|city|where|near me|utah)/i,
      answer:
        'We serve Salt Lake County and nearby areas across Utah. Share your zip code and I can confirm availability and pricing.',
    },
    // City permit helper (generic with examples)
    {
      test: /(permit|street permit|right of way|row permit|parking)/i,
      answer:
        'Street permits: Some cities require a right‑of‑way (ROW) permit if the dumpster sits on the street. Driveway placements usually need no permit.\n\nCity examples (info pages may change):\n• Salt Lake City ROW Permits — search: "SLC ROW permit"\n• Murray City Permits — search: "Murray City dumpster permit"\n• Sandy City Permits — search: "Sandy City ROW permit"\n\nTell me your city and I\'ll guide you to the current link or we can place in your driveway instead.'
    },
    // Recycling/alternatives
    {
      test: /(recycle|recycling|green waste|yard waste site|hazardous drop|landfill|transfer station)/i,
      answer:
        'Recycling & alternatives in Utah:\n• Green waste: many cities run seasonal sites for leaves/branches\n• Metal/appliances: local scrap recyclers may pay for clean metal\n• Hazardous waste: county facilities handle chemicals/paint/batteries\n\nIf you want, tell me your city and materials and I\'ll point you to the best option.'
    },
    {
      test: /(weight|limit|ton|overage)/i,
      answer:
        'Weight billing: We drop off the dumpster empty and there are no “free tons” included. After pickup, the load is weighed at the disposal facility and billed at $55/ton.\n\nTypical project weights (estimates, not included):\n• 15 yd ≈ 1.5–2 tons\n• 20 yd ≈ 2–3 tons\n• 30 yd ≈ 3–4 tons\nTell me your materials and I\'ll estimate.',
    },
    {
      test: /(cannot|not allowed|prohibit|hazard|paint|tires|mattress|appliance|refrigerator)/i,
      answer:
        'Prohibited items include: hazardous waste, liquids/paints, batteries, refrigerants (unless drained/tagged), and certain electronics (varies by landfill). Tell me what you have and I’ll confirm.',
    },
    {
      test: /(phone|call|contact)/i,
      answer:
        'Call or text (801) 918-6000, or I can take your name and phone here for a callback.',
    },
    // What's included
    {
      test: /(include|what comes with|service|extras|what do i get|features)/i,
      answer:
        'Your dumpster rental includes: Delivery and pickup, a standard rental period, straightforward pricing, professional driver/team, and driveway-friendly placement. Optional add-ons: extended rental periods, additional pickups, heavy material loads, Saturday delivery/pickup, and priority scheduling. Would you like me to start a quick quote? I can take your name, phone, and zip.',
    },
    // Duration when they ask about sizes explicitly
    {
      test: /((10|12|15|20|30|40)\s*-?\s*(yd|yard)s?)|\b(size|dumpster size)\b/i,
      answer:
        `Great choice! How many days do you need?\n\n• 1 day (discounted)\n• 3 days\n• 7 days — most popular\n• 14 days\n• 30 days\n\nWe can accommodate longer periods. What works best for your timeline?\n\nTypical dimensions:\n• 15 yd — ${chatKnowledge.sizes.dimensions['15']}\n• 20 yd — ${chatKnowledge.sizes.dimensions['20']}\n• 30 yd — ${chatKnowledge.sizes.dimensions['30']}`,
    },
    // Delivery info
    {
      test: /(delivery|when|schedule|drop ?off|pickup|timeline|available)/i,
      answer:
        'Delivery process:\n\n• Next‑day delivery in most areas\n• Flexible scheduling around your timeline\n• Easy driveway placement\n\nWhat’s your preferred delivery date?',
    },
    // Contact info
    {
      test: /(contact info|phone|email|reach|number|how to contact)/i,
      answer:
        `Contact us:\n• Phone: ${chatKnowledge.contact.phone}\n• Email: ${chatKnowledge.contact.email}\n• Web: ${chatKnowledge.contact.site}\n\nWe’ll connect within ~30 minutes during business hours.`,
    },
    // Prohibited items
    {
      test: /(can'?t put|prohibit|not allowed|hazard|hazardous|chemical|what can i put|restriction)/i,
      answer:
        'Not allowed:\n• Chemicals or paint\n• Batteries\n• Electronics\n• Items with freon\n• Medical waste\n• Hazardous materials\n\nWe do accept: construction debris, household items, yard waste, and clean concrete/asphalt (ask about heavy loads).',
    },
    // Talk to agent/live human
    {
      test: /(talk to agent|speak to someone|human|representative|call|real person|live agent|yes)/i,
      answer:
        'Absolutely! I’ll connect you with our team right away. We can help with custom quotes, scheduling, and special requests. You can also call (801) 918-6000. A team member will reach out within ~30 minutes.',
    },
    // Project type prompt when rental period mentioned
    {
      test: /(day|days|week|weeks|rental period|timeline|7\s?days|1\s?day|3\s?days|14\s?days|30\s?days)/i,
      answer:
        'What type of project are you working on?\n\n• Home renovation/remodeling\n• Concrete/asphalt debris\n• Landscaping/yard waste\n• Construction/cleanouts\n• Demolition debris\n• Other\n\nI’ll recommend the right size.',
    },
    // Project type responses
    {
      test: /(home renovation|remodel|construction project|cleanout|debris|landscaping|yard|construction debris|demolition|renovation)/i,
      answer:
        'Typical fits by project:\n• 15 yd — smaller projects\n• 20 yd — most home projects\n• 30 yd — large/renovation or demolition\n\nWant a specific recommendation and a quick quote?',
    },
  ];

  for (const block of faqBlocks) {
    if (block.test.test(text)) {
      return block.answer + ' Would you like a quick quote? I can take your name, phone, zip, and preferred size.';
    }
  }

  // Smart clarifying fallback
  return (
    'I want to get you the exact info you need. A couple quick options:\n\n' +
    '• Share your zip and I\'ll confirm pricing/availability\n' +
    '• Tell me your project (renovation, landscaping, concrete, roofing, construction, demo) and I\'ll recommend a size\n' +
    `• Ask about anything: pricing, timing, placement, permits, weight limits\n\nFor immediate help, call ${chatKnowledge.contact.phone}. Say "quote" and I\'ll take your name and phone to get this moving.`
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = sanitize(body.action);

    switch (action) {
      case 'init': {
        const sessionId = generateSessionId();
        return NextResponse.json({ ok: true, sessionId });
      }

      case 'message': {
        const userMessage = sanitize(body.message);
        const reply = createAssistantReply(userMessage);
        return NextResponse.json({ ok: true, reply });
      }

      case 'lead': {
        const firstName = sanitize(body.firstName);
        const lastName = sanitize(body.lastName);
        const email = sanitize(body.email);
        const phone = sanitize(body.phone);
        const zipCode = sanitize(body.zipCode);
        const dumpsterSize = sanitize(body.dumpsterSize);
        const leadType = sanitize((body.leadType as string) || '');
        // Sell-house specific fields
        const address = sanitize((body.address as string) || '');
        const askingPrice = sanitize((body.askingPrice as string) || '');
        const beds = sanitize((body.beds as string) || '');
        const baths = sanitize((body.baths as string) || '');
        const squareFeet = sanitize((body.squareFeet as string) || '');
        const agentName = sanitize((body.agentName as string) || '');
        const agentPhone = sanitize((body.agentPhone as string) || '');
        const idealClosingDate = sanitize((body.idealClosingDate as string) || '');
        const notes = sanitize((body.notes as string) || '');
        const photosMeta = Array.isArray(body.photosMeta) ? body.photosMeta as any[] : [];
        const pageUrl = sanitize(body.pageUrl);
        const transcript: ChatMessage[] = Array.isArray(body.transcript) ? body.transcript : [];

        const submittedAt = new Date().toLocaleString();
        const subject = leadType === 'sell_house'
          ? `New Sell House Lead - Icon Dumpsters`
          : `New Chat Lead - ${dumpsterSize ? `${dumpsterSize} Yard` : 'Icon Dumpsters'}`;

        const signature = `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px">
        <tr>
          <td style="vertical-align:top;padding-right:10px">
            <img src="https://icondumpsters.com/Icon_Dumpsters_Final.png" alt="Icon Dumpsters - Utah dumpster rental" width="48" height="48" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px" />
          </td>
          <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;color:#111827">
            <div style="font-weight:600">Best regards,</div>
            Jeremy<br/>
            Manager | Icon Dumpsters<br/>
            📞 (801) 918-6000<br/>
            📧 icondumpsters@gmail.com<br/>
            🌐 <a href="https://icondumpsters.com" style="color:#4e37a8;text-decoration:underline">icondumpsters.com</a><br/>
            <div style="margin-top:6px;color:#4e37a8">♻ Affordable | Fast | Local</div>
          </td>
        </tr>
      </table>`;

        const transcriptHtml = transcript
          .map((m) => `
            <tr>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;width:120px;font-weight:600;">${m.role}</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;">${m.content}</td>
              <td style="padding:8px;border-bottom:1px solid #e5e7eb;color:#6b7280;">${m.timestamp ?? ''}</td>
            </tr>
          `)
          .join('');

        const sellHouseBlock = leadType === 'sell_house' ? `
              <h2 style="margin-top:24px;color:#4e37a8">Property Details</h2>
              <table>
                <tr><th>Address</th><td>${address}</td></tr>
                <tr><th>Asking Price</th><td>${askingPrice ? `$${askingPrice}` : ''}</td></tr>
                <tr><th>Beds / Baths</th><td>${beds || '-'} / ${baths || '-'}</td></tr>
                <tr><th>Square Footage</th><td>${squareFeet}</td></tr>
                <tr><th>Ideal Closing Date</th><td>${idealClosingDate}</td></tr>
                <tr><th>Agent</th><td>${agentName} ${agentPhone ? `(${agentPhone})` : ''}</td></tr>
                <tr><th>Notes</th><td>${notes}</td></tr>
                <tr><th>Photos</th><td>${photosMeta && photosMeta.length ? photosMeta.map((p:any)=>`${p.name} (${Math.round((p.size||0)/1024)} KB)`).join('<br/>') : '—'}</td></tr>
              </table>
            ` : '';

        const genericDetails = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>${subject}</title>
            <style>
              body { font-family: Arial, sans-serif; color: #111827; }
              .container { max-width: 720px; margin: 0 auto; padding: 24px; }
              h1 { color: #4e37a8; }
              table { width: 100%; border-collapse: collapse; margin-top: 16px; }
              th, td { text-align: left; padding: 8px; border-bottom: 1px solid #e5e7eb; }
              th { background: #f3f4f6; }
              .small { color: #6b7280; font-size: 12px; margin-top: 16px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>${leadType === 'sell_house' ? 'New Sell House Lead' : 'New Chat Lead'}</h1>
              <table>
                <tr><th>Name</th><td>${firstName} ${lastName}</td></tr>
                <tr><th>Email</th><td>${email}</td></tr>
                <tr><th>Phone</th><td>${phone}</td></tr>
                ${leadType === 'sell_house' ? '' : `<tr><th>Zip Code</th><td>${zipCode}</td></tr>`}
                ${leadType === 'sell_house' ? '' : `<tr><th>Dumpster Size</th><td>${dumpsterSize}</td></tr>`}
                <tr><th>Page URL</th><td>${pageUrl}</td></tr>
                <tr><th>Submitted At</th><td>${submittedAt}</td></tr>
              </table>
              ${sellHouseBlock}
              <h2 style="margin-top:24px;color:#4e37a8">Chat Transcript</h2>
              <table>
                <tr>
                  <th>Role</th>
                  <th>Message</th>
                  <th>Time</th>
                </tr>
                ${transcriptHtml}
              </table>
              <p class="small">${signature}</p>
            </div>
          </body>
        </html>`;

        await emailService.sendEmail(
          'icondumpsters@gmail.com',
          subject,
          '',
          genericDetails
        );

        // Optional: send confirmation if email provided
        if (email) {
          await emailService.sendEmail(
            email,
            'We received your chat – Icon Dumpsters',
            '',
            `
            <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;">
              <h1 style="color:#4e37a8;">Thanks for chatting with Icon Dumpsters</h1>
              <p>We have your details and will follow up shortly. For immediate help, call <a href="tel:+18019186000" style="color:#4e37a8;text-decoration:underline">(801) 918-6000</a>.</p>
              ${signature}
            </div>`
          );
        }

        return NextResponse.json({ ok: true });
      }

      default:
        return NextResponse.json({ ok: false, error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });
  }
}


