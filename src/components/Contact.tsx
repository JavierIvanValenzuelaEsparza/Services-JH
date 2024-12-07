import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo para transformar tu negocio?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contáctanos hoy y descubre cómo podemos optimizar tus procesos internos.
        </motion.p>
        <motion.button 
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicita una consulta gratuita
        </motion.button>
      </div>
    </section>
  )
}

