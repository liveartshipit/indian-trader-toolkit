import { SearchIcon, MenuIcon, BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="h-16 border-b border-border bg-card px-4 lg:px-8 flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-foreground hover:bg-accent hover:text-accent-foreground"
        onClick={onMenuClick}
      >
        <MenuIcon className="w-6 h-6" strokeWidth={2} />
      </Button>

      <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" strokeWidth={2} />
          <Input
            type="search"
            placeholder="SearchIcon for tools, platforms, or resources..."
            className="pl-10 bg-muted text-foreground border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <BellIcon className="w-5 h-5" strokeWidth={2} />
      </Button>
    </header>
  );
}
