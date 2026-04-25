import { useState } from 'react';

interface ContactFormProps {
  formspreeId?: string;
}

export default function ContactForm({ formspreeId }: ContactFormProps) {
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
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  if (!formspreeId) {
    return (
      <div className="rounded-sm border border-grill-orange/20 bg-grill-orange/5 p-6 text-center">
        <p className="text-sm text-cream/70">Contact form is currently unavailable.</p>
        <p className="mt-2 text-sm text-cream/70">
          Please reach us via{' '}
          <a href="https://wa.me/60123456789" className="text-grill-orange hover:underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          {' '}or call us directly.
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-sm bg-ivory-cream p-6 text-center">
        <p className="font-display text-lg font-bold text-deep-charcoal">Message sent!</p>
        <p className="mt-1 text-sm text-deep-charcoal/60">We'll get back to you as soon as we can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-cream/80">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-cream/80">Email or Phone</label>
          <input
            type="text"
            id="contact-email"
            name="email"
            required
            className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
            placeholder="How we reach you"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-cream/80">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="mt-1.5 block w-full rounded-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder-cream/30 transition-colors focus:border-grill-orange focus:bg-white/10 focus:outline-none"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-sm bg-grill-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-char-red disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
