import { Facebook, Instagram, MessageCircle } from "lucide-react";
import aconquijaLogo from "@/assets/aconquija-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-foreground/[0.03] px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={aconquijaLogo} alt="" className="h-8 w-auto rounded-full" />
              <span className="font-outfit text-sm font-bold text-foreground">ACONQUIJA CLUB DE VUELO Y AVENTURA </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Club de Vuelo y Aventura · Tucumán, Argentina
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-outfit text-xs font-semibold uppercase tracking-wider text-foreground">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Inicio", "Experiencias", "Ubicación", "Contacto"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace("ó", "o")}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-outfit text-xs font-semibold uppercase tracking-wider text-foreground">
              Redes Sociales
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/aconquijaclub" },
                { icon: Instagram, href: "https://instagram.com/aconquijaclub" },
                { icon: MessageCircle, href: "https://wa.me/5493814000000" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aconquija Club de Vuelo y Aventura. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
