import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ToolCard from '@/components/dashboard/ToolCard';
import { categoryData } from '@/data/categoryData';

export default function CategoryDetail() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = categoryData[categoryId || ''];

  if (!category) {
    return (
      <div className="min-h-full bg-neutral flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold mb-4 text-foreground">Category not found</h1>
          <Button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-neutral">
      <div className="bg-gradient-2 text-primary-foreground py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" strokeWidth={2} />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            {category.title}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            {category.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-muted">
            <TabsTrigger value="all" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              All Tools
            </TabsTrigger>
            <TabsTrigger value="free" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Free
            </TabsTrigger>
            <TabsTrigger value="paid" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Paid
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {category.subcategories.map((subcategory) => (
              <div key={subcategory.id}>
                <h2 className="text-xl font-heading font-semibold mb-6 text-foreground">
                  {subcategory.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subcategory.tools.map((tool) => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="free" className="space-y-8">
            {category.subcategories.map((subcategory) => {
              const freeTools = subcategory.tools.filter((tool) => tool.cost === 'Free');
              if (freeTools.length === 0) return null;
              return (
                <div key={subcategory.id}>
                  <h2 className="text-xl font-heading font-semibold mb-6 text-foreground">
                    {subcategory.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {freeTools.map((tool) => (
                      <ToolCard key={tool.id} {...tool} />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="paid" className="space-y-8">
            {category.subcategories.map((subcategory) => {
              const paidTools = subcategory.tools.filter((tool) => tool.cost === 'Paid');
              if (paidTools.length === 0) return null;
              return (
                <div key={subcategory.id}>
                  <h2 className="text-xl font-heading font-semibold mb-6 text-foreground">
                    {subcategory.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paidTools.map((tool) => (
                      <ToolCard key={tool.id} {...tool} />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
