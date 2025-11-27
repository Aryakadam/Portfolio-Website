import { motion } from "framer-motion";
import { Building2, Calendar, ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Eratronics Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Dec 2024 – Present",
      description: "Automating data pipelines and building reporting tools for network performance monitoring.",
      achievements: [
        "Reduced manual tracking time by 45% by building automated Python scripts.",
        "Optimized SQL queries for log data processing, enabling real-time insights.",
        "Collaborated with the engineering team to ensure data integrity across systems."
      ],
      tech: ["Python", "SQL", "Data Pipelines", "Automation"]
    },
    {
      company: "Bhabha Atomic Research Centre (BARC)",
      role: "Project Trainee",
      period: "Jan 2024 – June 2024",
      description: "Developed a Flask-based web tool for monitoring oscilloscope data and system activity.",
      achievements: [
        "Improved data collection efficiency by 35% with a custom web interface.",
        "Designed a modular architecture to ensure scalability and easy maintenance.",
        "Visualized system usage patterns using Power BI to drive resource allocation decisions."
      ],
      tech: ["Python", "Flask", "Power BI", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Briefcase className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground mt-1">My professional journey in data & engineering.</p>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Line */}
          <div className="absolute left-[28px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 group"
              >
                {/* Timeline Node (Desktop) */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-white/10 flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500 z-10 relative">
                    <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content Card */}
                <Card className="bg-card/40 backdrop-blur-md border-white/5 hover:border-primary/20 transition-all duration-300 overflow-hidden group-hover:bg-card/60">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Building2 className="w-24 h-24" />
                  </div>
                  
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit h-fit py-1.5 px-4 font-mono text-sm border-primary/20 bg-primary/5 text-primary">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors shrink-0" />
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors border-transparent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
