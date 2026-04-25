import { useState } from 'react';

interface ReservationFormProps {
  formspreeId?: string;
}

export default function ReservationForm({ formspreeId }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeId) return;

    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silent fail — could show error state
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-sm bg-ivory-cream p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-grill-orange/10 text-grill-orange">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-deep-charcoal">Reservation sent!</h3>
        <p className="mt-2 text-deep-charcoal/70">We'll WhatsApp you within 30 minutes during operating hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-grill-orange hover:text-char-red"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cream/80">
            Name <span className="text-grill-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cream/80">
            Phone <span className="text-grill-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
            placeholder="e.g. 012-345 6789"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="partySize" className="block text-sm font-medium text-cream/80">
            Party Size <span className="text-grill-orange">*</span>
          </label>
          <select
            id="partySize"
            name="partySize"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1} className="bg-deep-charcoal">
                {i + 1} {i === 0 ? 'person' : 'people'}
              </option>
            ))}
            <option value="13+" className="bg-deep-charcoal">13+ (large group)</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-cream/80">
            Date <span className="text-grill-orange">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-cream/80">
            Time <span className="text-grill-orange">*</span>
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="occasion" className="block text-sm font-medium text-cream/80">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
        >
          <option value="" className="bg-deep-charcoal">Select an occasion</option>
          <option value="Birthday" className="bg-deep-charcoal">Birthday</option>
          <option value="Anniversary" className="bg-deep-charcoal">Anniversary</option>
          <option value="Family" className="bg-deep-charcoal">Family Dinner</option>
          <option value="Friends" className="bg-deep-charcoal">Friends Gathering</option>
          <option value="Other" className="bg-deep-charcoal">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-cream/80">
          Special Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
          placeholder="Allergies, high chair needed, seating preference..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-sm bg-grill-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-char-red disabled:opacity-50 sm:w-auto"
      >
        {submitting ? 'Sending...' : 'Reserve a Table'}
      </button>

      <p className="text-xs text-cream/40">
        We'll WhatsApp confirm within 30 minutes during operating hours.
      </p>
    </form>
  );
}
