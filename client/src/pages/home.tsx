import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Nav />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-card border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:kadamarya18@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">kadamarya18@gmail.com</span>
                  </a>
                  
                  <a href="tel:+917045407441" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg">+91 7045407441</span>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg">Panvel, Navi Mumbai</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <a 
                    href="https://linkedin.com/in/arya-kadam" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl border border-white/5"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <input type="text" className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <input type="email" className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea rows={4} className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 focus:border-primary/50 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-background border-t border-white/5 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Arya Kadam. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
