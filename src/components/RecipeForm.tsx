import { useState } from 'react';
import { Recipe, RecipeFormData } from '@/types/recipe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface RecipeFormProps {
  initialData?: Recipe;
  onSubmit: (data: RecipeFormData) => void;
  onCancel: () => void;
}

export function RecipeForm({ initialData, onSubmit, onCancel }: RecipeFormProps) {
  const [formData, setFormData] = useState<RecipeFormData>({
    title: initialData?.title ?? '',
    description: initialData?.description ?? '',
    ingredients: initialData?.ingredients ?? [''],
    instructions: initialData?.instructions ?? [''],
    prepTime: initialData?.prepTime ?? 0,
    cookTime: initialData?.cookTime ?? 0,
    servings: initialData?.servings ?? 2,
    difficulty: initialData?.difficulty ?? 'Easy',
    imageUrl: initialData?.imageUrl ?? '',
    category: initialData?.category ?? ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      ingredients: formData.ingredients.filter(Boolean),
      instructions: formData.instructions.filter(Boolean)
    });
  };

  const addListItem = (list: string[], setList: (items: string[]) => void) => {
    setList([...list, '']);
  };

  const removeListItem = (index: number, list: string[], setList: (items: string[]) => void) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Recipe Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="prepTime">Prep Time (minutes)</Label>
            <Input
              id="prepTime"
              type="number"
              value={formData.prepTime}
              onChange={e => setFormData({ ...formData, prepTime: parseInt(e.target.value) })}
              required
            />
          </div>

          <div>
            <Label htmlFor="cookTime">Cook Time (minutes)</Label>
            <Input
              id="cookTime"
              type="number"
              value={formData.cookTime}
              onChange={e => setFormData({ ...formData, cookTime: parseInt(e.target.value) })}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              value={formData.servings}
              onChange={e => setFormData({ ...formData, servings: parseInt(e.target.value) })}
              required
            />
          </div>

          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select
              value={formData.difficulty}
              onValueChange={value => setFormData({ ...formData, difficulty: value as Recipe['difficulty'] })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <Label>Ingredients</Label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                value={ingredient}
                onChange={e => {
                  const newIngredients = [...formData.ingredients];
                  newIngredients[index] = e.target.value;
                  setFormData({ ...formData, ingredients: newIngredients });
                }}
                placeholder={`Ingredient ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeListItem(index, formData.ingredients, ingredients => 
                  setFormData({ ...formData, ingredients })
                )}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={() => addListItem(formData.ingredients, ingredients => 
              setFormData({ ...formData, ingredients })
            )}
          >
            Add Ingredient
          </Button>
        </div>

        <div>
          <Label>Instructions</Label>
          {formData.instructions.map((instruction, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <Textarea
                value={instruction}
                onChange={e => {
                  const newInstructions = [...formData.instructions];
                  newInstructions[index] = e.target.value;
                  setFormData({ ...formData, instructions: newInstructions });
                }}
                placeholder={`Step ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeListItem(index, formData.instructions, instructions => 
                  setFormData({ ...formData, instructions })
                )}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="mt-2"
            onClick={() => addListItem(formData.instructions, instructions => 
              setFormData({ ...formData, instructions })
            )}
          >
            Add Step
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Update Recipe' : 'Create Recipe'}
        </Button>
      </div>
    </form>
  );
}