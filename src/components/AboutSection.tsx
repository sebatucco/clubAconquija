import { motion } from "framer-motion";
import { Users, Calendar, Wind, Mountain } from "lucide-react";

const features = [
  { icon: Users, title: "Comunidad de Pilotos", desc: "Red activa de pilotos del NOA" },
  { icon: Calendar, title: "Eventos", desc: "Encuentros, competencias y actividades" },
  { icon: Wind, title: "Experiencia de Vuelo", desc: "Vuelos bautismo y formación" },
  { icon: Mountain, title: "Naturaleza", desc: "Las mejores condiciones de vuelo" },
];

const AboutSection = () => {
  return (
    <section id="club" className="section-padding">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-orbitron text-3xl font-bold text-foreground md:text-4xl">
              Sobre el <span className="text-gradient-sky">Club</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Aconquija Club de Vuelo y Aventura reúne pilotos de parapente de la provincia de Tucumán
              y promueve el vuelo libre, encuentros y actividades de aventura en las sierras del noroeste argentino.
            </p>
            <p className="text-muted-foreground">
              Nuestro punto de despegue principal es <strong className="text-foreground">Loma Bola</strong>, 
              en las Sierras de San Javier, donde las condiciones térmicas y el paisaje 
              hacen de cada vuelo una experiencia inolvidable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-orbitron text-xs font-semibold text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
