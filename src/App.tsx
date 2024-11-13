import { MenuGenerator } from '@/components/MenuGenerator';
import { RecipeForm } from '@/components/RecipeForm';
import { RecipeGrid } from '@/components/RecipeGrid';
import { FilterOptions, SearchFilters } from '@/components/SearchFilters';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { createRecipe, deleteRecipe, generateRandomMenu, getCategories, getRecipes, searchRecipes, updateRecipe } from '@/lib/recipes';
import { Recipe } from '@/types/recipe';
import { CookingPot, PlusCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [recipes,setRecipes] = useState<Recipe[]>(getRecipes());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>();
  const [recipeToDelete, setRecipeToDelete] = useState<string | undefined>();
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
  });
  const { toast } = useToast();

  const filteredRecipes = searchRecipes(filters);
  const categories = getCategories();

  const handleCreateRecipe = (data: Omit<Recipe, 'id'>) => {
    console.log(recipes)
    const newRecipe = createRecipe(data);
    setRecipes(getRecipes());
    setIsFormOpen(false);
    toast({
      title: 'Recipe created',
      description: `${newRecipe.title} has been added to your recipes.`
    });
  };

  const handleUpdateRecipe = (data: Omit<Recipe, 'id'>) => {
    if (selectedRecipe) {
      updateRecipe(selectedRecipe.id, data);
      setRecipes(getRecipes());
      setIsFormOpen(false);
      setSelectedRecipe(undefined);
      toast({
        title: 'Recipe updated',
        description: `${data.title} has been updated successfully.`
      });
    }
  };

  const handleDeleteRecipe = (id: string) => {
    deleteRecipe(id);
    setRecipes(getRecipes());
    setIsDeleteDialogOpen(false);
    setRecipeToDelete(undefined);
    toast({
      title: 'Recipe deleted',
      description: 'The recipe has been removed from your collection.',
      variant: 'destructive'
    });
  };

  const openEditForm = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsFormOpen(true);
  };

  const openDeleteDialog = (id: string) => {
    setRecipeToDelete(id);
    setIsDeleteDialogOpen(true);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <CookingPot className="w-8 h-8" />
              <h1 className="text-2xl font-bold text-gray-900">Recipe Book</h1>
            </div>
            <Button onClick={() => setIsFormOpen(true)}>
              <PlusCircle className="mr-2 w-4 h-4" />
              Add Recipe
            </Button>
          </div>
        </div>
      </header>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList>
            <TabsTrigger value="browse">Browse Recipes</TabsTrigger>
            <TabsTrigger value="menu">Menu Generator</TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
              <aside>
                <SearchFilters
                  filters={filters}
                  onFilterChange={setFilters}
                  categories={categories}
                />
              </aside>
              
              <section>
                <RecipeGrid
                  recipes={filteredRecipes}
                  onEdit={openEditForm}
                  onDelete={openDeleteDialog}
                />
              </section>
            </div>
          </TabsContent>

          <TabsContent value="menu">
            <MenuGenerator
              onEdit={openEditForm}
              onDelete={openDeleteDialog}
              generateMenu={generateRandomMenu}
            />
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedRecipe ? 'Edit Recipe' : 'Create Recipe'}</DialogTitle>
          </DialogHeader>
          <RecipeForm
            initialData={selectedRecipe}
            onSubmit={selectedRecipe ? handleUpdateRecipe : handleCreateRecipe}
            onCancel={() => {
              setIsFormOpen(false);
              setSelectedRecipe(undefined);
            }}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the recipe.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => recipeToDelete && handleDeleteRecipe(recipeToDelete)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default App;