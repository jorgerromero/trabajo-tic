import { motion } from "framer-motion";
import { KeyRound, ShieldCheck, HardDrive, Check, Copy, RefreshCw, Smartphone, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const passwordTips = [
  { rule: "Mínimo 12 caracteres", example: "CuantoMásLargo_Mejor!" },
  { rule: "Mezcla mayúsculas y minúsculas", example: "MiClave ≠ miclave" },
  { rule: "Incluye números y símbolos", example: "S3gur1d@d_2024!" },
  { rule: "Evita datos personales", example: "Nada de nombres ni fechas" },
  { rule: "Usa frases fáciles de recordar", example: "MiGato#Come3Veces!" },
];

const GuideSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, i: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const tabs = [
    {
      icon: KeyRound,
      label: "Contraseñas",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm mb-6">
            Una contraseña fuerte es tu primera línea de defensa. Sigue estas reglas:
          </p>
          {passwordTips.map((tip, i) => (
            <motion.div
              key={tip.rule}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between rounded-xl bg-muted/50 p-4 border border-border"
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-sm text-foreground">{tip.rule}</div>
                  <div className="text-xs text-muted-foreground mt-1">Ej: {tip.example}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(tip.example, i)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {copiedIndex === i ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      icon: ShieldCheck,
      label: "Doble Verificación",
      content: (
        <div>
          <p className="text-muted-foreground text-sm mb-8">
            La autenticación en dos pasos (2FA) añade una capa extra de seguridad a tus cuentas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Lock, step: "1", title: "Tu contraseña", desc: "Introduces tu clave habitual" },
              { icon: Smartphone, step: "2", title: "Código temporal", desc: "Recibes un código único en tu móvil" },
              { icon: ShieldCheck, step: "3", title: "Acceso seguro", desc: "Solo tú puedes entrar a tu cuenta" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-6 rounded-xl bg-muted/50 border border-border"
              >
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-accent mb-2">PASO {s.step}</div>
                <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm text-foreground">
              <strong>Apps recomendadas:</strong> Google Authenticator, Authy o Microsoft Authenticator.
              Evita usar SMS como único método de 2FA.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: HardDrive,
      label: "Cifrado y Backups",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground text-sm mb-6">
            Proteger tus archivos y tener copias de seguridad evita pérdidas irreparables.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <Lock className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-foreground mb-2">Cifrado</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Activa el cifrado de disco (BitLocker/FileVault)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Usa HTTPS siempre que navegues</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Cifra documentos sensibles con 7-Zip o VeraCrypt</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <RefreshCw className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-bold text-foreground mb-2">Copias de Seguridad</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Regla 3-2-1: 3 copias, 2 medios, 1 fuera de casa</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Automatiza tus backups semanales</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Usa la nube + un disco externo</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="guia" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Centro de Control
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Herramientas y consejos prácticos para blindar tu vida digital
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-8 justify-center flex-wrap">
            {tabs.map((tab, i) => (
              <Button
                key={tab.label}
                variant={activeTab === i ? "default" : "outline"}
                onClick={() => setActiveTab(i)}
                className="gap-2 rounded-xl"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl shadow-card border border-border p-8"
          >
            {tabs[activeTab].content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
