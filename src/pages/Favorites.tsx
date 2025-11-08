import { useNavigate } from 'react-router-dom';
import { useFavoritesStore } from '@/stores/favoritesStore';
import ToolCard from '@/components/dashboard/ToolCard';
import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

export default function Favorites() {
  const navigate = useNavigate();
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="min-h-full bg-neutral">
      <div className="bg-gradient-1 text-primary-foreground py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <StarIcon className="w-8 h-8" strokeWidth={2} fill="currentColor" />
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground">
              Your Favorites
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90">
            Quick access to your saved tools and resources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <StarIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
            <h2 className="text-xl font-heading font-semibold mb-2 text-foreground">
              No favorites yet
            </h2>
            <p className="text-muted-foreground mb-8">
              Start exploring tools and add them to your favorites
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore Tools
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
