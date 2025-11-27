import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_geometric_data_visualization_background_in_dark_blue_and_teal.png";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono mb-8 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <Terminal size={14} />
            <span className="text-xs md:text-sm tracking-wider font-bold">DATA ANALYST & ENGINEER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Transforming raw data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-blue-400 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">meaningful insights.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            I'm Arya Kadam, an Electronics & Telecom graduate passionate about building automated pipelines, visualizing complex datasets, and driving data-driven decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full flex items-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] transition-all duration-300"
            >
              View Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              className="px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground font-bold text-lg rounded-full flex items-center gap-2 hover:bg-card hover:border-primary/30 transition-all border border-white/10"
              onClick={() => window.open("/assets/resume.pdf", "_blank")}
            >
              Download Resume
              <Download size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
