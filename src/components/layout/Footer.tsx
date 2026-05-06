import logo from "@/assets/logo.png";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 invert brightness-0 opacity-90" style={{ filter: "brightness(0) invert(1)" }} />
            <span className="font-display font-extrabold text-xl text-white">{siteConfig.shortName}</span>
          </div>
          <p className="mt-3 text-white/70">{siteConfig.slogan}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 !text-white">Enlaces</h4>
          <ul className="space-y-2">
            {siteConfig.navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 !text-white">Contacto</h4>
          <p className="text-white/70">{siteConfig.contact.address}</p>
          <p className="mt-2 text-white/70">Tel: {siteConfig.contact.phoneDisplay}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-sm text-white/60 text-center">
          {siteConfig.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
