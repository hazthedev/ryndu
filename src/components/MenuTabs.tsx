import { motion } from 'framer-motion';

interface MenuTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function MenuTabs({ categories, activeCategory, onChange }: MenuTabsProps) {
  return (
    <div className="sticky top-[72px] z-40 border-b border-white/10 bg-deep-charcoal/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`relative shrink-0 rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-grill-orange'
                  : 'text-cream/60 hover:text-cream'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-grill-orange"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
