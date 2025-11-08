import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: StarIcon;
  color: 'primary' | 'secondary' | 'tertiary';
  onClick: () => void;
}

export default function CategoryCard({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}: CategoryCardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
    tertiary: 'bg-tertiary/10 text-tertiary hover:bg-tertiary/20',
  };

  return (
    <Card
      className="cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg border-border bg-card"
      onClick={onClick}
    >
      <CardHeader>
        <div
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200',
            colorClasses[color]
          )}
        >
          <Icon className="w-6 h-6" strokeWidth={2} />
        </div>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
