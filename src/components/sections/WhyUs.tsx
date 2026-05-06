import { siteConfig } from "@/config/site";

export function WhyUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-mint/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl -translate-y-1/2" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            {siteConfig.whyUs.tagline}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            {siteConfig.whyUs.title}
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {siteConfig.whyUs.items.map((it, i) => (
            <div
              key={it.title}
              className="reveal bg-white rounded-3xl p-8 text-center shadow-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-4xl shadow-soft">
                {it.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
