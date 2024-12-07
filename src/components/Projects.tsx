'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    name: "Smart Pipes",
    description: "Sistema de monitoreo y control de tuberías inteligentes para la industria del petróleo y gas.",
    image: "/projects/smart-pipes.jpg",
  },
  {
    name: "EcoTrack",
    description: "Plataforma de seguimiento y análisis de sostenibilidad para empresas comprometidas con el medio ambiente.",
    image: "/projects/eco-track.jpg",
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proyectos Realizados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

