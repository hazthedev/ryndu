import { motion, useReducedMotion } from 'framer-motion';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  houseFavorite?: boolean;
}

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  const shouldReduce = useReducedMotion();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-cream/40">No dishes match your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const card = (
          <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-ivory-cream shadow-md shadow-black/0 transition-[transform,box-shadow] duration-300 ease-smooth-out will-change-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-grill-orange/20">
            <div className="aspect-[4/3] shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth-out will-change-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-1 items-start justify-between gap-3">
                <div className="flex flex-col">
                  <h3 className="font-display text-lg font-bold text-deep-charcoal">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-deep-charcoal/60">{item.description}</p>
                </div>
                <span className="shrink-0 font-display text-lg font-bold text-grill-orange">{item.price}</span>
              </div>
              {item.houseFavorite && (
                <span className="mt-3 inline-block self-start rounded-full bg-brass-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brass-gold">
                  House Favorite
                </span>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-deep-charcoal/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-deep-charcoal/50"
                  >
                    {tag === 'halal' ? 'Halal ✓' : tag === 'spicy' ? 'Spicy 🌶️' : tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );

        if (shouldReduce) {
          return <div key={item.name}>{card}</div>;
        }

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {card}
          </motion.div>
        );
      })}
    </div>
  );
}
