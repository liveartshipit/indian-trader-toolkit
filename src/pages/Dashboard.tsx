import { useNavigate } from 'react-router-dom';
import CategoryCard from '@/components/dashboard/CategoryCard';
import ProgressTracker from '@/components/dashboard/ProgressTracker';
import { TrendingUpIcon, BarChart3Icon, BotIcon, ShieldIcon, BookOpenIcon, FileCheckIcon, SparklesIcon } from 'lucide-react';

const categories = [
  {
    id: 'trading-demat',
    title: 'Trading & Demat Accounts',
    description: 'Compare brokers, open accounts, and manage your trading setup',
    icon: TrendingUpIcon,
    color: 'primary',
  },
  {
    id: 'market-data',
    title: 'Market Data',
    description: 'Real-time data feeds, historical data, and market analytics',
    icon: BarChart3Icon,
    color: 'secondary',
  },
  {
    id: 'algo-platforms',
    title: 'Algo Platforms',
    description: 'Algorithmic trading platforms and backtesting tools',
    icon: BotIcon,
    color: 'tertiary',
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'AI-powered trading assistants and market analysis',
    icon: SparklesIcon,
    color: 'primary',
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Position sizing, stop-loss calculators, and risk analytics',
    icon: ShieldIcon,
    color: 'secondary',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Courses, tutorials, and learning resources for traders',
    icon: BookOpenIcon,
    color: 'tertiary',
  },
  {
    id: 'compliance',
    title: 'Compliance & Automation',
    description: 'Tax tools, reporting, and trading automation',
    icon: FileCheckIcon,
    color: 'primary',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-neutral">
      <div className="relative bg-gradient-1 text-primary-foreground py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-primary-foreground">
            Welcome to Trader's Toolkit
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Your comprehensive resource hub for trading tools, platforms, and educational content tailored for Indian investors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <ProgressTracker />

        <section className="mt-12">
          <h2 className="text-2xl font-heading font-semibold mb-8 text-foreground">
            Explore Tool Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
                onClick={() => navigate(`/category/${category.id}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
