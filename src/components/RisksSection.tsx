import { motion } from "framer-motion";
import { Fish, KeyRound, ScanEye, AlertTriangle } from "lucide-react";
import { useState } from "react";

const risks = [
  {
    icon: Fish,
    title: "Phishing",
    description: "Correos o mensajes falsos que imitan empresas legítimas para robar tus datos personales y contraseñas.",
    tips: ["Verifica siempre el remitente", "No hagas clic en enlaces sospechosos", "Ningún banco pide contraseñas por email"],
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: KeyRound,
    title: "Contraseñas débiles",
    description: "Usar '123456' o tu fecha de nacimiento es como dejar la puerta abierta a los ciberdelincuentes.",
    tips: ["Usa al menos 12 caracteres", "Combina mayúsculas, números y símbolos", "Nunca repitas la misma contraseña"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ScanEye,
    title: "Rastreo de datos",
    description: "Empresas y hackers rastrean tu actividad online para crear perfiles, vender información o manipularte.",
    tips: ["Usa navegación privada", "Revisa permisos de apps", "Activa bloqueadores de rastreo"],
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const RisksSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="riesgos" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-destructive mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Conoce los peligros</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Riesgos Digitales
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Haz clic en cada tarjeta para descubrir cómo protegerte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setFlipped(flipped === i ? null : i)}
              className="cursor-pointer group"
            >
              <div className="relative rounded-2xl bg-card shadow-card border border-border p-8 min-h-[280px] flex flex-col transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
                {flipped !== i ? (
                  <>
                    <div className={`w-14 h-14 rounded-xl ${risk.bg} flex items-center justify-center mb-6`}>
                      <risk.icon className={`w-7 h-7 ${risk.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{risk.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{risk.description}</p>
                    <span className="text-xs text-primary font-medium mt-4 group-hover:underline">
                      Toca para ver consejos →
                    </span>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    className="flex flex-col justify-center h-full"
                  >
                    <h4 className="font-bold text-foreground mb-4">Cómo protegerte:</h4>
                    <ul className="space-y-3">
                      {risk.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                    <span className="text-xs text-primary font-medium mt-4">
                      ← Toca para volver
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
