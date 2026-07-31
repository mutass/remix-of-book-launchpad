import { createFileRoute } from "@tanstack/react-router";
import mainBook from "@/assets/main-book.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AMAZON_MAIN_BOOK_URL, LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";

const TITLE = "The Wealth Blueprint by Fred Brian Kisubui — 68% Off Today";
const DESCRIPTION =
  "Get The Wealth Blueprint by Fred Brian Kisubui for $7.99 instead of $24.99. Limited-time offer — enter your email and phone for instant access plus the Amazon link.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const samples = [
  {
    cover: book1,
    title: "Side Hustle Starter",
    blurb: "10 businesses you can start this week with almost no capital.",
    url: "https://www.amazon.com/s?k=Fred+Brian+Kisubui+Side+Hustle+Starter&i=digital-text",
  },
  {
    cover: book2,
    title: "Money Mindset",
    blurb: "Rewire the beliefs that quietly keep your bank balance flat.",
    url: "https://www.amazon.com/s?k=Fred+Brian+Kisubui+Money+Mindset&i=digital-text",
  },
  {
    cover: book3,
    title: "Sell Without Fear",
    blurb: "A calm, simple framework for closing deals without pressure.",
    url: "https://www.amazon.com/s?k=Fred+Brian+Kisubui+Sell+Without+Fear&i=digital-text",
  },
];

const chapters = [
  {
    title: "Build your first income system",
    body: "A step-by-step path from idea to first paying customer in 30 days.",
  },
  {
    title: "Price like a professional",
    body: "Stop undercharging. Learn the pricing math that protects your margin.",
  },
  {
    title: "Find buyers, not browsers",
    body: "Simple outreach scripts that turn cold contacts into warm leads.",
  },
  {
    title: "Manage the money coming in",
    body: "Cashflow, savings buckets and reinvestment made painfully simple.",
  },
  {
    title: "Scale without burning out",
    body: "Systems, delegation and the tasks you should never do yourself.",
  },
  {
    title: "Stay consistent for 12 months",
    body: "The weekly review ritual that keeps momentum alive after month one.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
          <span className="truncate text-sm font-black uppercase tracking-[0.2em] text-foreground">
            Fred Brian Kisubui
          </span>
          <Button asChild variant="deal" size="sm" className="shrink-0">
            <a href="#claim">Get 68% off</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div className="mx-auto w-56 sm:w-72">
            <img
              src={mainBook}
              alt="The Wealth Blueprint book cover by Fred Brian Kisubui"
              width={800}
              height={1104}
              className="w-full rounded-lg shadow-[var(--shadow-book)]"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-deal/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-deal">
              Limited launch offer
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
              200 practical moves to help you build{" "}
              <span className="text-accent">real wealth</span> from zero.
            </h1>
            <p className="mt-3 text-muted-foreground">
              The Wealth Blueprint is the complete field guide Fred Brian Kisubui uses with clients
              — income systems, pricing, selling and money habits in one book.
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="relative text-2xl font-bold text-muted-foreground">
                <span className="line-through decoration-deal decoration-[3px]">$24.99</span>
                <span
                  aria-hidden="true"
                  className="absolute -right-5 -top-1 text-3xl font-black text-deal"
                >
                  ✕
                </span>
              </span>
              <span className="ml-4 text-5xl font-black text-foreground">$7.99</span>
              <span className="pb-1 text-sm font-semibold text-deal">You save $17.00</span>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Offer ends in
              </p>
              <CountdownTimer />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="deal" size="xl">
                <a href="#claim">Claim my copy now</a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={AMAZON_MAIN_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink-foreground/15 text-lg font-black">
            DO
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold sm:text-base">
              “This is by far one of the most practical books on building income I have read. Highly
              recommended.”
            </p>
            <p className="mt-1 text-xs opacity-75">— Daniel O., verified Amazon reader ★★★★★</p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-black text-foreground">
          What&apos;s included in this book
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Everything you need to go from idea to a steady income. Take a look at what is inside.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample books */}
      <section className="bg-secondary/50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-black text-foreground">
            More books by Fred Brian Kisubui
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Sample titles from the same library — all available on Amazon Kindle.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {samples.map((b) => (
              <a
                key={b.title}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <img
                  src={b.cover}
                  alt={`${b.title} book cover`}
                  loading="lazy"
                  width={800}
                  height={1104}
                  className="w-full rounded-md"
                />
                <h3 className="mt-4 font-bold text-foreground group-hover:text-accent">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.blurb}</p>
                <span className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                  View on Amazon →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capture */}
      <section className="bg-[image:var(--gradient-ink)] py-14 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight">
              Grab your copy today and start building the income you actually want.
            </h2>
            <p className="mt-3 text-sm opacity-80">
              Enter your email and phone number and we will send your instant download plus a direct
              link to the book on Amazon.
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="relative text-xl font-bold opacity-70">
                <span className="line-through decoration-deal decoration-[3px]">$24.99</span>
                <span aria-hidden="true" className="absolute -right-5 -top-1 text-2xl font-black text-deal">
                  ✕
                </span>
              </span>
              <span className="ml-4 text-4xl font-black">$7.99</span>
            </div>
            <div className="mt-6">
              <CountdownTimer />
            </div>
          </div>
          <LeadCaptureForm id="claim" />
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs opacity-70">
          © {new Date().getFullYear()} Fred Brian Kisubui. All rights reserved. Amazon and Kindle
          are trademarks of Amazon.com, Inc.
        </div>
      </footer>
    </div>
  );
}
