'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { chatConfig } from '../config/chat';
import { isZipInSaltLakeCounty, zipToCity } from '../config/serviceAreas';
import { chatKnowledge } from '../config/chatKnowledge';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  quickActions?: Array<{ label: string; action: string }>;
};

type ConversationStage = 'zip' | 'size' | 'project' | 'cta';
type AgentStatus = { online: boolean; queueSize: number; etaMinutes: number };

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [smsPhone, setSmsPhone] = useState('');
  const [lead, setLead] = useState({ firstName: '', lastName: '', email: '', phone: '', zipCode: '', dumpsterSize: '' });
  const pageUrl = useMemo(() => (typeof window !== 'undefined' ? window.location.href : ''), []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMsgRef = useRef<HTMLDivElement | null>(null);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [stage, setStage] = useState<ConversationStage>('zip');
  const [pendingQuote, setPendingQuote] = useState<{ size?: '15' | '20' | '30'; days?: number } | null>(null);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [quickLinks, setQuickLinks] = useState<Array<{ label: string; url: string }>>([]);
  const leadTimerRef = useRef<number | null>(null);
  const logoSrc = '/Icon_Dumpsters_Final.png';
  const assistantCount = useMemo(() => messages.filter(m => m.role === 'assistant').length, [messages]);
  const smsVisible = useMemo(() => assistantCount >= 3 || (stage === 'cta' && assistantCount >= 2), [assistantCount, stage]);
  const [unreadCount, setUnreadCount] = useState(0);
  const lastSendAtRef = useRef<number>(0);
  const [agentStatus, setAgentStatus] = useState<AgentStatus>({ online: true, queueSize: 0, etaMinutes: 2 });
  const [agentMode, setAgentMode] = useState<'bot' | 'waiting'>('bot');
  const lastQuoteRef = useRef<{ zip: string; city: string; size: '15' | '20' | '30'; days: number; estimate: number } | null>(null);

  function handleQuickAction(action: string) {
    if (action === 'book_now') {
      setShowLeadForm(true);
      // Focus the phone field after a brief delay
      setTimeout(() => {
        const phoneInput = document.getElementById('phone-input') as HTMLInputElement;
        if (phoneInput) {
          phoneInput.focus();
          phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }

  function formatText(raw: string): string {
    // Normalize newlines and bullets across all responses
    let t = raw.replace(/\r\n/g, '\n');
    // Convert hyphen bullets to dots
    t = t.replace(/^\s*[-*]\s+/gm, '• ');
    // Ensure a space after em dashes headings
    t = t.replace(/—(\S)/g, '— $1');
    // Collapse multiple empty lines to one
    t = t.replace(/\n{3,}/g, '\n\n');
    // Trim trailing whitespace on lines
    t = t.replace(/\s+$/gm, '');
    return t;
  }

  function renderRich(content: string, bodyClass = 'text-gray-700', headerClass = 'text-gray-900', linkClass = 'text-[#4e37a8] underline') {
    const lines = formatText(content).split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length) {
        elements.push(
          <ul className="ml-4 my-1 space-y-1 list-disc text-gray-700" key={`ul-${elements.length}`}>
            {listItems.map((it, idx) => (
              <li key={`li-${elements.length}-${idx}`}>{it.replace(/^•\s*/, '')}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const linkify = (text: string): (JSX.Element | string)[] => {
      const parts: (JSX.Element | string)[] = [];
      const regex = /(https?:\/\/[^\s]+|\/[a-zA-Z0-9\-\/]+|tel:\+?[0-9\-\(\) ]+)/g;
      let lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = regex.exec(text)) !== null) {
        const [match] = m;
        if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
        // Avoid turning substrings like "15/20/30" into links. Only treat a site path if it starts a token.
        const prevChar = m.index > 0 ? text[m.index - 1] : '';
        const isTokenStart = prevChar === '' || /[\s\(\[]/.test(prevChar);
        if (match.startsWith('/') && !isTokenStart) {
          // push as plain text
          parts.push(match);
        } else if (match.startsWith('tel:')) {
          parts.push(<a key={`tel-${parts.length}`} href={match} className={linkClass}>{match.replace('tel:', '')}</a>);
        } else {
          const href = match;
          parts.push(<a key={`a-${parts.length}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{match}</a>);
        }
        lastIndex = m.index + match.length;
      }
      if (lastIndex < text.length) parts.push(text.slice(lastIndex));
      return parts;
    };

    lines.forEach((line, i) => {
      if (/^\s*•\s+/.test(line)) {
        listItems.push(line);
        return;
      }
      flushList();
      if (/^\s*—\s+/.test(line)) {
        elements.push(
          <div key={`h-${i}`} className={`mt-2 mb-1 font-semibold ${headerClass}`}>
            {linkify(line.replace(/^\s*—\s+/, '— ').trim())}
          </div>
        );
      } else if (line.trim().length) {
        elements.push(
          <p key={`p-${i}`} className={bodyClass}>
            {linkify(line)}
          </p>
        );
      } else {
        elements.push(<div key={`sp-${i}`} className="h-1" />);
      }
    });
    if (listItems.length) {
      elements.push(
        <ul className={`ml-4 my-1 space-y-1 list-disc ${bodyClass}`} key={`ul-${elements.length}`}>
          {listItems.map((it, idx) => (
            <li key={`li-${elements.length}-${idx}`}>{linkify(it.replace(/^•\s*/, ''))}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
    return <>{elements}</>;
  }

  // Light humanization layer to soften tone
  function humanizeText(raw: string): string {
    try {
      const trimmed = raw.trim();
      // Skip if already starts with a friendly opener or heading/bullets
      if (/^(hi|hey|hello|perfect|great|nice|awesome|sure|absolutely|got it|sounds good)/i.test(trimmed) || /^[—•]/.test(trimmed)) {
        return raw;
      }
      const openers = [
        'Got it —',
        'Sounds good —',
        'Absolutely —',
        'No problem —',
        'Happy to help —',
      ];
      const opener = openers[Math.floor(Math.random() * openers.length)];
      let t = `${opener} ${trimmed}`;
      // Small contractions for a natural voice
      t = t.replace(/\bdo not\b/gi, "don't")
           .replace(/\bcan not\b/gi, "can't")
           .replace(/\bwe will\b/gi, "we'll")
           .replace(/\bwe are\b/gi, "we're")
           .replace(/\byou are\b/gi, "you're")
           .replace(/\bit is\b/gi, "it's")
           .replace(/\bthat is\b/gi, "that's");
      return t;
    } catch {
      return raw;
    }
  }

  function clearLeadTimer() {
    if (leadTimerRef.current) {
      window.clearTimeout(leadTimerRef.current);
      leadTimerRef.current = null;
    }
  }

  function scheduleLeadForm(delayMs = 10000) {
    clearLeadTimer();
    leadTimerRef.current = window.setTimeout(() => {
      setShowLeadForm(true);
      leadTimerRef.current = null;
    }, delayMs);
  }

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'init' }),
        });
        const data = await res.json();
        if (data?.sessionId) setSessionId(data.sessionId);
      } catch {}
    }
    init();

    if (typeof window === 'undefined') return;

    // Restore persisted chat state
    try {
      const stored = localStorage.getItem('icon_chat_state_v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.messages)) setMessages(parsed.messages);
        if (typeof parsed.isOpen === 'boolean') setIsOpen(parsed.isOpen);
        if (parsed.stage) setStage(parsed.stage);
        if (parsed.lead) setLead(parsed.lead);
        if (parsed.pendingQuote) setPendingQuote(parsed.pendingQuote);
        if (typeof parsed.unreadCount === 'number') setUnreadCount(parsed.unreadCount);
      }
    } catch {}

    // Session cap for auto-open
    const capKey = chatConfig.triggers.sessionCap.key;
    const now = Date.now();
    const cappedAt = Number(localStorage.getItem(capKey) || 0);
    const isCapped = cappedAt && now - cappedAt < chatConfig.triggers.sessionCap.ttlMs;

    const openWithGreeting = (source: string) => {
      setIsOpen((prev) => {
        if (prev) return prev;
        // Mark cap when auto opened
        try { localStorage.setItem(capKey, String(Date.now())); } catch {}
        return true;
      });
      setMessages((prev) => {
        if (prev.length) return prev;
        const path = window.location.pathname || '/';
        const greeting = chatConfig.greetings.find((g) => g.pattern.test(path))?.message || chatConfig.defaultGreeting;
        const liveBadge = '\n\n— Icon Expert is live now —';
        return [{ role: 'assistant', content: greeting + liveBadge, timestamp: new Date().toISOString() }];
      });
      setStage('zip');
      // analytics event
      try { (window as any).dataLayer?.push({ event: 'chat_open', source }); } catch {}
    };

    const timers: number[] = [];
    const disposers: Array<() => void> = [];

    // Open immediately on load if configured (ignore cap)
    if (chatConfig.triggers.openOnLoad) {
      openWithGreeting('load');
    } else {
      // Time delay trigger
      if (!isCapped && chatConfig.triggers.timeDelayMs > 0) {
        const t = window.setTimeout(() => openWithGreeting('time_delay'), chatConfig.triggers.timeDelayMs);
        timers.push(t);
      }

      // Scroll trigger
      if (!isCapped && chatConfig.triggers.scrollPercent > 0) {
        const onScroll = () => {
          const doc = document.documentElement;
          const maxScroll = doc.scrollHeight - window.innerHeight;
          const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
          if (percent >= chatConfig.triggers.scrollPercent) {
            openWithGreeting('scroll');
            window.removeEventListener('scroll', onScroll);
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        disposers.push(() => window.removeEventListener('scroll', onScroll));
      }

      // Exit-intent trigger
      if (!isCapped && chatConfig.triggers.exitIntent) {
        const onMouseOut = (e: MouseEvent) => {
          if (!e.relatedTarget && (e as any).clientY <= 0) {
            openWithGreeting('exit_intent');
            window.removeEventListener('mouseout', onMouseOut);
          }
        };
        window.addEventListener('mouseout', onMouseOut);
        disposers.push(() => window.removeEventListener('mouseout', onMouseOut));
      }

      // Idle trigger
      if (!isCapped && chatConfig.triggers.idleMs > 0) {
        let idleTimer = window.setTimeout(() => openWithGreeting('idle'), chatConfig.triggers.idleMs);
        const reset = () => {
          window.clearTimeout(idleTimer);
          idleTimer = window.setTimeout(() => openWithGreeting('idle'), chatConfig.triggers.idleMs);
        };
        const events: (keyof DocumentEventMap)[] = ['mousemove', 'keydown', 'scroll', 'touchstart'];
        events.forEach((ev) => window.addEventListener(ev, reset, { passive: true } as any));
        disposers.push(() => {
          window.clearTimeout(idleTimer);
          events.forEach((ev) => window.removeEventListener(ev, reset));
        });
      }
    }

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      disposers.forEach((fn) => {
        try { fn(); } catch {}
      });
    };
  }, []);

  // Persist key chat state
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('icon_chat_state_v1', JSON.stringify({ messages, isOpen, stage, lead, pendingQuote, unreadCount }));
    } catch {}
  }, [messages, isOpen, stage, lead, pendingQuote, unreadCount]);

  // Poll live agent status
  useEffect(() => {
    let cancelled = false;
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/analytics', { method: 'GET' });
        const data = await res.json();
        if (!cancelled && data?.status) setAgentStatus(data.status);
      } catch {}
    };
    fetchStatus();
    const id = window.setInterval(fetchStatus, 20000);
    return () => { cancelled = true; window.clearInterval(id); };
  }, []);

  useEffect(() => {
    // Scroll so the most recent message's top aligns with the top of the viewport
    if (scrollRef.current && lastMsgRef.current) {
      const top = lastMsgRef.current.offsetTop;
      scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus management and ESC to close
  useEffect(() => {
    if (isOpen) {
      // reset unread and focus input
      setUnreadCount(0);
      setTimeout(() => {
        try { inputRef.current?.focus(); } catch {}
      }, 50);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          setTimeout(() => {
            try { openBtnRef.current?.focus(); } catch {}
          }, 50);
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [isOpen]);

  async function sendMessage() {
    if (!input.trim() || isSubmitting) return;
    const now = Date.now();
    if (now - lastSendAtRef.current < 600) return; // brief cooldown to prevent accidental double sends
    lastSendAtRef.current = now;
    // Agent takeover gating
    if (agentMode === 'waiting' && !/\b(bot|resume)\b/i.test(input)) {
      const gateMsg: ChatMessage = { role: 'assistant', content: `A live agent is on the way (queue ${agentStatus.queueSize}, ETA ~${agentStatus.etaMinutes} min). Type "bot" to continue automated help or "cancel" to abort.`, timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, gateMsg]);
      setInput('');
      return;
    }
    if (agentMode === 'waiting' && /\b(cancel|bot|resume)\b/i.test(input)) {
      setAgentMode('bot');
      const resumeMsg: ChatMessage = { role: 'assistant', content: 'Okay — resuming automated assistance. You can say "talk to agent" anytime to connect back with our team.', timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, resumeMsg]);
      setInput('');
      return;
    }
    const userText = input.trim();
    setInput('');
    const userMsg: ChatMessage = { role: 'user', content: userText, timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    // Any user action cancels pending lead form timer
    clearLeadTimer();
    try { (window as any).dataLayer?.push({ event: 'chat_message', role: 'user' }); } catch {}
    // Guided flow
    const zipRegex = /\b(\d{5})(?:-\d{4})?\b/;
    const lower = userText.toLowerCase();

    // Global ZIP detection (always acknowledge city/service)
    const zipGlobalMatch = userText.match(zipRegex);
    if (zipGlobalMatch) {
      const fiveZip = zipGlobalMatch[1];
      setLead((prev) => ({ ...prev, zipCode: fiveZip }));
      // If we already presented a booking summary, prefer concise CTA instead of repeating pricing
      if (lastQuoteRef.current) {
        const cityCta = zipToCity[fiveZip] || `ZIP ${fiveZip}`;
        const q = lastQuoteRef.current;
        const ctaMsg: ChatMessage = {
          role: 'assistant',
          content: humanizeText(`You\'re all set — ${cityCta}. To book your ${q.size} yd for ${q.days} day${q.days>1?'s':''} at $${q.estimate}, you can call ${chatKnowledge.contact.phone}, email ${chatKnowledge.contact.email}, or tap Talk to agent and we\'ll take it from here.`),
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, ctaMsg]);
        setStage('cta');
        setQuickReplies(['Talk to agent', 'quote']);
        setQuickLinks([{ label: 'Call (801) 918-6000', url: 'tel:+18019186000' }, { label: 'Email us', url: 'mailto:icondumpsters@gmail.com' }]);
        return;
      }
      // If we already collected a quote (size + days), finalize and move to booking
      if (pendingQuote && pendingQuote.size && pendingQuote.days) {
        const size = pendingQuote.size;
        const days = pendingQuote.days;
        const eb = chatKnowledge.pricing.exampleBundles.general;
        const baseBySize: Record<'15' | '20' | '30', number> = { '15': eb['15'].bundle3to7, '20': eb['20'].bundle3to7, '30': eb['30'].bundle3to7 } as any;
        const base = baseBySize[size];
        let estimate = base;
        if (days === 1) estimate = Math.round(base * (1 - chatKnowledge.pricing.oneDayDiscountRate));
        else if (days <= 7) estimate = base;
        else if (days === 14) estimate = Math.round(base * 1.5);
        else if (days === 30) estimate = chatKnowledge.pricing.thirtyDay[size];
        const cityFinal = zipToCity[fiveZip] || `ZIP ${fiveZip}`;
        const finalMsg: ChatMessage = {
          role: 'assistant',
          content: humanizeText(`Perfect — ${cityFinal}. We serve that area.\n\nBooking summary:\n• ${size} yd for ${days} day${days>1?'s':''}\n• Estimated price: $${estimate}\n• Weight billed at $${chatKnowledge.pricing.weightPerTon}/ton after service\n\nTo book now at this price, call ${chatKnowledge.contact.phone}, email ${chatKnowledge.contact.email}, or tap Talk to agent. If you prefer, add your contact info here and we\’ll call you right back.`),
          timestamp: new Date().toISOString(),
        };
        lastQuoteRef.current = { zip: fiveZip, city: cityFinal, size, days, estimate };
        setMessages((prev) => [...prev, { ...finalMsg, quickActions: [{ label: 'Book Now', action: 'book_now' }] }]);
        setShowLeadForm(true);
        scheduleLeadForm(8000);
        setStage('cta');
        setPendingQuote(null);
        return;
      }
      if (!isZipInSaltLakeCounty(fiveZip)) {
        const outMsg: ChatMessage = {
          role: 'assistant',
          content:
            'Hey, I see you\'re outside our main service area in Salt Lake County. No worries though! Give us a call at (801) 918-6000 and we can check if we can still help you out. Or you can use our calculator for a quick estimate: /dumpster-calculator',
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, outMsg]);
        scheduleLeadForm();
        setStage('cta');
        return;
      }
      const bundles = chatKnowledge.pricing.exampleBundles.general;
      const rawCity = zipToCity[fiveZip];
      const city = rawCity || `ZIP ${fiveZip}`;
      const cityOpeners = [
        `${city}! We serve that area.`,
        `We serve ${city}!`,
        `${city}! We’re in that area all the time.`,
        `${city}! Great area — you’re covered.`,
        `Nice — ${city}. We serve that area.`
      ];
      const opener = cityOpeners[Math.floor(Math.random() * cityOpeners.length)];
      const botMsg: ChatMessage = {
        role: 'assistant',
        content:
          humanizeText(`${opener}\n\nHere\'s what we\'re looking at locally (3–7 days):\n• 15 yard — $${bundles['15'].bundle3to7}\n• 20 yard — $${bundles['20'].bundle3to7}\n• 30 yard — $${bundles['30'].bundle3to7}\n1‑Day deals: $${bundles['15'].oneDay}/$${bundles['20'].oneDay}/$${bundles['30'].oneDay}   •   30‑Day: $${bundles['15'].thirtyDay}/$${bundles['20'].thirtyDay}/$${bundles['30'].thirtyDay}\nWeight billed after pickup at $${chatKnowledge.pricing.weightPerTon}/ton.\n\nWhat size do you prefer — 15, 20, or 30 yard?`),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setStage('size');
      setQuickReplies(['15', '20', '30']);
      setQuickLinks([{ label: 'Open Calculator', url: '/dumpster-calculator' }]);
      try { (window as any).dataLayer?.push({ event: 'chat_flow_stage', stage: 'project' }); } catch {}
      return;
    }

    // Global command shortcuts (always respond regardless of stage)
    if (/(^|\b)(info|help|pricing|free\s*quote|freequote|breakdown|resources|billing)(\b|$)/i.test(userText)) {
      const eb = chatKnowledge.pricing.exampleBundles.general;
      const p10 = 250; // example for 10-yard general
      const d = chatKnowledge.pricing;
      const infoMsg: ChatMessage = {
        role: 'assistant',
        content:
          `Hey! Here's the quick rundown on our dumpster options:\n\n— What we've got —\n• Check out our sizes: /dumpster-sizes\n• Crunch some numbers: /dumpster-calculator\n• Got questions? /faq\n• Want a quote? /freequote\n\n— Here's what you're looking at (3–7 days) —\n10‑Yard — $${p10}\n• Perfect for garage cleanouts\n• Small renovations\n• Yard waste\n• 7 days included\n\n15‑Yard — $${eb['15'].bundle3to7}\n• Bathroom remodels\n• Basement cleanouts\n• Roof jobs\n• 10 days included\n\n20‑Yard — $${eb['20'].bundle3to7}\n• Whole house projects\n• Big cleanouts\n• Commercial jobs\n• 14 days included\n\n30‑Yard — $${eb['30'].bundle3to7}\n• Major construction\n• Big demolition jobs\n• Large-scale cleanup\n• 14 days included\n\n— Billing —\n• We drop off empty\n• After pickup, weight is billed at $${d.weightPerTon}/ton\n\nWhat sounds good to you? Just say "quote" and I'll get you set up, or give us a call at (801) 918-6000 if you want to chat with someone right now!`,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, infoMsg]);
      setQuickReplies(['quote', 'prices', 'sizes', 'talk to agent']);
      setQuickLinks([
        { label: 'Sizes & Dimensions', url: '/dumpster-sizes' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Free Quote', url: '/freequote' },
      ]);
      scheduleLeadForm();
      setStage('cta');
      return;
    }

    // Conversational quote: detect size intent
    // Accept bare numbers like "30" or with units like "30 yd"
    const sizeIntent = /(10|12|15|20|30)(?:\s*-?\s*(yd|yard)s?)?/i.exec(lower);
    if (!pendingQuote && sizeIntent) {
      const size = sizeIntent[1] as '15' | '20' | '30';
      if (size === '10' || size === '12') {
        // steer to standard sizes for main flow
        const steer: ChatMessage = { role: 'assistant', content: 'Nice! We do have those smaller sizes for dirt and concrete jobs. For a quick quote though, would a 15, 20, or 30 yard work for you? If you specifically need the 10/12 for heavy materials, just say "specialized" and I\'ll hook you up.', timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, steer]);
        return;
      }
      // Provide instant default quote for 3–7 days, then ask for days
      const eb = chatKnowledge.pricing.exampleBundles.general;
      const baseBySize: Record<'15' | '20' | '30', number> = { '15': eb['15'].bundle3to7, '20': eb['20'].bundle3to7, '30': eb['30'].bundle3to7 } as any;
      const estimate = baseBySize[size];
      const instant: ChatMessage = { role: 'assistant', content: `For a ${size} yard, our typical 3–7 day price is about $${estimate}.\n\nIf you need a different length, tell me 1, 3, 7, 14, or 30 days and I\'ll adjust it. We drop off empty and bill weight after pickup at $${chatKnowledge.pricing.weightPerTon}/ton.`, timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, instant, { role: 'assistant', content: 'How many days do you need? (1, 3, 7, 14, or 30)', timestamp: new Date().toISOString() }]);
      setPendingQuote({ size });
      return;
    }

    // Specialized shortcut flow (clean dirt, mixed, concrete)
    if (!pendingQuote && /(clean\s*dirt|dirt only|concrete|cement|asphalt|mixed(\s*load)?|specialized)/i.test(userText)) {
      // Clear any existing general size flow
      if (pendingQuote) setPendingQuote(null);
      const type = (() => {
        if (/clean\s*dirt|dirt only/i.test(userText)) return 'cleanDirt10';
        if (/concrete|cement|asphalt/i.test(userText)) return 'concrete12';
        if (/mixed(\s*load)?/i.test(userText)) return 'mixed10';
        return '';
      })();
      const daysMatch = /(30|14|7|3|1)\s*(day|days)?/i.exec(lower);
      if (type && daysMatch) {
        const days = Number(daysMatch[1]);
        const sp = chatKnowledge.pricing.exampleBundles.specialized as any;
        const base = sp[type].bundle3to7 as number;
        let estimate = base;
        if (days === 1) estimate = sp[type].oneDay;
        else if (days <= 7) estimate = base;
        else if (days === 14) estimate = Math.round(base * 1.5);
        else if (days === 30) estimate = sp[type].thirtyDay;
        const label = type === 'cleanDirt10' ? '10 yd Clean Dirt' : type === 'mixed10' ? '10 yd Mixed' : '12 yd Concrete';
        const msg: ChatMessage = {
          role: 'assistant',
          content: `${label} for ${days} day${days>1?'s':''} is approximately $${estimate}.\n\nThis is specialized flat‑rate pricing for that material. What\'s your zip code so I can confirm scheduling?`,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, msg]);
        setStage('zip');
        return;
      }
      const m: ChatMessage = { role: 'assistant', content: humanizeText('Specialized options:\n• 10 yd Clean Dirt — flat‑rate for clean dirt/soil only\n• 10 yd Mixed — heavy mixed materials (priced accordingly)\n• 12 yd Concrete — flat‑rate for clean concrete/asphalt\n\nTell me which one and how many days (1, 3, 7, 14, 30).'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, m]);
      return;
    }

    // If we're expecting days (general sizes)
    if (pendingQuote && pendingQuote.size && !pendingQuote.days) {
      const daysMatch = /(30|14|7|3|1)\s*(day|days)?/i.exec(lower);
      if (daysMatch) {
        const days = Number(daysMatch[1]);
        const size = pendingQuote.size;
        setPendingQuote({ size, days });
        // compute estimate using calculator logic
        const eb = chatKnowledge.pricing.exampleBundles.general;
        const baseBySize: Record<'15' | '20' | '30', number> = { '15': eb['15'].bundle3to7, '20': eb['20'].bundle3to7, '30': eb['30'].bundle3to7 } as any;
        const base = baseBySize[size];
        let estimate = base;
        if (days === 1) {
          estimate = Math.round(base * (1 - chatKnowledge.pricing.oneDayDiscountRate));
        } else if (days <= 7) {
          estimate = base;
        } else if (days === 14) {
          // approximate add second-week bundle as +50% of base for simplicity
          estimate = Math.round(base * 1.5);
        } else if (days === 30) {
          estimate = chatKnowledge.pricing.thirtyDay[size];
        }
        const quote = `Alright, here\'s what I\'ve got for you: ${size} yard for ${days} day${days>1?'s':''} in the Salt Lake area comes out to $${estimate}.\n\n• That covers delivery and pickup\n• Weight charges are $${chatKnowledge.pricing.weightPerTon}/ton after we weigh it\n\nWhat\'s your zip code so I can get this booked for you?`;
        setMessages((prev) => [...prev, { role: 'assistant', content: quote, timestamp: new Date().toISOString() }]);
        setStage('zip');
        return;
      }
      // If they typed something else, gently reprompt
      const reprompt: ChatMessage = { role: 'assistant', content: humanizeText('How many days did you need? You can say 1, 3, 7, 14, or 30 days.'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, reprompt]);
      return;
    }

    if (stage === 'zip') {
      // If the user is just chatting (hi/thanks/info), don't force zip; let server handle below
      if (!/(\b\d{5}\b)/.test(userText) && /(hi|hello|hey|howdy|how are you|what's up|thanks|thank you|info|help)/i.test(lower)) {
        // fall through to server reply at the end
      }
      const zipMatch = userText.match(zipRegex);
      if (zipMatch) {
        const fiveZip = zipMatch[1];
        setLead((prev) => ({ ...prev, zipCode: fiveZip }));
        // If we already collected a quote (size + days), finalize and move to booking
        if (pendingQuote && pendingQuote.size && pendingQuote.days) {
          const size = pendingQuote.size;
          const days = pendingQuote.days;
          const eb = chatKnowledge.pricing.exampleBundles.general;
          const baseBySize: Record<'15' | '20' | '30', number> = { '15': eb['15'].bundle3to7, '20': eb['20'].bundle3to7, '30': eb['30'].bundle3to7 } as any;
          const base = baseBySize[size];
          let estimate = base;
          if (days === 1) estimate = Math.round(base * (1 - chatKnowledge.pricing.oneDayDiscountRate));
          else if (days <= 7) estimate = base;
          else if (days === 14) estimate = Math.round(base * 1.5);
          else if (days === 30) estimate = chatKnowledge.pricing.thirtyDay[size];
          const cityFinal = zipToCity[fiveZip] || `ZIP ${fiveZip}`;
          const finalMsg: ChatMessage = {
            role: 'assistant',
            content: `Perfect — ${cityFinal}.\n\nBooking summary:\n• ${size} yd for ${days} day${days>1?'s':''}\n• Estimated price: $${estimate}\n• Weight billed at $${chatKnowledge.pricing.weightPerTon}/ton after service\n\nReady to book now? Add your contact info and we’ll call you right back to finalize.`,
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, { ...finalMsg, quickActions: [{ label: 'Book Now', action: 'book_now' }] }]);
          setShowLeadForm(true);
          scheduleLeadForm(8000);
          setStage('cta');
          setPendingQuote(null);
          return;
        }
        if (!isZipInSaltLakeCounty(fiveZip)) {
          const outMsg: ChatMessage = {
            role: 'assistant',
            content:
              'Hey, I see you\'re outside our main service area in Salt Lake County. No worries though! Give us a call at (801) 918-6000 and we can check if we can still help you out. Or you can use our calculator for a quick estimate: /dumpster-calculator',
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, outMsg]);
          scheduleLeadForm();
          setStage('cta');
          return;
        }
        const bundles = chatKnowledge.pricing.exampleBundles.general;
        const rawCity = zipToCity[fiveZip];
        const city = rawCity || `ZIP ${fiveZip}`;
        const cityOpeners = [
          `${city}! Such a nice area — we serve that area.`,
          `We serve ${city}! Beautiful area.`,
          `${city}! We’re in that area all the time.`,
          `${city}! Great area — you’re covered.`,
          `Nice — ${city}. We serve that area.`
        ];
        const opener = cityOpeners[Math.floor(Math.random() * cityOpeners.length)];
        const botMsg: ChatMessage = {
          role: 'assistant',
          content:
            `${opener}\n\nHere\'s what we\'re looking at locally (3–7 days):\n• 15 yard — $${bundles['15'].bundle3to7}\n• 20 yard — $${bundles['20'].bundle3to7}\n• 30 yard — $${bundles['30'].bundle3to7}\n1‑Day deals: $${bundles['15'].oneDay}/$${bundles['20'].oneDay}/$${bundles['30'].oneDay}   •   30‑Day: $${bundles['15'].thirtyDay}/$${bundles['20'].thirtyDay}/$${bundles['30'].thirtyDay}\nWeight billed after pickup at $${chatKnowledge.pricing.weightPerTon}/ton.\n\nIf you tell me the size (15/20/30) or just say your days (1, 3, 7, 14, 30), I\'ll quote it right now.`,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setStage('project');
        setQuickReplies(['Home renovation', 'Construction', 'Landscaping', 'Concrete', 'Demolition', 'Other']);
        setQuickLinks([{ label: 'Open Calculator', url: '/dumpster-calculator' }]);
        try { (window as any).dataLayer?.push({ event: 'chat_flow_stage', stage: 'project' }); } catch {}
        return;
      }
      const botMsg: ChatMessage = { role: 'assistant', content: humanizeText('Could you share your 5‑digit zip code? That way I can give you the exact pricing for your area.'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, botMsg]);
      return;
    }

    if (stage === 'size') {
      // Expect a size selection, then ask project type
      const sizeMatch = /(15|20|30)(?:\s*-?\s*(yd|yard)s?)?/i.exec(lower);
      if (sizeMatch) {
        const size = sizeMatch[1] as '15'|'20'|'30';
        setLead((prev) => ({ ...prev, dumpsterSize: size }));
        const sizeConfirm: ChatMessage = { role: 'assistant', content: `Great — ${size} yard. What type of job is this?\n\nOptions:\n• Home renovation\n• Construction/cleanout\n• Landscaping/yard\n• Concrete/asphalt\n• Demolition\n• Roofing`, timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, sizeConfirm]);
        setStage('project');
        setQuickReplies(['Home renovation', 'Construction', 'Landscaping', 'Concrete', 'Demolition', 'Roofing']);
        return;
      }
      const reprompt: ChatMessage = { role: 'assistant', content: humanizeText('Which size do you prefer — 15, 20, or 30 yard?'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, reprompt]);
      return;
    }

    if (stage === 'project') {
      const project = (() => {
        if (/(home|remodel|renovation)/i.test(lower)) return 'home';
        if (/(construction|cleanout)/i.test(lower)) return 'construction';
        if (/(landscap|yard)/i.test(lower)) return 'landscaping';
        if (/(concrete|asphalt|cement)/i.test(lower)) return 'concrete';
        if (/(demolition|demo)/i.test(lower)) return 'demolition';
        if (/(roof|shingle)/i.test(lower)) return 'roofing';
        if (/(other|misc)/i.test(lower)) return 'other';
        return '';
      })();

      if (project) {
        const rec = (() => {
          switch (project) {
            case 'home':
              return { size: '20', text: 'I\'d go with a 20 yard - it\'s our most popular size for home projects!\n\n• Perfect for kitchen/bath remodels\n• Handles flooring, cabinets, and light demo\n• Fits nicely in most driveways' };
            case 'construction':
              return { size: '30', text: 'For construction and big cleanouts, I\'d recommend the 30 yard.\n\n• Handles all the bulky stuff\n• Fewer trips to the dump\n• Great for active job sites' };
            case 'landscaping':
              return { size: '15', text: 'For landscaping and yard waste, the 15 yard should do the trick.\n\n• Perfect for branches, shrubs, yard bags\n• Easy to load from the ground\n• Won\'t break the bank' };
            case 'concrete':
              return { size: '15', text: 'For concrete/asphalt, I\'d suggest the 15 yard (we\'ll need to chat about heavy material rules though).\n\n• Better weight distribution\n• Might need special heavy-load pricing' };
            case 'demolition':
              return { size: '30', text: 'For demolition work, definitely go with the 30 yard.\n\n• Handles all that torn-out material\n• Fewer trips to haul everything off' };
            case 'roofing':
              return { size: '20', text: 'For roofing jobs, the 20 yard usually works great.\n\n• Fits shingles and underlayment\n• We\'ll need to talk about weight limits though' };
            default:
              return { size: '20', text: 'For general projects, the 20 yard is usually a safe bet.\n\n• Good balance of size and cost\n• Handles mixed debris well' };
          }
        })();

        setLead((prev) => ({ ...prev, dumpsterSize: rec.size }));

        const resources = (() => {
          switch (project) {
            case 'home':
              return [
                { label: 'Renovation Guide', url: '/home-renovation-waste-disposal-guide' },
                { label: 'Dumpster Sizes', url: '/dumpster-sizes' },
              ];
            case 'construction':
              return [
                { label: 'Construction Waste Guide', url: '/construction-waste-management-2025' },
                { label: 'Dumpster Sizes', url: '/dumpster-sizes' },
              ];
            case 'concrete':
              return [
                { label: 'Concrete Calculator', url: '/concrete-debris-calculator' },
              ];
            case 'demolition':
              return [
                { label: 'Demolition Calculator', url: '/demolition-dumpster-calculator' },
              ];
            case 'landscaping':
              return [
                { label: 'Dumpster Sizes', url: '/dumpster-sizes' },
              ];
            default:
              return [
                { label: 'Dumpster Sizes', url: '/dumpster-sizes' },
              ];
          }
        })();

        const resourceLines = resources.map(r => `• ${r.label} — ${r.url}`).join('\n');

        const reply: ChatMessage = {
          role: 'assistant',
          content:
            `${rec.text}\n\n— Some helpful stuff —\n${resourceLines}\n\nWant to know more about:\n• What we can\'t take (prohibited items)\n• Pricing and timeframes\n• Weight limits\n\nJust say "price", "time", or "prohibited" and I\'ll fill you in.\n\nReady to get this rolling? You can call us right now at (801) 918-6000 or I can grab your info and have someone call you back within 30 minutes.\nFor instant estimates, check out our calculator: /dumpster-calculator`,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, reply]);
        scheduleLeadForm();
        setStage('cta');
        setQuickReplies(['prohibited', 'price', 'time', 'quote']);
        setQuickLinks(resources);
        try { (window as any).dataLayer?.push({ event: 'chat_flow_stage', stage: 'cta', recommendedSize: rec.size }); } catch {}
        return;
      }

      const prompt: ChatMessage = { role: 'assistant', content: humanizeText('No worries! Just let me know what kind of project you\'re working on: home renovation, construction/cleanout, landscaping, concrete/asphalt, demolition, or roofing.'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, prompt]);
      return;
    }

    // CTA stage: if they say quote or yes, show form; otherwise fallback to server reply
    if (stage === 'cta' && /(quote|yes|book|schedule|call|estimate)/i.test(lower)) {
      setShowLeadForm(true);
      const prompt: ChatMessage = { role: 'assistant', content: humanizeText('Great — add your name and phone, and we’ll call you within 30 minutes. Prefer immediate help? Call (801) 918-6000.'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, prompt]);
      try { (window as any).dataLayer?.push({ event: 'chat_flow_stage', stage: 'cta_form' }); } catch {}
      return;
    }

    // CTA info shortcuts for prohibited, pricing, timeframes
    if (stage === 'cta') {
      if (/prohibit|not allowed|hazard|restricted/i.test(lower)) {
        const m: ChatMessage = { role: 'assistant', content: '⛔ Here\'s what we can\'t take:\n• Chemicals and paint\n• Batteries\n• Electronics\n• Stuff with freon\n• Medical waste\n• Hazardous materials\n\n✅ Here\'s what we can handle:\n• Construction debris\n• Household items\n• Yard waste\n• Clean concrete/asphalt\n\nMore details: /dumpster-sizes', timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, m]);
        return;
      }
      if (/price|pricing|cost|time|day|timeline|period/i.test(lower)) {
        const m: ChatMessage = { role: 'assistant', content: humanizeText('Here\'s the deal on pricing and timeframes:\n• 1‑day special (saves you money)\n• 3–7 day standard bundles\n• 14‑ and 30‑day options\n• Weight charges: $55/ton\n\nWant an exact estimate? Check out our calculator: /dumpster-calculator'), timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, m]);
        return;
      }
      if (/bill|billing|charge|payment|card/i.test(lower)) {
        const m: ChatMessage = { role: 'assistant', content: humanizeText('Here\'s how billing works:\n• We charge the base rental to your card when we drop it off\n• After pickup, we weigh the load at the disposal facility\n• Then we bill your card for the actual weight at $55/ton\n• You\'ll get a final receipt with the weight breakdown'), timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, m]);
        return;
      }
      if (/weight|ton|limit/i.test(lower)) {
        const m: ChatMessage = { role: 'assistant', content: humanizeText('Weight billing: We do not include free tons. We drop the dumpster off empty, and after pickup the load is weighed at the disposal facility and billed at $55/ton.\n\nTypical project weights (not included, just estimates):\n• 15 yd ≈ 1.5–2 tons\n• 20 yd ≈ 2–3 tons\n• 30 yd ≈ 3–4 tons'), timestamp: new Date().toISOString() };
        setMessages((prev) => [...prev, m]);
        return;
      }
    }

    // Fallback to server intelligence (handles general chat/FAQs gracefully)
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'message', message: userText, sessionId }),
      });
      const data = await res.json();
      const replyText: string = data?.reply || "Got it! Want me to get you a quick quote? I just need your name, phone, zip, and what size you're thinking.";
      const botMsg: ChatMessage = { role: 'assistant', content: humanizeText(replyText), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, botMsg]);
      try { (window as any).dataLayer?.push({ event: 'chat_message', role: 'assistant' }); } catch {}
      if (/quote|price|estimate|book|schedule/i.test(userText)) {
        setShowLeadForm(true);
      }
      // if reply indicates a quote flow ask days
      if (/15\s?yd|20\s?yd|30\s?yd/i.test(replyText) && !pendingQuote) {
        setPendingQuote({});
      }
    } catch {
      const botMsg: ChatMessage = { role: 'assistant', content: humanizeText('Oops, I\'m having a moment here. Mind trying that again? Or just give us a call at (801) 918-6000 and we\'ll get you sorted out.'), timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function submitLead() {
    if (!lead.phone && !lead.email) return;
    const transcript = messages.slice(-50);
    const normalizedPhone = (lead.phone || '').replace(/\D/g, '');
    const normalizedZip = (lead.zipCode || '').replace(/\D/g, '').slice(0, 5);
    const payload = { action: 'lead', ...lead, phone: normalizedPhone, zipCode: normalizedZip, pageUrl, transcript, sessionId, stage, pendingQuote };
    try {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Perfect! We got your info and we\'ll be in touch shortly. Need help right now? Just give us a call at (801) 918-6000.', timestamp: new Date().toISOString() },
      ]);
      setShowLeadForm(false);
      try { (window as any).dataLayer?.push({ event: 'chat_lead' }); } catch {}
    } catch {}
  }

  async function requestAgentHandoff() {
    const transcript = messages.slice(-30);
    setAgentMode('waiting');
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'handoff_request', transcript, contact: { name: `${lead.firstName} ${lead.lastName}`.trim(), phone: lead.phone, email: lead.email } })
      });
      const msg: ChatMessage = { role: 'assistant', content: `Got it — connecting you to a live agent. Current queue: ${agentStatus.queueSize}. Estimated response ~${agentStatus.etaMinutes} minute${agentStatus.etaMinutes>1?'s':''}. You can keep this window open; we’ll reach out by phone/text. Type "bot" to keep chatting with the assistant.`, timestamp: new Date().toISOString() };
      setMessages((prev) => [...prev, msg]);
    } catch {}
  }

  // Detect when user asks to talk to an agent and auto-send lead capture prompt
  useEffect(() => {
    if (!messages.length) return;
    const last = messages[messages.length - 1];
    if (last.role !== 'user') return;
    const text = last.content.toLowerCase();
    if (/(talk to agent|speak to someone|human|representative|call|real person|live agent|yes)/i.test(text)) {
      setShowLeadForm(true);
    }
    // If user provides a likely zip code, follow up with size suggestion
    if (/\b(\d{5})(?:-\d{4})?\b/.test(text) || /(zip|zipcode|zip code|location|city|address|area)/i.test(text)) {
      const botMsg: ChatMessage = {
        role: 'assistant',
        content: 'Great! What size dumpster do you need? 15 yd, 20 yd, or 30 yd? If you’d like, say "quote" and I’ll take your name, phone, and zip to get exact pricing.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  }, [messages]);

  // Increment unread when assistant replies while closed
  useEffect(() => {
    if (!messages.length) return;
    const last = messages[messages.length - 1];
    if (!isOpen && last.role === 'assistant') {
      setUnreadCount((c) => c + 1);
    }
  }, [messages, isOpen]);

  // Email transcript automatically when chat is closed and we have contact info
  useEffect(() => {
    if (!isOpen) {
      const hasContact = Boolean(lead.phone || lead.email);
      if (!hasContact || !messages.length) return;
      const transcript = messages.slice(-50);
      const payload = { action: 'lead', ...lead, pageUrl, transcript };
      fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {!isOpen && (
        <button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          ref={openBtnRef}
          className="relative bg-[#4e37a8] text-white rounded-full shadow-lg px-4 py-3 hover:bg-purple-700 transition-colors"
        >
          Chat with us
          {unreadCount > 0 && (
            <span aria-hidden className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-semibold shadow">{unreadCount > 9 ? '9+' : unreadCount}</span>
          )}
        </button>
      )}

      {isOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="icon-chat-title" className="w-80 sm:w-96 rounded-xl shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm ring-1 ring-purple-100">
          <div className="bg-gradient-to-r from-[#4e37a8] via-purple-600 to-indigo-600 text-white px-4 py-3 flex items-center justify-between">
            <div id="icon-chat-title" className="font-semibold">Icon Dumpsters Chat</div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-2 py-1 text-[11px] sm:text-xs">
                <span className={`w-2.5 h-2.5 rounded-full ${agentStatus.online ? (agentStatus.queueSize > 3 ? 'bg-yellow-300' : 'bg-green-400') : 'bg-gray-300'} ${agentStatus.online ? 'animate-pulse' : ''}`}></span>
                <span>
                  {agentStatus.online ? (agentStatus.queueSize > 0 ? `Live agent • Queue ${agentStatus.queueSize} • ETA ${agentStatus.etaMinutes}m` : 'Live agent • Available') : 'Live agent • Offline'}
                </span>
              </span>
              <button onClick={requestAgentHandoff} className="bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs px-2 py-1 rounded-full">Talk to agent</button>
              <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="text-white/90 hover:text-white">✕</button>
            </div>
          </div>
          {agentMode === 'waiting' && (
            <div className="px-3 py-2 text-xs bg-amber-50 text-amber-800 border-b border-amber-200 flex items-center justify-between">
              <div>Connecting you to a live agent… Queue {agentStatus.queueSize}, ETA ~{agentStatus.etaMinutes}m. We’ll reach out by phone/text.</div>
              <button onClick={() => setAgentMode('bot')} className="ml-2 underline">Cancel</button>
            </div>
          )}
          <div ref={scrollRef} className="h-72 overflow-y-auto p-3 space-y-4 bg-gradient-to-b from-violet-50 via-white to-violet-50" aria-live="polite">
            {messages.map((m, i) => {
              if (m.role === 'assistant') {
                return (
                  <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className="text-sm text-gray-800 flex items-start gap-2">
                    <div className="flex-shrink-0">
                      <img src={logoSrc} alt="Icon Dumpsters" className="h-8 w-auto" />
                    </div>
                    <div className="inline-block bg-white/95 backdrop-blur-sm border border-transparent rounded-xl px-4 py-3 max-w-[85%] text-left leading-6 shadow-lg ring-1 ring-violet-200">
                      <div className="border-l-4 border-[#4e37a8] pl-3">
                        {renderRich(m.content)}
                      </div>
                      {m.quickActions && (
                        <div className="mt-3 pt-3 border-t border-purple-100">
                          {m.quickActions.map((action, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickAction(action.action)}
                              className="text-xs bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white hover:to-purple-700 px-3 py-1.5 rounded-full mr-2 shadow"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} ref={i === messages.length - 1 ? lastMsgRef : null} className="text-sm text-gray-900 text-right">
                  <div className="inline-block bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white rounded-xl px-4 py-3 max-w-[85%] text-left whitespace-pre-wrap leading-6 shadow">
                    {renderRich(m.content, 'text-white', 'text-white', 'text-white underline')}
                  </div>
                </div>
              );
            })}
          </div>
          {showLeadForm && (
            <div className="p-3 border-t border-gray-200 space-y-2 relative">
              <button aria-label="Close quick quote" onClick={() => setShowLeadForm(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">✕</button>
              <div className="font-medium text-gray-800 mb-1 pr-6">Quick Quote</div>
              <div className="grid grid-cols-2 gap-2">
                <input value={lead.firstName} onChange={(e) => setLead({ ...lead, firstName: e.target.value })} placeholder="First name" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <input value={lead.lastName} onChange={(e) => setLead({ ...lead, lastName: e.target.value })} placeholder="Last name" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input id="phone-input" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email (optional)" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={lead.zipCode} onChange={(e) => setLead({ ...lead, zipCode: e.target.value })} placeholder="Zip code" className="border border-gray-300 rounded-lg px-2 py-2 text-sm" />
                <select value={lead.dumpsterSize} onChange={(e) => setLead({ ...lead, dumpsterSize: e.target.value })} className="border border-gray-300 rounded-lg px-2 py-2 text-sm">
                  <option value="">Size</option>
                  <option value="15">15 Yard</option>
                  <option value="20">20 Yard</option>
                  <option value="30">30 Yard</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button onClick={submitLead} className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">Submit</button>
                <button onClick={() => setShowLeadForm(false)} className="border border-gray-300 px-4 py-2 rounded-lg text-sm">Back</button>
              </div>
            </div>
          )}

          {/* Quick reply chips */}
          {(quickReplies.length > 0 || true) && (
            <div className="px-3 pb-2 border-t border-gray-100 flex flex-wrap gap-2 bg-white/90">
              {(quickReplies.length ? quickReplies : ['quote', 'prices', 'sizes', 'talk to agent']).map((qr, idx) => (
                <button
                  key={`${qr}-${idx}`}
                  onClick={() => { setInput(qr); setTimeout(() => sendMessage(), 0); }}
                  className="text-xs bg-gradient-to-r from-violet-100 to-indigo-100 text-[#4e37a8] hover:from-violet-200 hover:to-indigo-200 px-3 py-1 rounded-full border border-violet-200"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Quick link chips */}
          {(quickLinks.length > 0 || true) && (
            <div className="px-3 pb-2 border-t border-gray-100 flex flex-wrap gap-2 bg-white/90">
              {(quickLinks.length ? quickLinks : [{ label: 'Open Calculator', url: '/dumpster-calculator' }, { label: 'Call (801) 918-6000', url: 'tel:+18019186000' }]).map((link, idx) => (
                <button
                  key={`${link.url}-${idx}`}
                  onClick={() => { try { window.open(link.url, '_blank'); } catch {} }}
                  className="text-xs bg-white border border-violet-300 text-[#4e37a8] hover:bg-violet-50 px-3 py-1 rounded-full shadow-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* Always show input area */}
          <div className="p-3 border-t border-gray-200">
            {/* Optional SMS handoff */}
            {smsVisible && (
              <div className="mb-2 flex gap-2 items-center">
                <input
                  value={smsPhone}
                  onChange={(e) => setSmsPhone(e.target.value)}
                  placeholder="Text me this (phone)"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
                <button
                  onClick={async () => {
                    if (!smsPhone.trim()) return;
                    const transcript = messages.slice(-30);
                    try {
                      await fetch('/api/sms', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phone: smsPhone, message: 'Please text me details about dumpsters.', transcript }),
                      });
                      setSmsPhone('');
                      setMessages((prev) => [...prev, { role: 'assistant', content: 'Got it! We\'ll shoot you a text shortly. Need help right now? Just give us a call at (801) 918-6000.', timestamp: new Date().toISOString() }]);
                    } catch {}
                  }}
                  className="border border-[#4e37a8] text-[#4e37a8] px-3 py-2 rounded-lg text-xs hover:bg-[#4e37a8]/5"
                >
                  Text me this
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => { setInput(e.target.value); clearLeadTimer(); }}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); if (e.key === 'Escape') setIsOpen(false); }}
                ref={inputRef}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4e37a8]"
                placeholder={
                  stage === 'zip'
                    ? 'Enter your 5‑digit zip code'
                    : stage === 'size'
                    ? 'Choose a size: 15, 20, or 30'
                    : stage === 'project'
                    ? 'Type your project (home, construction, landscaping, concrete, demo, roofing)'
                    : 'Ask about pricing, timeframes, or say quote'
                }
              />
              <button
                onClick={sendMessage}
                disabled={isSubmitting}
                aria-label="Send message"
                className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 disabled:opacity-60"
              >
                Send
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">By chatting, you agree to our terms. For urgent help call (801) 918-6000.</div>
          </div>
        </div>
      )}
    </div>
  );
}


