import { useState, useMemo } from 'react';
import MenuTabs from './MenuTabs';
import FilterChips from './FilterChips';
import MenuGrid from './MenuGrid';
import menuData from '../data/menu.json';

const categories = ['All', ...menuData.map((c) => c.category)];

const filters = [
  { label: 'Halal ✓', value: 'halal' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Spicy 🌶️', value: 'spicy' },
  { label: 'House Favorite', value: 'houseFavorite' },
  { label: 'Under RM20', value: 'under20' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  const filteredItems = useMemo(() => {
    let items = menuData.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, category: cat.category }))
    );

    if (activeCategory !== 'All') {
      items = items.filter((item) => item.category === activeCategory);
    }

    if (activeFilters.includes('halal')) {
      items = items.filter((item) => item.tags.includes('halal'));
    }
    if (activeFilters.includes('vegetarian')) {
      items = items.filter((item) => item.tags.includes('vegetarian'));
    }
    if (activeFilters.includes('spicy')) {
      items = items.filter((item) => item.tags.includes('spicy'));
    }
    if (activeFilters.includes('houseFavorite')) {
      items = items.filter((item) => item.houseFavorite);
    }
    if (activeFilters.includes('under20')) {
      items = items.filter((item) => {
        const num = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
        return num < 20;
      });
    }

    return items;
  }, [activeCategory, activeFilters]);

  return (
    <div>
      <MenuTabs
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <FilterChips
          filters={filters}
          activeFilters={activeFilters}
          onToggle={toggleFilter}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <MenuGrid items={filteredItems} />
      </div>
    </div>
  );
}
