import { motion } from "framer-motion";
import galleryTakeoff from "@/assets/gallery-takeoff.jpg";
import galleryFlight from "@/assets/gallery-flight.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryPanoramic from "@/assets/gallery-panoramic.jpg";
import experienceEvents from "@/assets/experience-events.jpg";
import experienceTraining from "@/assets/experience-training.jpg";

const images = [
  { src: galleryTakeoff, alt: "Despegue desde la montaña", span: "col-span-2 row-span-2" },
  { src: galleryFlight, alt: "Piloto en vuelo", span: "" },
  { src: experienceEvents, alt: "Evento de parapente", span: "" },
  { src: galleryPanoramic, alt: "Vista panorámica", span: "col-span-2" },
  { src: galleryCommunity, alt: "Comunidad de pilotos", span: "" },
  { src: experienceTraining, alt: "Entrenamiento", span: "" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="section-padding gradient-sky-soft">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-outfit text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-gradient-sky">Galería</span>
          </h2>
          <p className="text-muted-foreground">Momentos capturados desde el cielo</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`group overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
