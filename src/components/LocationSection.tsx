import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="section-padding gradient-sky-soft">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-outfit text-3xl font-bold text-foreground md:text-4xl">
            ¿Dónde <span className="text-gradient-sky">Volamos</span>?
          </h2>
          <p className="text-muted-foreground">
            Despegue principal: Loma Bola – Sierras de San Javier, Tucumán
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=-26.822474,-65.369024&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Loma Bola"
              className="h-full min-h-[350px] w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-foreground">Loma Bola</h3>
              </div>
              <ul className="mb-6 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Vista panorámica de todo el Valle de Tucumán
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Condiciones térmicas ideales para parapente
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Acceso desde la ciudad en 30 minutos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Temporada de vuelo casi todo el año
                </li>
              </ul>
              <Button
                asChild
                className="rounded-full bg-primary px-6 font-outfit text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
              >
                <a
                  href="https://www.google.com/maps/dir//Loma+Bola,+San+Javier,+Tucuman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Cómo llegar
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
