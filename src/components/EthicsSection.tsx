import { motion } from "framer-motion";
import { Heart, Users, Brain, Globe } from "lucide-react";

const topics = [
  {
    icon: Users,
    title: "Privacidad en Redes Sociales",
    points: [
      "Configura tu perfil como privado",
      "Piensa antes de publicar: Internet no olvida",
      "No compartas ubicación en tiempo real",
      "Revisa qué apps tienen acceso a tus cuentas",
    ],
  },
  {
    icon: Brain,
    title: "IA y Ética Digital",
    points: [
      "Cuestiona la información generada por IA",
      "No uses IA para crear desinformación",
      "Respeta la propiedad intelectual",
      "Sé transparente cuando uses contenido generado",
    ],
  },
  {
    icon: Heart,
    title: "Uso Responsable",
    points: [
      "Establece límites de tiempo de pantalla",
      "No compartas datos de otros sin permiso",
      "Denuncia el ciberacoso",
      "Fomenta un entorno digital positivo",
    ],
  },
];

const EthicsSection = () => {
  return (
    <section id="etica" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Reflexión</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ética Digital
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            La tecnología es una herramienta poderosa. Usarla bien es nuestra responsabilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl shadow-card border border-border p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <topic.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">{topic.title}</h3>
              <ul className="space-y-3">
                {topic.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
