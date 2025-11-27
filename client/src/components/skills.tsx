import { motion } from "framer-motion";
import { Code, Database, LineChart, Brain } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: <LineChart className="w-6 h-6 text-primary" />,
      skills: ["Power BI", "Excel (Pivot Tables)", "Data Visualization", "Dashboarding"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Python", "C++", "Data Structures", "Clean Coding"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MySQL", "SQL Query Optimization", "Data Modeling", "Schema Design"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: ["Analytical Thinking", "Problem Solving", "Communication", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A robust set of tools and technologies I use to transform raw data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
