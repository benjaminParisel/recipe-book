import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Recipe } from '@/types/recipe';
import { Search, X } from 'lucide-react';

export interface FilterOptions {
  search: string;
  difficulty?: Recipe['difficulty'];
  category?: string;
  maxTime?: number;
  servings?: number;
}

interface SearchFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  categories: string[];
}

export function SearchFilters({ filters, onFilterChange, categories }: SearchFiltersProps) {
  const handleReset = () => {
    onFilterChange({
      search: '',
      difficulty: undefined,
      category: undefined,
      maxTime: undefined,
      servings: undefined,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div className="space-y-2">
        <Label>Search Recipes</Label>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or description..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="pl-8"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Difficulty</Label>
        <Select
          value={filters.difficulty}
          onValueChange={(value) => onFilterChange({ ...filters, difficulty: value as Recipe['difficulty'] })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={filters.category}
          onValueChange={(value) => onFilterChange({ ...filters, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Maximum Total Time (minutes)</Label>
        <div className="pt-2">
          <Slider
            value={[filters.maxTime || 180]}
            onValueChange={([value]) => onFilterChange({ ...filters, maxTime: value })}
            max={180}
            step={15}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>0 min</span>
            <span>{filters.maxTime || 180} min</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Servings</Label>
        <Select
          value={filters.servings?.toString()}
          onValueChange={(value) => onFilterChange({ ...filters, servings: parseInt(value) })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any servings" />
          </SelectTrigger>
          <SelectContent>
            {[2, 4, 6, 8, 10].map((value) => (
              <SelectItem key={value} value={value.toString()}>
                {value} servings
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={handleReset}
      >
        <X className="mr-2 h-4 w-4" />
        Reset Filters
      </Button>
    </div>
  );
}