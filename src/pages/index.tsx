import { ThemeProvider } from "../components/Theme-Provider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Process from "../components/Process";
import Team from "../components/Team";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Team />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}