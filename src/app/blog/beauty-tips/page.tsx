import Image from "next/image";
import {
  Clock,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Quote,
} from "lucide-react";
import PageHeader from "@/components/page/PageHeader";
import SectionHeading from "@/components/page/SectionHeading";

const relatedPosts = [
  { category: "Skincare", title: "Retinol for beginners: everything you need, nothing you don't", readTime: "10 min", image: "/images/hero/hero-1.jpg" },
  { category: "Skincare", title: "Your skin barrier is angry. Here's what's actually happening.", readTime: "8 min", image: "/images/hero/hero-2.jpg" },
  { category: "Wellness", title: "Sleep is the cheapest anti-aging tool — here's the research", readTime: "7 min", image: "/images/categories/body.jpg" },
];

export default function BlogArticlePage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Beauty Tips" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Skincare
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            The science behind your 3-step routine — and why order actually matters
          </h1>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A dermatologist explains why skincare order isn't marketing — it's chemistry. Get the actual reasons your serum should come before moisturizer.
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-4 gap-y-3 text-xs text-text-muted flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                EM
              </span>
              <span className="text-left">
                <span className="font-semibold text-text-primary block sm:inline">Dr. Elena Moretti</span>
                <span className="text-text-muted hidden sm:inline"> · </span>
                <span className="text-text-muted block sm:inline">Board-certified dermatologist</span>
              </span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span>April 14, 2026</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              7 min read
            </span>
          </div>
        </div>
      </article>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="relative aspect-[16/9] md:aspect-[16/8] rounded-2xl overflow-hidden">
          <Image
            src="/images/categories/skincare.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-14 shrink-0">
            <div className="sticky top-28 flex flex-col items-center gap-2">
              <ShareIcon icon={Facebook} />
              <ShareIcon icon={Twitter} />
              <ShareIcon icon={Linkedin} />
              <ShareIcon icon={Share2} />
              <div className="my-2 w-px h-8 bg-border" />
              <ShareIcon icon={Bookmark} />
            </div>
          </aside>

          <article className="flex-1 min-w-0 max-w-2xl mx-auto">
            <div className="article-content text-text-primary">
              <p className="text-lg leading-relaxed mb-6 text-text-secondary first-letter:text-5xl first-letter:font-extrabold first-letter:text-accent first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
                Ask ten people about the "right" order to apply skincare and you'll get ten confident answers. Most of them are wrong. Not because the internet is lying, but because skincare sequencing is one of those areas where the marketing story and the dermatological story don't quite match.
              </p>

              <p className="text-base text-text-secondary leading-relaxed mb-8">
                I've practiced dermatology for fifteen years, and here's what I wish every patient knew about their bathroom shelf — the version I give friends over dinner, not the one in the textbook.
              </p>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The principle: thinnest to thickest
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                Your skin is a barrier, and ingredients have to travel through it to do their job. Thinner, water-based products can slip past each other. Thicker, oil-based products form a layer that stops anything else from getting through.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                So the rule of thumb is: <strong className="text-text-primary">thinnest to thickest.</strong> Water-based serums before oil-based serums. Lightweight moisturizers before heavier ones. Sunscreen — which is its own category we'll get to — comes last on daytime routines.
              </p>

              <figure className="my-10 bg-surface-secondary border-l-4 border-accent rounded-r-2xl p-6 md:p-8 not-prose">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <blockquote className="text-lg md:text-xl text-text-primary font-medium leading-relaxed italic">
                  If you remember nothing else: cleanser, treatment, moisturizer, sunscreen. That's 80% of the job.
                </blockquote>
                <figcaption className="mt-4 text-sm text-text-muted">
                  — Dr. Elena Moretti
                </figcaption>
              </figure>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The three steps, unpacked
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                Here's the minimalist version I recommend to new patients — it works for almost every skin type and every budget.
              </p>

              <ol className="space-y-6 my-8 pl-0 list-none">
                {[
                  { n: 1, title: "Cleanser", body: "Morning and night. Gentle, non-foaming cleansers suit most people. If you wear makeup, double cleanse: an oil-based cleanser first to dissolve makeup and sunscreen, followed by a water-based cleanser to actually clean the skin." },
                  { n: 2, title: "Treatment", body: "This is where actives live: vitamin C in the morning (antioxidant, brightening), retinol at night (cell turnover, texture). Keep it to one active per routine in the beginning. Your skin barrier will thank you." },
                  { n: 3, title: "Moisturizer (and SPF in the morning)", body: "Moisturizer locks everything in. In the morning, broad-spectrum SPF 30+ goes last. Not optional. 90% of visible aging comes from UV — not from expired serums." },
                ].map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-extrabold">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-lg font-bold text-text-primary mb-1">{s.title}</p>
                      <p className="text-base text-text-secondary leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                What not to do
              </h2>
              <ul className="space-y-3 my-6 pl-0 list-none">
                {[
                  "Mixing retinol with strong acids or vitamin C at the same time — overkill, and often irritating.",
                  "Skipping moisturizer because your skin is oily — drying it out makes it produce more oil, not less.",
                  "Buying 9 products when 3 will do — consistency beats complexity every single time.",
                  "Giving up after 2 weeks — most actives take 6–12 weeks to show real results.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The bottom line
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                The best routine is the one you'll actually do. Three steps you stick to will always beat the seven-step masterpiece you abandon after a month. Start simple, give it time, and pay attention to how your skin responds — not how someone else's did on TikTok.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                If something irritates you, stop using it. If something works, keep using it. That really is the whole thing.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border-light">
              <div className="flex items-center gap-4 bg-surface-secondary rounded-2xl p-6">
                <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-base font-bold">
                  EM
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-text-primary">Dr. Elena Moretti</p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Board-certified dermatologist practicing in Milano since 2011. Consulting editor for BEAUTÉ.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border-light lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Share this
              </p>
              <div className="flex gap-2">
                <ShareIcon icon={Facebook} />
                <ShareIcon icon={Twitter} />
                <ShareIcon icon={Linkedin} />
                <ShareIcon icon={Share2} />
                <ShareIcon icon={Bookmark} />
              </div>
            </div>
          </article>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <SectionHeading eyebrow="Keep reading" title="You may also like" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedPosts.map((p) => (
            <a key={p.title} href="/blog/beauty-tips" className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-tertiary">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                {p.category}
              </p>
              <h3 className="text-base font-bold text-text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-2">
                {p.title}
              </h3>
              <p className="text-[11px] text-text-muted flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {p.readTime}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3 bg-surface border border-border text-text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors rounded-lg"
          >
            Browse all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function ShareIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <button
      aria-label="Share"
      className="w-10 h-10 rounded-full bg-surface-secondary border border-border flex items-center justify-center text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-pointer"
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
