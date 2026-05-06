import heroImg from "@/assets/hero-clinic.jpg";
import { WHATSAPP_URL } from "@/lib/contact";
import { Star, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-sm font-semibold text-navy border border-primary/20 shadow-sm">
            <Star size={16} className="fill-primary text-primary" />
            Calificación 5 estrellas en Barranquilla
          </div>
          <h1 className="mt-5 font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy">
            Tu sonrisa,
            <br />
            <span className="text-primary">nuestra pasión.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-navy/75 max-w-xl leading-relaxed">
            Consultorio odontológico en Barranquilla. Atención profesional, cálida y amigable
            para toda la familia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-4 text-base font-bold shadow-soft hover:scale-[1.02] transition"
            >
              <Sparkles size={18} /> Agenda tu cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center rounded-full border-2 border-navy/15 bg-white/60 backdrop-blur px-7 py-4 text-base font-bold text-navy hover:border-primary hover:text-primary transition"
            >
              Ver servicios
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-navy/70">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent"
                />
              ))}
            </div>
            <p>
              <span className="font-bold text-navy">+500 pacientes</span> confían en nosotros
            </p>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-primary/10">
            <img
              src={heroImg}
              alt="Consultorio dental moderno Denti Smile en Barranquilla"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="text-3xl">🦷</div>
            <div>
              <div className="font-bold text-navy">Sonrisas felices</div>
              <div className="text-xs text-muted-foreground">Cada día en Denti Smile</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-3 flex items-center gap-2">
            <span className="text-xl">🏳️‍🌈</span>
            <span className="text-sm font-bold text-navy">LGBTQ+ friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
