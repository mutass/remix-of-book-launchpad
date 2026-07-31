import { createFileRoute } from "@tanstack/react-router";
import mainBook from "@/assets/main-book.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AMAZON_AUTHOR_URL, AMAZON_MAIN_BOOK_URL, LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";

const TITLE = "Seven Dimensions of Prayer by Fred Brian Kisubi — $5.99 on Kindle";
const DESCRIPTION =
  "Get Seven Dimensions of Prayer by Apostle Fred Brian Kisubi for $5.99 on Amazon Kindle. Enter your email and phone for the direct Amazon link and more titles from the author.";

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
    title: "Intimacy with the Holy Spirit",
    blurb: "Experiencing the supernatural through a daily walk in His presence.",
    url: "https://www.amazon.com/INTIMACY-HOLY-SPIRIT-Experiencing-Supernatural-ebook/dp/B08J444HXN",
  },
  {
    cover: book2,
    title: "The Power Dimension",
    blurb: "Unlocking spiritual power for a life of impact and authority.",
    url: "https://www.amazon.com/POWER-DIMENSION-Unlocking-Spiritual-Power-ebook/dp/B08JCVKFDY",
  },
  {
    cover: book3,
    title: "Mechanism of Faith",
    blurb: "The master keys to a productive, fruitful Christian life.",
    url: "https://www.amazon.com/MECHANISM-FAITH-Master-Productive-Christianity-ebook/dp/B08BP44BBN",
  },
];

const moreTitles = [
  {
    title: "The Purpose and Benefits of Prayer",
    url: "https://www.amazon.com/PURPOSE-BENEFITS-PRAYER-Tapping-Power-ebook/dp/B08DH25442",
  },
  {
    title: "Enjoying the Spirit Filled Life",
    url: "https://www.amazon.com/ENJOYING-SPIRIT-FILLED-BRIAN-KISUBI-ebook/dp/B08BNZRD2Q",
  },
  {
    title: "Breaking the Power of the Flesh",
    url: "https://www.amazon.com/BREAKING-POWER-FLESH-Limiting-Limitation-ebook/dp/B08BCPB4MJ",
  },
  {
    title: "Empowered by Grace",
    url: "https://www.amazon.com/EMPOWERED-GRACE-Connecting-supernatural-enablement-ebook/dp/B08J3Z1WPN",
  },
  {
    title: "Apostolic Impartation",
    url: "https://www.amazon.com/APOSTOLIC-IMPARTATION-Spiritual-Establishment-empowerment-ebook/dp/B0H3CQ3LKB",
  },
  {
    title: "Understanding the Five-Fold Ministry",
    url: "https://www.amazon.com/Understanding-Five-Fold-Ministry-Unlocking-Structure-ebook/dp/B0GSJPFLRM",
  },
];

