import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field =
  "mt-1 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as keyof Errors] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 text-xl font-bold">Thank you for your inquiry</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We have received your message and the academy office will respond shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-md border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold">Send an Inquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        We reply to inquiries during office hours.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Full name
          <input name="name" maxLength={100} className={field} placeholder="Your name" />
          {errors.name && (
            <span className="mt-1 block text-xs font-medium text-destructive">{errors.name}</span>
          )}
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            name="email"
            type="email"
            maxLength={255}
            className={field}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="mt-1 block text-xs font-medium text-destructive">{errors.email}</span>
          )}
        </label>
        <label className="block text-sm font-semibold">
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
          <input name="phone" maxLength={30} className={field} placeholder="+94 ..." />
        </label>
        <label className="block text-sm font-semibold">
          Subject
          <input name="subject" maxLength={150} className={field} placeholder="Course inquiry" />
          {errors.subject && (
            <span className="mt-1 block text-xs font-medium text-destructive">
              {errors.subject}
            </span>
          )}
        </label>
        <label className="block text-sm font-semibold sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            maxLength={1000}
            className={field}
            placeholder="How can we help?"
          />
          {errors.message && (
            <span className="mt-1 block text-xs font-medium text-destructive">
              {errors.message}
            </span>
          )}
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark sm:w-auto"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
