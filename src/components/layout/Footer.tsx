import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-1/2">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 50C360 20 720 80 1080 50C1260 35 1380 45 1440 50V100H0V50Z" fill="hsl(var(--primary))"/>
        </svg>
      </div>

      <div className="bg-gradient-forest pt-16 pb-8">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 organic-blob bg-primary-foreground/5 blur-3xl" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
                <img 
                  src={logo} 
                  alt="Gaïa Sensoria" 
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Accompagnement holistique en sophrologie et naturopathie 
                pour retrouver équilibre et bien-être au quotidien.
              </p>
              <a 
                href="#rdv" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/20 hover:gap-3"
              >
                <Sparkles size={16} />
                Prendre RDV
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-primary-foreground flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Accueil", href: "/" },
                  { name: "Sophrologie", href: "/sophrologie" },
                  { name: "Naturopathie", href: "/naturopathie" },
                  { name: "Tarifs", href: "/tarifs" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gold-light rounded-full transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-primary-foreground flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                Services
              </h3>
              <ul className="space-y-3 text-primary-foreground/70">
                {[
                  "Séances de sophrologie",
                  "Consultations naturopathie",
                  "Rééquilibrage alimentaire",
                  "Accompagnement bien-être",
                  "Séances à domicile"
                ].map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <Leaf size={12} className="text-gold-light" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6 text-primary-foreground flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold rounded-full" />
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:0677837716" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Phone size={18} />
                    </span>
                    06 77 83 77 16
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@gaiasensoria.fr" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Mail size={18} />
                    </span>
                    contact@gaiasensoria.fr
                  </a>
                </li>
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <span className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </span>
                  <span className="pt-2">Interventions à domicile<br />et en entreprise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
              <p>
                © {new Date().getFullYear()} Gaïa Sensoria - Cécilia Decottignies. Tous droits réservés.
              </p>
              <p className="flex items-center gap-2">
                <Leaf size={14} className="text-gold-light" />
                Sophrologue & Naturopathe certifiée
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
