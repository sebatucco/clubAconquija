import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-paragliding.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Parapentes volando sobre montañas en Tucumán"
          className="h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Floating clouds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cloud-float absolute left-[10%] top-[15%] h-16 w-40 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="cloud-float-reverse absolute right-[15%] top-[25%] h-20 w-52 rounded-full bg-primary-foreground/15 blur-3xl" />
        <div className="cloud-float absolute left-[50%] top-[10%] h-12 w-36 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      {/* Floating paraglider SVG - Removed */}
      {/* 
      <motion.div
        className="paraglider-float absolute right-[10%] top-[20%] hidden opacity-80 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path d="M5 15 Q40 -5 75 15" stroke="hsl(205 85% 50%)" strokeWidth="3" fill="none" />
          <path d="M10 15 Q40 0 70 15" stroke="hsl(200 70% 60%)" strokeWidth="2" fill="none" />
          <line x1="20" y1="15" x2="38" y2="45" stroke="hsl(215 30% 70%)" strokeWidth="0.5" />
          <line x1="60" y1="15" x2="42" y2="45" stroke="hsl(215 30% 70%)" strokeWidth="0.5" />
          <circle cx="40" cy="48" r="4" fill="hsl(215 30% 30%)" />
        </svg>
      </motion.div>
      */}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80 md:text-sm"
        >
          Aconquija Club de Vuelo y Aventura
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 max-w-4xl font-outfit text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Viví la experiencia{" "}
          <span className="text-accent">de volar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-10 max-w-xl text-base text-primary-foreground/80 md:text-lg"
        >
          Volá en parapente sobre las sierras de San Javier, Tucumán. Unite a la comunidad de vuelo libre más apasionada del NOA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            asChild
            className="rounded-full bg-primary px-8 py-6 font-outfit text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
          >
            <a href="https://wa.me/5493814000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-8 py-6 font-outfit text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:scale-105 hover:bg-primary-foreground/20"
          >
            <a href="#contacto">Quiero más información</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
