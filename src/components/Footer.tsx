import { Wind, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-foreground/[0.03] px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Wind className="h-6 w-6 text-primary" />
              <span className="font-orbitron text-sm font-bold text-foreground">ACONQUIJA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Club de Vuelo y Aventura · Tucumán, Argentina
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-orbitron text-xs font-semibold uppercase tracking-wider text-foreground">
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
            <h4 className="mb-3 font-orbitron text-xs font-semibold uppercase tracking-wider text-foreground">
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
