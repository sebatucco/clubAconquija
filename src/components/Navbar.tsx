import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wind } from "lucide-react";
import aconquijaLogo from "@/assets/aconquija-logo.png";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#club", label: "El Club" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-nav fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={aconquijaLogo} alt="" className="h-20 w-auto rounded-full shadow-xl transition-transform duration-300 hover:scale-105" />
          <span className="font-orbitron text-sm font-bold tracking-wider text-foreground md:text-base">
            ACONQUIJA
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
