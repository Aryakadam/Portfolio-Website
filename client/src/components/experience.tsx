import { motion } from "framer-motion";
import { Building2, Calendar, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Eratronics Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Dec 2024 – Present",
      description: "Developed automated data pipelines and reporting tools to monitor network performance.",
      achievements: [
        "Reduced manual tracking time by 45% through automation.",
        "Optimized log data processing using Python and SQL.",
        "Collaborated with software team to ensure data accuracy and integrity."
      ]
    },
    {
      company: "Bhabha Atomic Research Centre (BARC)",
      role: "Project Trainee",
      period: "Jan 2024 – June 2024",
      description: "Built a Flask-based web tool for monitoring oscilloscope data and system activity.",
      achievements: [
        "Improved data collection efficiency by 35%.",
        "Ensured scalability through modular architecture.",
        "Analyzed system usage patterns to improve resource allocation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(20,184,166,0.2)] z-10">
                <Building2 className="w-4 h-4 text-primary" />
              </div>

              {/* Card */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" className="w-fit font-mono text-primary border-primary/20 bg-primary/5">
                      {exp.period}
                    </Badge>
                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                  </div>
                  <div className="text-lg font-medium text-muted-foreground">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
