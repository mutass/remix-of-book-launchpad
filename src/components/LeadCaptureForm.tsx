import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AMAZON_MAIN_BOOK_URL =
  "https://www.amazon.com/s?k=Fred+Brian+Kisubui+The+Wealth+Blueprint&i=digital-text";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+()\-\s0-9]+$/, "Phone can only contain digits and + ( ) -"),
});

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export function LeadCaptureForm({ id }: { id?: string }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  };

  if (done) {
    return (
      <div
        id={id}
        className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] sm:p-8"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/20 text-3xl">
          🎉
        </div>
        <h3 className="mt-4 text-2xl font-black text-foreground">
          Congratulations, {values.name.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your discount is locked in. You will receive an email at{" "}
          <span className="font-semibold text-foreground">{values.email}</span> with your download
          link, and we may text your copy code to {values.phone}.
        </p>
        <Button asChild variant="deal" size="lg" className="mt-6 w-full">
          <a href={AMAZON_MAIN_BOOK_URL} target="_blank" rel="noopener noreferrer">
            Get the book on Amazon now
          </a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Check your spam folder if the email is not in your inbox within 5 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <h3 className="text-xl font-black text-foreground">Claim the 68% discount</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter your details and we will email your instant-access link.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <Label htmlFor="lead-name">Full name</Label>
          <Input
            id="lead-name"
            className="mt-1.5"
            value={values.name}
            onChange={set("name")}
            placeholder="Jane Doe"
            maxLength={80}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="lead-email">Email address</Label>
          <Input
            id="lead-email"
            type="email"
            className="mt-1.5"
            value={values.email}
            onChange={set("email")}
            placeholder="jane@example.com"
            maxLength={255}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="lead-phone">Phone number</Label>
          <Input
            id="lead-phone"
            type="tel"
            className="mt-1.5"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+256 700 000 000"
            maxLength={20}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <Button type="submit" variant="deal" size="lg" className="mt-6 w-full">
        Send me the book — $7.99
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Unsubscribe any time. Instant PDF + Amazon Kindle link.
      </p>
    </form>
  );
}
