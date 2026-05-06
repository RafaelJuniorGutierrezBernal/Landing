import logo from "@/assets/logo.png";
import { ADDRESS, PHONE_DISPLAY } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 invert brightness-0 opacity-90" style={{ filter: "brightness(0) invert(1)" }} />
            <span className="font-display font-extrabold text-xl text-white">Denti Smile</span>
          </div>
          <p className="mt-3 text-white/70">Tu sonrisa es nuestra misión.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 !text-white">Enlaces</h4>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-primary">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 !text-white">Contacto</h4>
          <p className="text-white/70">{ADDRESS}</p>
          <p className="mt-2 text-white/70">Tel: {PHONE_DISPLAY}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-sm text-white/60 text-center">
          © 2025 Denti Smile. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
