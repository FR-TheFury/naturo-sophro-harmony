import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Gaïa Sensoria" 
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-heading text-xl font-semibold">
                Gaïa Sensoria
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Accompagnement holistique en sophrologie et naturopathie 
              pour retrouver équilibre et bien-être au quotidien.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf size={18} />
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/sophrologie" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sophrologie
                </Link>
              </li>
              <li>
                <Link to="/naturopathie" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Naturopathie
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf size={18} />
              Services
            </h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Séances de sophrologie</li>
              <li>Consultations naturopathie</li>
              <li>Rééquilibrage alimentaire</li>
              <li>Accompagnement bien-être</li>
              <li>Séances à domicile</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf size={18} />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={16} />
                <a href="tel:0677837716" className="hover:text-primary-foreground transition-colors">
                  06 77 83 77 16
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={16} />
                <a href="mailto:contact@gaiasensoria.fr" className="hover:text-primary-foreground transition-colors">
                  contact@gaiasensoria.fr
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Interventions à domicile<br />et en entreprise</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Gaïa Sensoria - Cécilia Decottignies. Tous droits réservés.
            </p>
            <p>
              Sophrologue & Naturopathe certifiée
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
