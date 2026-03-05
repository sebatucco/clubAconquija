import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/aconquijaclub", color: "hover:bg-[hsl(220,60%,50%)]" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/aconquijaclub", color: "hover:bg-[hsl(330,70%,50%)]" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5493814000000", color: "hover:bg-[hsl(142,70%,40%)]" },
];

const SocialSection = () => {
  return (
    <section className="section-padding gradient-sky-soft">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 font-orbitron text-2xl font-bold text-foreground md:text-3xl"
        >
          Seguinos en <span className="text-gradient-sky">redes</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className={`glass-card flex items-center gap-3 rounded-full px-8 py-4 font-outfit font-semibold text-foreground transition-all ${s.color} hover:text-primary-foreground`}
            >
              <s.icon className="h-5 w-5" />
              {s.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
