import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      toast.error("Por favor completá todos los campos obligatorios.");
      return;
    }
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-orbitron text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-gradient-sky">Contacto</span>
          </h2>
          <p className="text-muted-foreground">
            ¿Querés volar? Escribinos y te contamos todo
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card space-y-5 rounded-2xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Nombre *</label>
              <Input
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                maxLength={100}
                className="rounded-lg bg-background"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                maxLength={255}
                className="rounded-lg bg-background"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Teléfono</label>
            <Input
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              placeholder="+54 381 ..."
              maxLength={20}
              className="rounded-lg bg-background"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Mensaje *</label>
            <Textarea
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              placeholder="Contanos qué te interesa..."
              rows={4}
              maxLength={1000}
              className="rounded-lg bg-background"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-full bg-primary py-6 font-outfit text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
          >
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
