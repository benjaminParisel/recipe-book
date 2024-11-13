import { Recipe } from '@/types/recipe';
import { FilterOptions } from '@/components/SearchFilters';

// In a real app, this would be replaced with an API call
let recipes: Recipe[] = [
  // Starters
  {
    id: '1',
    title: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
    ingredients: [
      'Fresh mozzarella',
      'Ripe tomatoes',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Balsamic glaze',
      'Salt and pepper'
    ],
    instructions: [
      'Slice mozzarella and tomatoes',
      'Arrange alternately on a plate',
      'Add fresh basil leaves',
      'Drizzle with olive oil and balsamic glaze',
      'Season with salt and pepper'
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
    category: 'Starter'
  },
  {
    id: '2',
    title: 'French Onion Soup',
    description: 'Classic French soup with caramelized onions and melted cheese',
    ingredients: [
      'Onions',
      'Beef broth',
      'French bread',
      'Gruyere cheese',
      'Butter',
      'White wine'
    ],
    instructions: [
      'Caramelize onions slowly',
      'Add wine and beef broth',
      'Simmer for 30 minutes',
      'Top with bread and cheese',
      'Broil until cheese melts'
    ],
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    category: 'Starter'
  },
  {
    id: '3',
    title: 'Bruschetta',
    description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
    ingredients: [
      'Baguette',
      'Tomatoes',
      'Garlic',
      'Fresh basil',
      'Olive oil',
      'Balsamic vinegar'
    ],
    instructions: [
      'Dice tomatoes and mix with garlic and basil',
      'Toast bread slices',
      'Rub with garlic',
      'Top with tomato mixture',
      'Drizzle with olive oil'
    ],
    prepTime: 15,
    cookTime: 5,
    servings: 6,
    difficulty: 'Easy',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
    category: 'Starter'
  },
  {
    id: '4',
    title: 'Prawn Cocktail',
    description: 'Classic shrimp cocktail with spicy rose sauce',
    ingredients: [
      'Large prawns',
      'Lettuce',
      'Mayonnaise',
      'Ketchup',
      'Worcestershire sauce',
      'Lemon'
    ],
    instructions: [
      'Cook and chill prawns',
      'Make cocktail sauce',
      'Arrange lettuce in glasses',
      'Add prawns',
      'Top with sauce'
    ],
    prepTime: 15,
    cookTime: 5,
    servings: 4,
    difficulty: 'Easy',
    imageUrl: 'https://images.unsplash.com/photo-1629452365764-5cfbd773f8f8',
    category: 'Starter'
  },
  {
    id: '5',
    title: 'Mushroom Soup',
    description: 'Creamy mushroom soup with herbs',
    ingredients: [
      'Mixed mushrooms',
      'Cream',
      'Onion',
      'Garlic',
      'Thyme',
      'Vegetable stock'
    ],
    instructions: [
      'Sauté mushrooms and onions',
      'Add garlic and thyme',
      'Pour in stock',
      'Simmer and blend',
      'Add cream'
    ],
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    category: 'Starter'
  },
  // Main Courses
  {
    id: '6',
    title: 'Beef Wellington',
    description: 'Tender beef wrapped in mushroom duxelles and puff pastry',
    ingredients: [
      'Beef tenderloin',
      'Puff pastry',
      'Mushrooms',
      'Prosciutto',
      'Egg wash',
      'Herbs'
    ],
    instructions: [
      'Sear the beef',
      'Prepare mushroom duxelles',
      'Wrap in prosciutto',
      'Encase in puff pastry',
      'Bake until golden'
    ],
    prepTime: 60,
    cookTime: 45,
    servings: 6,
    difficulty: 'Hard',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    category: 'Main'
  },
  {
    id: '7',
    title: 'Grilled Salmon',
    description: 'Fresh salmon with lemon herb butter',
    ingredients: [
      'Salmon fillets',
      'Butter',
      'Lemon',
      'Fresh herbs',
      'Garlic',
      'Salt and pepper'
    ],
    instructions: [
      'Make herb butter',
      'Season salmon',
      'Grill until done',
      'Top with herb butter',
      'Garnish with lemon'
    ],
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    category: 'Main'
  },
  {
    id: '8',
    title: 'Vegetable Lasagna',
    description: 'Layered pasta with seasonal vegetables and ricotta',
    ingredients: [
      'Lasagna sheets',
      'Mixed vegetables',
      'Ricotta',
      'Tomato sauce',
      'Mozzarella',
      'Herbs'
    ],
    instructions: [
      'Prepare vegetables',
      'Make sauce',
      'Layer ingredients',
      'Top with cheese',
      'Bake until bubbly'
    ],
    prepTime: 45,
    cookTime: 50,
    servings: 8,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
    category: 'Main'
  },
  {
    id: '9',
    title: 'Coq au Vin',
    description: 'Classic French chicken braised in wine',
    ingredients: [
      'Chicken pieces',
      'Red wine',
      'Bacon',
      'Pearl onions',
      'Mushrooms',
      'Herbs'
    ],
    instructions: [
      'Brown chicken',
      'Cook bacon and vegetables',
      'Add wine and braise',
      'Reduce sauce',
      'Serve hot'
    ],
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    difficulty: 'Hard',
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    category: 'Main'
  },
  {
    id: '10',
    title: 'Risotto Primavera',
    description: 'Creamy risotto with spring vegetables',
    ingredients: [
      'Arborio rice',
      'Mixed vegetables',
      'White wine',
      'Parmesan',
      'Stock',
      'Butter'
    ],
    instructions: [
      'Sauté vegetables',
      'Toast rice',
      'Add wine and stock gradually',
      'Stir until creamy',
      'Finish with parmesan'
    ],
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'Main'
  },
  // Desserts
  {
    id: '11',
    title: 'Crème Brûlée',
    description: 'Classic French vanilla custard with caramelized sugar top',
    ingredients: [
      'Heavy cream',
      'Vanilla bean',
      'Egg yolks',
      'Sugar',
      'Salt'
    ],
    instructions: [
      'Infuse cream with vanilla',
      'Make custard base',
      'Bake in water bath',
      'Chill thoroughly',
      'Caramelize sugar top'
    ],
    prepTime: 20,
    cookTime: 35,
    servings: 6,
    difficulty: 'Hard',
    imageUrl: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
    category: 'Dessert'
  },
  {
    id: '12',
    title: 'Apple Tart',
    description: 'French-style apple tart with apricot glaze',
    ingredients: [
      'Pastry dough',
      'Apples',
      'Butter',
      'Sugar',
      'Apricot jam'
    ],
    instructions: [
      'Make pastry',
      'Arrange apple slices',
      'Brush with butter',
      'Bake until golden',
      'Glaze with jam'
    ],
    prepTime: 40,
    cookTime: 45,
    servings: 8,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a9',
    category: 'Dessert'
  },
  {
    id: '13',
    title: 'Tiramisu',
    description: 'Italian coffee-flavored dessert',
    ingredients: [
      'Ladyfingers',
      'Mascarpone',
      'Coffee',
      'Eggs',
      'Cocoa powder'
    ],
    instructions: [
      'Make coffee mixture',
      'Prepare cream filling',
      'Layer ingredients',
      'Chill overnight',
      'Dust with cocoa'
    ],
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    category: 'Dessert'
  },
  {
    id: '14',
    title: 'Lemon Meringue Pie',
    description: 'Tangy lemon curd topped with fluffy meringue',
    ingredients: [
      'Pie crust',
      'Lemons',
      'Eggs',
      'Sugar',
      'Cornstarch',
      'Butter'
    ],
    instructions: [
      'Blind bake crust',
      'Make lemon curd',
      'Prepare meringue',
      'Top pie',
      'Brown meringue'
    ],
    prepTime: 45,
    cookTime: 35,
    servings: 8,
    difficulty: 'Hard',
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13',
    category: 'Dessert'
  },
  {
    id: '15',
    title: 'Chocolate Soufflé',
    description: 'Light and airy chocolate dessert',
    ingredients: [
      'Dark chocolate',
      'Eggs',
      'Butter',
      'Sugar',
      'Vanilla'
    ],
    instructions: [
      'Prepare ramekins',
      'Melt chocolate',
      'Make base',
      'Fold in egg whites',
      'Bake immediately'
    ],
    prepTime: 25,
    cookTime: 12,
    servings: 4,
    difficulty: 'Hard',
    imageUrl: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
    category: 'Dessert'
  }
];

export const getRecipes = (): Recipe[] => recipes;

export const getRecipe = (id: string): Recipe | undefined => 
  recipes.find(recipe => recipe.id === id);

export const createRecipe = (recipe: Omit<Recipe, 'id'>): Recipe => {
  const newRecipe = {
    ...recipe,
    id: Math.random().toString(36).substr(2, 9)
  };
  recipes = [...recipes, newRecipe];
  return newRecipe;
};

export const updateRecipe = (id: string, recipe: Omit<Recipe, 'id'>): Recipe => {
  const updatedRecipe = { ...recipe, id };
  recipes = recipes.map(r => r.id === id ? updatedRecipe : r);
  return updatedRecipe;
};

export const deleteRecipe = (id: string): void => {
  recipes = recipes.filter(recipe => recipe.id !== id);
};

export const searchRecipes = (filters: FilterOptions): Recipe[] => {
  return recipes.filter(recipe => {
    const searchTerm = filters.search.toLowerCase();
    const matchesSearch = !filters.search || 
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm);

    const matchesDifficulty = !filters.difficulty || 
      recipe.difficulty === filters.difficulty;

    const matchesCategory = !filters.category || 
      recipe.category === filters.category;

    const totalTime = recipe.prepTime + recipe.cookTime;
    const matchesTime = !filters.maxTime || 
      totalTime <= filters.maxTime;

    const matchesServings = !filters.servings || 
      recipe.servings === filters.servings;

    return matchesSearch && 
           matchesDifficulty && 
           matchesCategory && 
           matchesTime && 
           matchesServings;
  });
};

export const getCategories = (): string[] => {
  const categories = new Set(recipes.map(recipe => recipe.category));
  return Array.from(categories).sort();
};

export const generateRandomMenu = () => {
  const starters = recipes.filter(recipe => recipe.category === 'Starter');
  const mains = recipes.filter(recipe => recipe.category === 'Main');
  const desserts = recipes.filter(recipe => recipe.category === 'Dessert');

  const getRandomRecipe = (arr: Recipe[]) => 
    arr[Math.floor(Math.random() * arr.length)];

  return {
    starter: getRandomRecipe(starters),
    main: getRandomRecipe(mains),
    dessert: getRandomRecipe(desserts)
  };
};