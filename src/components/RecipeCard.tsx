import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
}

export function RecipeCard({ recipe, onEdit, onDelete }: RecipeCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="relative h-48 p-0 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-sm font-semibold text-white bg-black/50 rounded-full">
            {recipe.difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{recipe.description}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.category}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => onEdit(recipe)}>
          Edit
        </Button>
        <Button variant="destructive" onClick={() => onDelete(recipe.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}