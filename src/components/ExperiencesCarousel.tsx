import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryTakeoff from "@/assets/gallery-takeoff.jpg";
import galleryFlight from "@/assets/gallery-flight.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryPanoramic from "@/assets/gallery-panoramic.jpg";
import experienceTandem from "@/assets/experience-tandem.jpg";

const slides = [
  { src: galleryTakeoff, title: "Despegue en Loma Bola", subtitle: "La adrenalina del primer paso" },
  { src: galleryFlight, title: "Vuelo libre", subtitle: "Libertad sobre las nubes" },
  { src: experienceTandem, title: "Vuelo bautismo", subtitle: "Tu primera vez en el aire" },
  { src: galleryCommunity, title: "Comunidad de pilotos", subtitle: "Compartí la pasión" },
  { src: galleryPanoramic, title: "Paisajes increíbles", subtitle: "Tucumán desde el cielo" },
];

const ExperiencesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section id="experiencias" className="section-padding gradient-sky-soft">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-outfit text-3xl font-bold text-foreground md:text-4xl">
            Experiencias de <span className="text-gradient-sky">Vuelo</span>
          </h2>
          <p className="text-muted-foreground">
            Descubrí lo que se siente volar sobre las montañas tucumanas
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="relative min-w-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                      <h3 className="font-outfit text-xl font-bold text-primary-foreground md:text-3xl">
                        {slide.title}
                      </h3>
                      <p className="mt-1 text-sm text-primary-foreground/80 md:text-base">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-background"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesCarousel;
