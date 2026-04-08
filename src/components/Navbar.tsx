import { Shield } from "lucide-react";

const links = [
  { href: "#riesgos", label: "Riesgos" },
  { href: "#guia", label: "Guía" },
  { href: "#etica", label: "Ética" },
  { href: "#quiz", label: "Test" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-navy/80 backdrop-blur-xl border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-primary-foreground font-bold">
          <Shield className="w-5 h-5 text-cyber-teal" />
          <span className="hidden sm:inline">La Seguridad Online</span>
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
