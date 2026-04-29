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
  { category: "Style", title: "Tailoring for beginners: the 6 rules that actually matter", readTime: "10 min", image: "/images/hero/hero-1.jpg" },
  { category: "Sustainability", title: "What 'made in Portugal' actually means — and why it matters", readTime: "8 min", image: "/images/hero/hero-2.jpg" },
  { category: "Lifestyle", title: "Investment dressing: why one €600 piece beats six €100 ones", readTime: "7 min", image: "/images/categories/jewelry.jpg" },
];

export default function BlogArticlePage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Style Notes" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            Style
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            Building a capsule wardrobe — and why fewer pieces actually means more outfits
          </h1>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A stylist explains why capsule dressing isn&apos;t marketing — it&apos;s mathematics. Twelve well-chosen pieces, ninety distinct looks. Here&apos;s the framework.
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-4 gap-y-3 text-xs text-text-muted flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                SE
              </span>
              <span className="text-left">
                <span className="font-semibold text-text-primary block sm:inline">Sofia Esposito</span>
                <span className="text-text-muted hidden sm:inline"> · </span>
                <span className="text-text-muted block sm:inline">Head Stylist, Elara Shop</span>
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
            src="/images/categories/women.jpg"
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
                Ask ten people what a &ldquo;capsule wardrobe&rdquo; is and you&apos;ll get ten confident answers. Most of them are incomplete. Not because the internet is lying, but because the math behind it is rarely explained.
              </p>

              <p className="text-base text-text-secondary leading-relaxed mb-8">
                I&apos;ve styled clients for over a decade, and here&apos;s what I wish more people knew about their wardrobe — the version I share with friends over dinner, not the one in the magazine.
              </p>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The principle: combinations, not pieces
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                Most people count clothes. Stylists count outfits. A wardrobe of 60 random pieces might give you 15 good combinations. A wardrobe of 12 considered pieces can give you 90.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                The rule of thumb: <strong className="text-text-primary">every piece you own should work with at least three others.</strong> Neutral palette. Consistent silhouettes. Quality cuts that don&apos;t fight each other on the rail.
              </p>

              <figure className="my-10 bg-surface-secondary border-l-4 border-accent rounded-r-2xl p-6 md:p-8 not-prose">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <blockquote className="text-lg md:text-xl text-text-primary font-medium leading-relaxed italic">
                  If you remember nothing else: one blazer, two trousers, three knits, three shirts, two shoes, one bag. That&apos;s 80% of getting dressed solved.
                </blockquote>
                <figcaption className="mt-4 text-sm text-text-muted">
                  — Sofia Esposito
                </figcaption>
              </figure>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The twelve pieces, unpacked
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                Here&apos;s the minimalist version I recommend to new clients — it works for almost every body type and every budget.
              </p>

              <ol className="space-y-6 my-8 pl-0 list-none">
                {[
                  { n: 1, title: "One tailored blazer", body: "The hardest-working piece in the wardrobe. Choose a neutral wool or linen blend in a colour that flatters your skin tone. Should fit clean across the shoulders — everything else can be tailored later." },
                  { n: 2, title: "Two trousers, two cuts", body: "One straight-leg in a dark neutral, one wide-leg or relaxed in a mid-tone. Cover formal and casual without overlap. Add a great pair of jeans only if denim is part of how you actually live." },
                  { n: 3, title: "Three knits, three shirts, two shoes, one bag", body: "Knits add warmth and texture. Shirts add structure. Two pairs of shoes (one comfortable, one polished) cover most of life. One leather bag in a neutral tone, sized for daily use, is plenty." },
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
                  "Buying trend pieces before you own the basics — fashion changes faster than your closet should.",
                  "Skimping on outerwear because &ldquo;no one sees what&apos;s under it anyway&rdquo; — actually, your coat is what people see first and longest.",
                  "Owning twelve white tees in subtle variations — pick three and rotate.",
                  "Giving up after one bad purchase — every wardrobe has misses. Keep what works, donate what doesn&apos;t.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-12 mb-5 tracking-tight">
                The bottom line
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                The best wardrobe is the one you&apos;ll actually wear. Twelve pieces you reach for daily will always beat the forty-piece masterpiece you ignore. Start simple, give it time, and pay attention to what you actually keep wearing — not what looked good on someone else online.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                If a piece doesn&apos;t make it into rotation in three months, it never will. If something works, keep buying it in different colours. That really is the whole thing.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border-light">
              <div className="flex items-center gap-4 bg-surface-secondary rounded-2xl p-6">
                <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-base font-bold">
                  SE
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-text-primary">Sofia Esposito</p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Head Stylist at Elara Shop, dressing clients across Milano, Paris, and London since 2014.
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
