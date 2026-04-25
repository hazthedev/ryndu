interface FilterChipsProps {
  filters: { label: string; value: string }[];
  activeFilters: string[];
  onToggle: (value: string) => void;
}

export default function FilterChips({ filters, activeFilters, onToggle }: FilterChipsProps) {
  return (
    <div class="flex flex-wrap gap-2">
      {filters.map((f) => {
        const active = activeFilters.includes(f.value);
        return (
          <button
            key={f.value}
            onClick={() => onToggle(f.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
              active
                ? 'bg-grill-orange text-white'
                : 'bg-white/5 text-cream/60 hover:bg-white/10 hover:text-cream'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
