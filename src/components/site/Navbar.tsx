import { useState } from "react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/lib/contact";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-18 flex items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Denti Smile logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-display font-extrabold text-xl text-navy">
            Denti <span className="text-primary">Smile</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-navy/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-soft hover:opacity-95 transition"
        >
          Agenda tu cita
        </a>
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-semibold text-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 font-bold"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
