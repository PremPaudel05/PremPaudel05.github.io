import { Send } from "lucide-react";

export function ContactForm({ email }: { email: string }) {
  return (
    <form action={`https://formsubmit.co/${email}`} method="POST" className="contact-details min-w-0" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-lg font-semibold tracking-tight text-stone-900">Send a message</h3>
      <input type="hidden" name="_subject" value="New message from Prem Paudel’s portfolio" />
      <input type="hidden" name="_template" value="table" />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="contact-label" htmlFor="contact-first-name">First name</label>
          <input className="contact-input" id="contact-first-name" name="first_name" autoComplete="given-name" required maxLength={80} />
        </div>
        <div>
          <label className="contact-label" htmlFor="contact-last-name">Last name</label>
          <input className="contact-input" id="contact-last-name" name="last_name" autoComplete="family-name" required maxLength={80} />
        </div>
      </div>
      <div className="mt-4">
        <label className="contact-label" htmlFor="contact-email">Email address</label>
        <input className="contact-input" id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-describedby="contact-email-hint" />
        <p id="contact-email-hint" className="mt-2 text-xs text-stone-500">So I can reply to you.</p>
      </div>
      <div className="mt-4">
        <label className="contact-label" htmlFor="contact-message">Message</label>
        <textarea className="contact-input min-h-32 resize-y" id="contact-message" name="message" rows={5} required maxLength={5000} />
      </div>
      <p className="mt-4 text-xs leading-5 text-stone-500">Complete the verification on the next screen to send your message.</p>
      <button type="submit" className="primary-button mt-5 justify-center"><Send size={16} aria-hidden="true" /> Send message</button>
    </form>
  );
}
