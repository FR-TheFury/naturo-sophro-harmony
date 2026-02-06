import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Sophrologie", href: "/sophrologie" },
  { name: "Naturopathie", href: "/naturopathie" },
  { name: "À propos", href: "/a-propos" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-organic py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Gaïa Sensoria - Sophrologie et Naturopathie" 
              className={`transition-all duration-300 ${isScrolled ? "h-10 sm:h-12" : "h-10 sm:h-12 md:h-14"} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-full ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="#rdv"
              className="ml-4 btn-primary text-sm flex items-center gap-2 py-3 px-6"
            >
              <Sparkles size={16} />
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-foreground rounded-full bg-background/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-muted"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-organic animate-fade-in">
            <div className="container-custom mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative px-4 py-3 font-medium rounded-2xl transition-all duration-300 animate-fade-in-up ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="flex items-center gap-3">
                      {isActive(item.href) && (
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-gold-light" />
                      )}
                      {item.name}
                    </span>
                  </Link>
                ))}
                <a
                  href="#rdv"
                  className="btn-primary text-center mt-4 flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles size={18} />
                  Prendre RDV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
