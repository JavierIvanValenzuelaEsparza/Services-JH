'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: "1",
    title: "Escuchamos y analizamos tus necesidades",
    description: "Nos reunimos contigo para entender tus objetivos y desafíos.",
  },
  {
    number: "2",
    title: "Identificamos áreas de mejora",
    description: "Realizamos un análisis detallado para detectar oportunidades de optimización.",
  },
  {
    number: "3",
    title: "Desarrollamos soluciones personalizadas",
    description: "Creamos estrategias y soluciones a medida para tu negocio.",
  },
  {
    number: "4",
    title: "Implementación y seguimiento",
    description: "Ejecutamos las soluciones y monitoreamos su efectividad continuamente.",
  },
]

function CustomCard({ number, title, description }) {
  return (
    <div className="h-full p-6 bg-black text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro Proceso
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CustomCard 
                number={step.number} 
                title={step.title} 
                description={step.description} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}