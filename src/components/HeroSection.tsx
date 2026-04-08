import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToRisks = () => {
    document.getElementById("riesgos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] gradient-hero flex items-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-[15%] opacity-10"
        >
          <Shield className="w-32 h-32 text-primary-foreground" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-32 left-[10%] opacity-10"
        >
          <Lock className="w-24 h-24 text-primary-foreground" />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-40 left-[20%] opacity-10"
        >
          <Eye className="w-20 h-20 text-primary-foreground" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-cyber-teal" />
            <span className="text-sm font-medium text-primary-foreground/80">
              Tu guía de ciberseguridad
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            La Seguridad{" "}
            <span className="text-cyber-teal">Online</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tu identidad digital es tan valiosa como la física. Aprende a protegerla
            con herramientas, consejos y hábitos que marcan la diferencia.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToRisks}
              className="gradient-accent text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-elevated hover:opacity-90 transition-opacity"
            >
              Empezar a protegerme
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "90%", label: "de ciberataques son evitables" },
              { value: "2FA", label: "reduce hackeos un 99%" },
              { value: "8+", label: "caracteres mínimo seguro" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-cyber-teal">{stat.value}</div>
                <div className="text-xs text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
