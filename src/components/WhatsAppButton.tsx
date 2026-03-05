import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5493814000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="whatsapp-float"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden font-outfit text-sm font-semibold sm:inline">Consultanos ahora</span>
    </motion.a>
  );
};

export default WhatsAppButton;
