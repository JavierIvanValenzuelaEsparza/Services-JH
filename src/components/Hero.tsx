'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Impulsamos la Transformación de tus Procesos Internos
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En JH Software Solutions, nos especializamos en entender tus necesidades y optimizar los procesos internos de tu negocio para alcanzar la máxima eficiencia.
        </motion.p>
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contacto" className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Comienza tu transformación <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#servicios" className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            Conoce más
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-8 w-8" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}