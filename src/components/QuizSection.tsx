import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    q: "¿Con qué frecuencia cambias tus contraseñas?",
    options: [
      { text: "Cada 3 meses o menos", score: 3 },
      { text: "Una vez al año", score: 2 },
      { text: "Nunca las cambio", score: 0 },
    ],
  },
  {
    q: "¿Tienes activada la verificación en dos pasos?",
    options: [
      { text: "Sí, en todas mis cuentas", score: 3 },
      { text: "Solo en algunas cuentas", score: 2 },
      { text: "No sé qué es eso", score: 0 },
    ],
  },
  {
    q: "¿Qué haces cuando recibes un enlace sospechoso?",
    options: [
      { text: "Lo ignoro y lo reporto", score: 3 },
      { text: "Lo abro solo si parece real", score: 1 },
      { text: "Hago clic para ver qué es", score: 0 },
    ],
  },
];

const getResult = (score: number) => {
  if (score >= 7) return {
    title: "🛡️ ¡CiberGuardián Experto!",
    desc: "Tus hábitos digitales son excelentes. Sigue así y ayuda a otros a mejorar los suyos.",
    color: "text-accent",
  };
  if (score >= 4) return {
    title: "⚠️ En camino, pero puedes mejorar",
    desc: "Tienes buena base, pero activa 2FA en todas tus cuentas y revisa tus contraseñas regularmente.",
    color: "text-primary",
  };
  return {
    title: "🚨 ¡Alerta! Necesitas actuar ya",
    desc: "Tus hábitos te ponen en riesgo. Empieza hoy: cambia contraseñas, activa 2FA y desconfía de enlaces desconocidos.",
    color: "text-destructive",
  };
};

const QuizSection = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);

  return (
    <section id="quiz" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <ClipboardCheck className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Test rápido</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cuán seguro eres online?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Responde 3 preguntas y descubre tu nivel de protección digital
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  {/* Progress */}
                  <div className="flex gap-2 mb-8">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          i <= current ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mb-2">
                    Pregunta {current + 1} de {questions.length}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    {questions[current].q}
                  </h3>

                  <div className="space-y-3">
                    {questions[current].options.map((opt) => (
                      <button
                        key={opt.text}
                        onClick={() => handleAnswer(opt.score)}
                        className="w-full text-left p-4 rounded-xl border border-border bg-muted/30 hover:bg-primary/5 hover:border-primary/30 transition-all text-sm text-foreground"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">{result.title.slice(0, 2)}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${result.color}`}>
                    {result.title.slice(2)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Puntuación: {totalScore}/{questions.length * 3}
                  </p>
                  <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                    {result.desc}
                  </p>
                  <Button onClick={reset} variant="outline" className="gap-2 rounded-xl">
                    <RotateCcw className="w-4 h-4" />
                    Repetir test
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
