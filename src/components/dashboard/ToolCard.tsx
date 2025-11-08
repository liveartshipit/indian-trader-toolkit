import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, StarIcon } from 'lucide-react';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export interface Tool {
  id: string;
  name: string;
  description: string;
  cost: 'Free' | 'Paid' | 'Freemium';
  features: string[];
  url?: string;
}

export default function ToolCard({ id, name, description, cost, features, url }: Tool) {
  const { toast } = useToast();
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(id);
      toast({
        title: 'Removed from favorites',
        description: `${name} has been removed from your favorites.`,
      });
    } else {
      addFavorite({ id, name, description, cost, features, url });
      toast({
        title: 'Added to favorites',
        description: `${name} has been added to your favorites.`,
      });
    }
  };

  const handleOpenTool = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="flex flex-col border-border bg-card hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg text-foreground">{name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFavoriteToggle}
            className={cn(
              'text-muted-foreground hover:text-warning hover:bg-accent',
              isFavorite && 'text-warning'
            )}
          >
            <StarIcon
              className="w-5 h-5"
              strokeWidth={2}
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-xs px-2 py-1 rounded-md font-medium',
              cost === 'Free' && 'bg-success/10 text-success',
              cost === 'Paid' && 'bg-warning/10 text-warning',
              cost === 'Freemium' && 'bg-primary/10 text-primary'
            )}
          >
            {cost}
          </span>
        </div>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {url && (
          <Button
            onClick={handleOpenTool}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-2" strokeWidth={2} />
            Open Tool
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