const chapters = [
  {
    title: "Yielding to the Holy Spirit",
    body: "How to pray from a place of surrender and let the Spirit lead your words.",
  },
  {
    title: "Engaging effectively in prayer",
    body: "Practical patterns that move prayer from routine to real achievement.",
  },
  {
    title: "Following through in prayer",
    body: "How to stay with a matter until heaven's assistance shows up.",
  },
  {
    title: "Breaking impasses",
    body: "What to do when prayer feels blocked and progress has stalled.",
  },
  {
    title: "Heavenly legislation",
    body: "Understanding prayer as divine communion and legislation in the unseen realm.",
  },
  {
    title: "Unlocking kingdom treasures",
    body: "Steady progress in destiny through consistent, informed prayer.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
          <span className="truncate text-sm font-black uppercase tracking-[0.2em] text-foreground">
            Fred Brian Kisubi
          </span>
          <Button asChild variant="deal" size="sm" className="shrink-0">
            <a href="#claim">Get the book</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-4 px-4 py-10 sm:gap-10 sm:py-12 md:py-16">
          <div className="mx-auto w-full max-w-[160px] sm:max-w-[220px] md:max-w-[280px]">
            <img
              src={mainBook}
              alt="Seven Dimensions of Prayer book cover by Fred Brian Kisubi"
              width={800}
              height={1200}
              className="w-full rounded-lg shadow-[var(--shadow-book)]"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-deal/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-deal sm:px-3 sm:text-xs">
              Kindle edition — out now
            </span>
            <h1 className="mt-2 text-lg font-black leading-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
              Unlock kingdom treasures and{" "}
              <span className="text-accent">steady progress</span> through prayer.
            </h1>
            <p className="mt-2 text-xs text-muted-foreground sm:mt-3 sm:text-base">
              Seven Dimensions of Prayer by Apostle Fred Brian Kisubi shows you how to yield to the
              Holy Spirit, engage effectively, follow through and break every impasse in prayer.
            </p>

            <div className="mt-4 flex flex-wrap items-end gap-2 sm:mt-6 sm:gap-3">
              <span className="relative text-base font-bold text-muted-foreground sm:text-2xl">
                <span className="line-through decoration-deal decoration-[3px]">$14.99</span>
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-1 text-lg font-black text-deal sm:-right-5 sm:text-3xl"
                >
                  ✕
                </span>
              </span>
              <span className="ml-3 text-2xl font-black text-foreground sm:ml-4 sm:text-5xl">$5.99</span>
              <span className="pb-0.5 text-[10px] font-semibold text-deal sm:pb-1 sm:text-sm">You save $9.00</span>
            </div>

            <div className="mt-4 sm:mt-6">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:mb-2 sm:text-xs">
                Offer ends in
              </p>
              <CountdownTimer />
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <Button asChild variant="deal" size="sm" className="sm:size-xl">
                <a href="#claim">Claim my copy now</a>
              </Button>
              <Button asChild variant="outline" size="sm" className="sm:size-xl">
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
              “Apostle Fred writes with clarity and fire. This book changed how our whole church
              approaches prayer.”
            </p>
            <p className="mt-1 text-xs opacity-75">— Daniel O., Kindle reader ★★★★★</p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-black text-foreground">
          What&apos;s included in this book
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          A clear path from praying words to praying with understanding. Here is what is inside.
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
            More books by Fred Brian Kisubi
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
            Real titles from Apostle Fred's Kindle library — over 70 books written for the glory
            of God.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
            {samples.map((b) => (
              <a
                key={b.title}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 sm:p-4"
              >
                <img
                  src={b.cover}
                  alt={`${b.title} book cover`}
                  loading="lazy"
                  width={800}
                  height={1200}
                  className="w-full rounded-md"
                />
                <h3 className="mt-2 text-xs font-bold text-foreground group-hover:text-accent sm:mt-4 sm:text-base">
                  {b.title}
                </h3>
                <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{b.blurb}</p>
                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-accent sm:mt-3 sm:text-xs">
                  View →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Also on Amazon Kindle
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {moreTitles.map((t) => (
                <li key={t.title}>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline"
                  >
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={AMAZON_AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-accent"
            >
              See all books by Fred Brian Kisubi →
            </a>
          </div>
        </div>
      </section>

      {/* Capture */}
      <section className="bg-[image:var(--gradient-ink)] py-14 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight">
              Get your copy today and step into a deeper dimension of prayer.
            </h2>
            <p className="mt-3 text-sm opacity-80">
              Enter your email and phone number and we will send your instant download plus a direct
              link to the book on Amazon.
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="relative text-xl font-bold opacity-70">
                <span className="line-through decoration-deal decoration-[3px]">$14.99</span>
                <span aria-hidden="true" className="absolute -right-5 -top-1 text-2xl font-black text-deal">
                  ✕
                </span>
              </span>
              <span className="ml-4 text-4xl font-black">$5.99</span>
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
          © {new Date().getFullYear()} Fred Brian Kisubi. All rights reserved. Amazon and Kindle
          are trademarks of Amazon.com, Inc.
        </div>
      </footer>
    </div>
  );
}
