import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const mapSrc =
  "https://www.google.com/maps?q=Cra.+9f+%2345b-45,+Metropolitana,+Barranquilla&output=embed";

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-mint/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Contacto
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Visítanos o escríbenos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos listos para atenderte y resolver todas tus dudas.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="reveal space-y-5">
            <InfoCard icon={<MapPin />} title="Dirección" lines={[ADDRESS]} />
            <InfoCard
              icon={<Phone />}
              title="Teléfono / WhatsApp"
              lines={[PHONE_DISPLAY]}
              href={`tel:${PHONE_TEL}`}
            />
            <InfoCard
              icon={<Clock />}
              title="Horario de atención"
              lines={["Lunes a Sábado", "8:00 a.m. – 7:00 p.m."]}
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-primary text-primary-foreground px-6 py-5 font-bold text-lg shadow-soft hover:scale-[1.01] transition"
            >
              <MessageCircle /> Escríbenos por WhatsApp
            </a>
          </div>

          <div className="reveal rounded-3xl overflow-hidden shadow-card border border-border bg-card min-h-[400px]">
            <iframe
              title="Ubicación Denti Smile"
              src={mapSrc}
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-soft transition">
      <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-navy">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-muted-foreground">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
