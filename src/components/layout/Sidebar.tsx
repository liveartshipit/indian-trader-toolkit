import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, StarIcon, SettingsIcon, ChevronDownIcon, ChevronRightIcon, TrendingUpIcon, BarChart3Icon, BotIcon, ShieldIcon, BookOpenIcon, FileCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'trading-demat', label: 'Trading & Demat', icon: TrendingUpIcon },
  { id: 'market-data', label: 'Market Data', icon: BarChart3Icon },
  { id: 'algo-platforms', label: 'Algo Platforms', icon: BotIcon },
  { id: 'ai-tools', label: 'AI Tools', icon: BotIcon },
  { id: 'risk-management', label: 'Risk Management', icon: ShieldIcon },
  { id: 'education', label: 'Education', icon: BookOpenIcon },
  { id: 'compliance', label: 'Compliance & Automation', icon: FileCheckIcon },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-1 rounded-lg flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <h1 className="text-xl font-heading font-semibold text-foreground">Trader's Toolkit</h1>
            </div>
          </div>

          <ScrollArea className="flex-1 px-4">
            <nav className="space-y-2">
              <Link to="/" onClick={onClose}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 font-normal text-foreground hover:bg-accent hover:text-accent-foreground",
                    location.pathname === '/' && "bg-accent text-accent-foreground"
                  )}
                >
                  <HomeIcon className="w-5 h-5" strokeWidth={2} />
                  Dashboard
                </Button>
              </Link>

              <div className="py-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between font-normal text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                >
                  <span className="flex items-center gap-3">
                    <BarChart3Icon className="w-5 h-5" strokeWidth={2} />
                    Tool Categories
                  </span>
                  {categoriesExpanded ? (
                    <ChevronDownIcon className="w-4 h-4" strokeWidth={2} />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4" strokeWidth={2} />
                  )}
                </Button>

                {categoriesExpanded && (
                  <div className="ml-4 mt-2 space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          onClick={onClose}
                        >
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start gap-3 font-normal text-sm text-foreground hover:bg-accent hover:text-accent-foreground",
                              location.pathname === `/category/${category.id}` && "bg-accent text-accent-foreground"
                            )}
                          >
                            <Icon className="w-4 h-4" strokeWidth={2} />
                            {category.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link to="/favorites" onClick={onClose}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 font-normal text-foreground hover:bg-accent hover:text-accent-foreground",
                    location.pathname === '/favorites' && "bg-accent text-accent-foreground"
                  )}
                >
                  <StarIcon className="w-5 h-5" strokeWidth={2} />
                  Favorites
                </Button>
              </Link>

              <Link to="/settings" onClick={onClose}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 font-normal text-foreground hover:bg-accent hover:text-accent-foreground",
                    location.pathname === '/settings' && "bg-accent text-accent-foreground"
                  )}
                >
                  <SettingsIcon className="w-5 h-5" strokeWidth={2} />
                  SettingsIcon
                </Button>
              </Link>
            </nav>
          </ScrollArea>

          <Separator />

          <div className="p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">TU</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Trader User</p>
                <p className="text-xs text-muted-foreground truncate">trader@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
