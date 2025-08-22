export type ChatConfig = {
  themeColor: string;
  defaultGreeting: string;
  triggers: {
    openOnLoad: boolean;
    timeDelayMs: number;
    exitIntent: boolean;
    scrollPercent: number; // 0-100, 0 disables
    idleMs: number; // 0 disables
    sessionCap: {
      key: string;
      ttlMs: number; // how long to avoid auto-open again
    };
  };
  greetings: Array<{
    pattern: RegExp;
    message: string;
  }>;
};

export const chatConfig: ChatConfig = {
  themeColor: '#4e37a8',
  defaultGreeting:
    "Hi! Welcome to Icon Dumpsters! I'm here to help you find the perfect dumpster rental for your project. What zip code do you need a dumpster in?",
  triggers: {
    openOnLoad: true,
    timeDelayMs: 0,
    exitIntent: true,
    scrollPercent: 55,
    idleMs: 20000,
    sessionCap: {
      key: 'icon_chat_auto_open_at',
      ttlMs: 1000 * 60 * 60 * 6, // 6 hours
    },
  },
  greetings: [
    {
      pattern: /dumpster-calculator/i,
      message:
        'Welcome to the Dumpster Calculator! Tell me your zip and project type, and I’ll help pick a size and estimate pricing.',
    },
    {
      pattern: /(guide-2025|dumpster-rental.*guide)/i,
      message:
        'Planning a dumpster rental? Share your zip code and preferred size (15/20/30 yd) and I can give a quick estimate.',
    },
    {
      pattern: /(home|^\/?$)/i,
      message:
        "Hi! Welcome to Icon Dumpsters! I'm here to help you find the perfect dumpster rental for your project. What zip code do you need a dumpster in?",
    },
  ],
};


