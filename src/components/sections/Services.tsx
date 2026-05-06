import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            {siteConfig.services.tagline}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            {siteConfig.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {siteConfig.services.description}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.items.map((s, i) => (
            <div
              key={s.title}
              className="reveal group bg-card rounded-3xl p-7 border border-border hover:border-primary/40 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
