import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Recipe } from '@/types/recipe';
import { Utensils, RefreshCw } from 'lucide-react';
import { RecipeCard } from './RecipeCard';

interface MenuGeneratorProps {
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  generateMenu: () => { starter: Recipe; main: Recipe; dessert: Recipe; };
}

export function MenuGenerator({ onEdit, onDelete, generateMenu }: MenuGeneratorProps) {
  const [menu, setMenu] = useState(() => generateMenu());

  const handleGenerateMenu = () => {
    setMenu(generateMenu());
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            <CardTitle>Random Menu Suggestion</CardTitle>
          </div>
          <Button onClick={handleGenerateMenu} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Generate New Menu
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Starter</h3>
          <RecipeCard recipe={menu.starter} onEdit={onEdit} onDelete={onDelete} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Main Course</h3>
          <RecipeCard recipe={menu.main} onEdit={onEdit} onDelete={onDelete} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Dessert</h3>
          <RecipeCard recipe={menu.dessert} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </CardContent>
    </Card>
  );
}