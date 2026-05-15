import { motion } from "framer-motion";
import experienceTandem from "@/assets/experience-tandem.jpg";
import experienceEvents from "@/assets/experience-events.jpg";
import experienceTraining from "@/assets/experience-training.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";

const experiences = [
  {
    title: "Vuelo Bautismo",
    desc: "Tu primera experiencia de vuelo en parapente biplaza con un piloto certificado. Sentí la libertad de volar.",
    img: experienceTandem,
  },
  {
    title: "Eventos de Parapente",
    desc: "Competencias, festivales aéreos y encuentros de pilotos de todo el país.",
    img: experienceEvents,
  },
  {
    title: "Entrenamiento",
    desc: "Formación para nuevos pilotos con instructores experimentados. Desde inflado hasta vuelo autónomo.",
    img: experienceTraining,
  },
  {
    title: "Comunidad de Vuelo",
    desc: "Compartí jornadas de vuelo, asados en la montaña y la pasión por el aire libre.",
    img: galleryCommunity,
  },
];

const FlightExperiences = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-outfit text-3xl font-bold text-foreground md:text-4xl">
            Nuestras <span className="text-gradient-sky">Experiencias</span>
          </h2>
          <p className="text-muted-foreground">Elegí tu aventura en el cielo tucumano</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, rotateY: 5 }}
              style={{ perspective: 1000 }}
              className="glass-card group overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-outfit text-sm font-bold text-foreground">{exp.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightExperiences;
