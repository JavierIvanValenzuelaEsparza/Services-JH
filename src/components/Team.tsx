'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: "Jorge Padilla",
    role: "Devops/Backend",
    image: "/team/jorge-padilla.jpg",
  },
  {
    name: "Howard Garcia",
    role: "Backend/Frontend",
    image: "/team/howard-garcia.jpg",
  },
  {
    name: "Héctor Zamorano",
    role: "Frontend",
    image: "/team/hector-zamorano.jpg",
  },
  {
    name: "Javier Esparza",
    role: "Backend/Frontend",
    image: "/team/javier-esparza.jpg",
  },
]

function CustomCard({ name, role, image }) {
  return (
    <div className="h-full p-6 bg-black text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-muted-foreground text-center">{role}</p>
    </div>
  )
}

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro Equipo
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CustomCard 
                name={member.name} 
                role={member.role} 
                image={member.image} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}