export interface Tool {
  id: string;
  name: string;
  description: string;
  cost: 'Free' | 'Paid' | 'Freemium';
  features: string[];
  url?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  tools: Tool[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export const categoryData: Record<string, Category> = {
  'trading-demat': {
    id: 'trading-demat',
    title: 'Trading & Demat Accounts',
    description: 'Compare brokers, open accounts, and manage your trading setup',
    subcategories: [
      {
        id: 'discount-brokers',
        name: 'Discount Brokers',
        tools: [
          {
            id: 'zerodha',
            name: 'Zerodha',
            description: 'India\'s largest discount broker with comprehensive trading platform',
            cost: 'Paid',
            features: [
              'Flat ₹20 per trade',
              'Kite trading platform',
              'Coin for mutual funds',
            ],
            url: 'https://zerodha.com',
          },
          {
            id: 'upstox',
            name: 'Upstox',
            description: 'Low-cost trading with modern mobile-first platform',
            cost: 'Paid',
            features: [
              'Flat ₹20 per trade',
              'Advanced charting tools',
              'API access available',
            ],
            url: 'https://upstox.com',
          },
          {
            id: 'groww',
            name: 'Groww',
            description: 'Simple and intuitive platform for beginners',
            cost: 'Paid',
            features: [
              'Zero account opening charges',
              'User-friendly interface',
              'Mutual funds & stocks',
            ],
            url: 'https://groww.in',
          },
        ],
      },
      {
        id: 'full-service-brokers',
        name: 'Full Service Brokers',
        tools: [
          {
            id: 'icici-direct',
            name: 'ICICI Direct',
            description: 'Full-service broker with research and advisory',
            cost: 'Paid',
            features: [
              'Research reports',
              'Advisory services',
              'Margin trading facility',
            ],
            url: 'https://www.icicidirect.com',
          },
          {
            id: 'hdfc-securities',
            name: 'HDFC Securities',
            description: 'Trusted full-service broker with banking integration',
            cost: 'Paid',
            features: [
              'Integrated banking',
              'Investment advisory',
              'IPO applications',
            ],
            url: 'https://www.hdfcsec.com',
          },
        ],
      },
    ],
  },
  'market-data': {
    id: 'market-data',
    title: 'Market Data',
    description: 'Real-time data feeds, historical data, and market analytics',
    subcategories: [
      {
        id: 'free-data',
        name: 'Free Data Sources',
        tools: [
          {
            id: 'nse-india',
            name: 'NSE India',
            description: 'Official NSE website with free market data',
            cost: 'Free',
            features: [
              'Real-time quotes (15-min delay)',
              'Historical data download',
              'Market statistics',
            ],
            url: 'https://www.nseindia.com',
          },
          {
            id: 'bse-india',
            name: 'BSE India',
            description: 'Official BSE website with market information',
            cost: 'Free',
            features: [
              'Live market data',
              'Corporate announcements',
              'Index data',
            ],
            url: 'https://www.bseindia.com',
          },
          {
            id: 'yahoo-finance',
            name: 'Yahoo Finance',
            description: 'Global financial data including Indian markets',
            cost: 'Free',
            features: [
              'Historical data',
              'Charts and analysis',
              'Portfolio tracking',
            ],
            url: 'https://finance.yahoo.com',
          },
        ],
      },
      {
        id: 'paid-data',
        name: 'Premium Data Providers',
        tools: [
          {
            id: 'truedata',
            name: 'TrueData',
            description: 'Real-time and historical market data API',
            cost: 'Paid',
            features: [
              'Real-time data feed',
              'Historical data API',
              'Tick-by-tick data',
            ],
            url: 'https://truedata.in',
          },
          {
            id: 'global-datafeeds',
            name: 'Global Datafeeds',
            description: 'Professional-grade market data solutions',
            cost: 'Paid',
            features: [
              'Low latency feeds',
              'Multiple exchanges',
              'API integration',
            ],
            url: 'https://globaldatafeeds.in',
          },
        ],
      },
    ],
  },
  'algo-platforms': {
    id: 'algo-platforms',
    title: 'Algo Platforms',
    description: 'Algorithmic trading platforms and backtesting tools',
    subcategories: [
      {
        id: 'algo-trading',
        name: 'Algo Trading Platforms',
        tools: [
          {
            id: 'streak',
            name: 'Streak',
            description: 'No-code algo trading platform by Zerodha',
            cost: 'Free',
            features: [
              'Visual strategy builder',
              'Backtesting engine',
              'Live deployment',
            ],
            url: 'https://streak.tech',
          },
          {
            id: 'algobulls',
            name: 'AlgoBulls',
            description: 'Automated trading platform with marketplace',
            cost: 'Freemium',
            features: [
              'Strategy marketplace',
              'Python-based coding',
              'Multi-broker support',
            ],
            url: 'https://algobulls.com',
          },
          {
            id: 'tradetron',
            name: 'Tradetron',
            description: 'Algo trading platform with strategy sharing',
            cost: 'Freemium',
            features: [
              'No coding required',
              'Strategy marketplace',
              'Paper trading',
            ],
            url: 'https://tradetron.tech',
          },
        ],
      },
      {
        id: 'backtesting',
        name: 'Backtesting Tools',
        tools: [
          {
            id: 'quantconnect',
            name: 'QuantConnect',
            description: 'Cloud-based algorithmic trading platform',
            cost: 'Freemium',
            features: [
              'Python & C# support',
              'Historical data library',
              'Live trading integration',
            ],
            url: 'https://www.quantconnect.com',
          },
          {
            id: 'backtrader',
            name: 'Backtrader',
            description: 'Python backtesting library',
            cost: 'Free',
            features: [
              'Open-source',
              'Flexible architecture',
              'Multiple data feeds',
            ],
            url: 'https://www.backtrader.com',
          },
        ],
      },
    ],
  },
  'ai-tools': {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'AI-powered trading assistants and market analysis',
    subcategories: [
      {
        id: 'ai-analysis',
        name: 'AI Market Analysis',
        tools: [
          {
            id: 'tickertape',
            name: 'Tickertape',
            description: 'AI-powered stock screener and analysis',
            cost: 'Free',
            features: [
              'Stock screener',
              'Portfolio analytics',
              'Market insights',
            ],
            url: 'https://www.tickertape.in',
          },
          {
            id: 'smallcase',
            name: 'Smallcase',
            description: 'Thematic investing with AI recommendations',
            cost: 'Freemium',
            features: [
              'Thematic portfolios',
              'Rebalancing alerts',
              'Performance tracking',
            ],
            url: 'https://www.smallcase.com',
          },
        ],
      },
      {
        id: 'sentiment-analysis',
        name: 'Sentiment Analysis',
        tools: [
          {
            id: 'sentifi',
            name: 'Sentifi',
            description: 'Social media sentiment analysis for stocks',
            cost: 'Paid',
            features: [
              'Real-time sentiment',
              'News aggregation',
              'Social signals',
            ],
            url: 'https://www.sentifi.com',
          },
        ],
      },
    ],
  },
  'risk-management': {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Position sizing, stop-loss calculators, and risk analytics',
    subcategories: [
      {
        id: 'calculators',
        name: 'Risk Calculators',
        tools: [
          {
            id: 'position-size-calc',
            name: 'Position Size Calculator',
            description: 'Calculate optimal position sizes based on risk',
            cost: 'Free',
            features: [
              'Risk percentage input',
              'Stop-loss calculation',
              'Portfolio allocation',
            ],
          },
          {
            id: 'risk-reward-calc',
            name: 'Risk-Reward Calculator',
            description: 'Analyze risk-reward ratios for trades',
            cost: 'Free',
            features: [
              'R:R ratio calculation',
              'Breakeven analysis',
              'Profit targets',
            ],
          },
        ],
      },
      {
        id: 'portfolio-tools',
        name: 'Portfolio Management',
        tools: [
          {
            id: 'valueresearch',
            name: 'Value Research',
            description: 'Mutual fund research and portfolio tracking',
            cost: 'Freemium',
            features: [
              'Fund analysis',
              'Portfolio X-ray',
              'Goal planning',
            ],
            url: 'https://www.valueresearchonline.com',
          },
        ],
      },
    ],
  },
  education: {
    id: 'education',
    title: 'Education',
    description: 'Courses, tutorials, and learning resources for traders',
    subcategories: [
      {
        id: 'free-courses',
        name: 'Free Learning Resources',
        tools: [
          {
            id: 'varsity-zerodha',
            name: 'Varsity by Zerodha',
            description: 'Comprehensive free trading education',
            cost: 'Free',
            features: [
              'Beginner to advanced',
              'Technical & fundamental analysis',
              'Options trading',
            ],
            url: 'https://zerodha.com/varsity',
          },
          {
            id: 'investopedia',
            name: 'Investopedia',
            description: 'Financial education and market insights',
            cost: 'Free',
            features: [
              'Dictionary of terms',
              'Tutorials and guides',
              'Market news',
            ],
            url: 'https://www.investopedia.com',
          },
          {
            id: 'nse-academy',
            name: 'NSE Academy',
            description: 'Official NSE certification courses',
            cost: 'Freemium',
            features: [
              'NCFM certifications',
              'Market basics',
              'Advanced modules',
            ],
            url: 'https://www.nseindia.com/education',
          },
        ],
      },
      {
        id: 'paid-courses',
        name: 'Premium Courses',
        tools: [
          {
            id: 'elearnmarkets',
            name: 'Elearnmarkets',
            description: 'Professional trading and investment courses',
            cost: 'Paid',
            features: [
              'Live classes',
              'Certification programs',
              'Mentorship',
            ],
            url: 'https://www.elearnmarkets.com',
          },
        ],
      },
    ],
  },
  compliance: {
    id: 'compliance',
    title: 'Compliance & Automation',
    description: 'Tax tools, reporting, and trading automation',
    subcategories: [
      {
        id: 'tax-tools',
        name: 'Tax & Compliance',
        tools: [
          {
            id: 'quicko',
            name: 'Quicko',
            description: 'Tax filing for traders and investors',
            cost: 'Freemium',
            features: [
              'Capital gains calculation',
              'ITR filing',
              'Tax optimization',
            ],
            url: 'https://quicko.com',
          },
          {
            id: 'cleartax',
            name: 'ClearTax',
            description: 'Comprehensive tax filing platform',
            cost: 'Freemium',
            features: [
              'E-filing',
              'Tax planning',
              'Investment tracking',
            ],
            url: 'https://cleartax.in',
          },
        ],
      },
      {
        id: 'automation',
        name: 'Trading Automation',
        tools: [
          {
            id: 'kite-connect',
            name: 'Kite Connect API',
            description: 'Zerodha\'s trading API for automation',
            cost: 'Paid',
            features: [
              'REST & WebSocket API',
              'Order management',
              'Market data access',
            ],
            url: 'https://kite.trade',
          },
          {
            id: 'upstox-api',
            name: 'Upstox API',
            description: 'Developer-friendly trading API',
            cost: 'Paid',
            features: [
              'Real-time data',
              'Order execution',
              'Portfolio management',
            ],
            url: 'https://upstox.com/developer',
          },
        ],
      },
    ],
  },
};
