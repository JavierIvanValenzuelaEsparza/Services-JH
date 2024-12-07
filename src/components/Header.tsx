import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [theme, setTheme] = useState('light')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const menuItems = ['Servicios', 'Proceso', 'Equipo', 'Proyectos', 'Contacto']

    return (
        <motion.div
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        JH Software Solutions
                    </motion.div>
                    <div className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item) => (
                            <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link href={`#${item.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors">
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                            onClick={toggleTheme}
                        >
                            <Sun className={`h-5 w-5 transition-transform ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                            <Moon className={`h-5 w-5 transition-transform absolute ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-background/95 backdrop-blur-md"
                    >
                        <div className="container mx-auto px-6 py-4">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="py-2"
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <button
                                className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                                onClick={() => {
                                    toggleTheme()
                                    setIsMenuOpen(false)
                                }}
                            >
                                {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}