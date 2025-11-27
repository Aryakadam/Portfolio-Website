import { motion } from "framer-motion";
import { Database, BarChart3, Layout, Code2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "ERP Management System",
      description: "A comprehensive ERP tool to analyze and visualize business metrics such as sales, revenue, and employee performance.",
      tags: ["Python", "MySQL", "Data Visualization", "Automation"],
      icon: <BarChart3 className="w-10 h-10 text-primary mb-4" />,
      features: [
        "Automated report generation",
        "Real-time data dashboards",
        "Performance tracking metrics"
      ]
    },
    {
      title: "AnyDesk Clone",
      description: "Secure remote-access tool with integrated logging and performance tracking features.",
      tags: ["Python", "Networking", "Security", "Socket"],
      icon: <Layout className="w-10 h-10 text-primary mb-4" />,
      features: [
        "Secure remote connection",
        "Performance monitoring logs",
        "Real-time screen sharing"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all duration-300 group">
                <CardHeader>
                  <div className="bg-primary/10 w-fit p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono bg-secondary/50 hover:bg-secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
