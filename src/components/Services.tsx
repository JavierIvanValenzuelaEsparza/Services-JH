'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe } from 'lucide-react'

const services = [
  {
    title: "Automatización de Procesos",
    description: "Optimiza los flujos de trabajo mediante automatización inteligente, liberando tiempo y recursos para tareas más estratégicas.",
    icon: Code,
  },
  {
    title: "Optimización de Base de Datos",
    description: "Aumentamos la velocidad y eficiencia de tus sistemas de información, con soluciones avanzadas en PostgreSQL y MongoDB.",
    icon: Database,
  },
  {
    title: "Desarrollo Web Personalizado",
    description: "Diseñamos y desarrollamos aplicaciones web que se ajustan a tus necesidades específicas utilizando tecnologías de vanguardia.",
    icon: Globe,
  },
]

function CustomCard({ title, description, Icon }) {
  return (
    <div className="h-full p-6 bg-black text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-secondary/10">
      <div className="container mx-auto container-padding">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CustomCard 
                title={service.title} 
                description={service.description} 
                Icon={service.icon} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}