import { Shield, Users, Palette, PenTool, FileText } from "lucide-react";

const team = [
  { icon: Users, role: "Coordinador/a", desc: "Gestión y planificación del proyecto" },
  { icon: Palette, role: "Diseñador/a", desc: "Diseño visual e interfaz de usuario" },
  { icon: PenTool, role: "Redactor/a", desc: "Contenidos y comunicación" },
  { icon: FileText, role: "Resp. Documentación", desc: "Documentación técnica y recursos" },
];

const FooterSection = () => {
  return (
    <footer className="gradient-hero py-16">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyber-teal mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Nuestro equipo</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">
            CiberGuardianes
          </h2>
          <p className="text-primary-foreground/60 text-sm">
            El equipo detrás de esta guía de seguridad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {team.map((member) => (
            <div key={member.role} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                <member.icon className="w-6 h-6 text-cyber-teal" />
              </div>
              <h4 className="font-bold text-primary-foreground text-sm">{member.role}</h4>
              <p className="text-primary-foreground/50 text-xs mt-1">{member.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} La Seguridad Online — Proyecto educativo de concienciación digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
