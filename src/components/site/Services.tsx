const services = [
  { icon: "🦷", title: "Ortodoncia", desc: "Brackets y alineadores invisibles para alinear tu sonrisa." },
  { icon: "🪥", title: "Limpieza dental", desc: "Profilaxis profesional para una boca sana y fresca." },
  { icon: "🌟", title: "Blanqueamiento", desc: "Devuelve el brillo natural a tus dientes en una sola sesión." },
  { icon: "🔬", title: "Endodoncia", desc: "Tratamiento de conductos sin dolor para salvar tu diente." },
  { icon: "👶", title: "Odontopediatría", desc: "Atención especializada y cariñosa para los más pequeños." },
  { icon: "🦴", title: "Implantes dentales", desc: "Reemplaza piezas perdidas con resultados duraderos y naturales." },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Cuidado dental integral
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tratamientos modernos y personalizados para cada miembro de tu familia.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
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
