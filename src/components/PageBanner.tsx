import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  variant?: "sophrologie" | "naturopathie" | "tarifs" | "contact" | "about";
  icon?: ReactNode;
}

const variantStyles = {
  sophrologie: {
    gradient: "from-primary via-forest to-primary",
    accent: "bg-primary-foreground/10",
    textColor: "text-primary-foreground",
  },
  naturopathie: {
    gradient: "from-accent via-earth to-accent",
    accent: "bg-accent-foreground/10",
    textColor: "text-accent-foreground",
  },
  tarifs: {
    gradient: "from-gold/20 via-cream to-gold/10",
    accent: "bg-gold/10",
    textColor: "text-foreground",
  },
  contact: {
    gradient: "from-secondary/20 via-cream to-secondary/10",
    accent: "bg-secondary/10",
    textColor: "text-foreground",
  },
  about: {
    gradient: "from-primary/10 via-cream to-accent/10",
    accent: "bg-primary/10",
    textColor: "text-foreground",
  },
};

const PageBanner = ({ title, subtitle, variant = "about", icon }: PageBannerProps) => {
  const styles = variantStyles[variant];
  const isDark = variant === "sophrologie" || variant === "naturopathie";

  return (
    <section className={`relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br ${styles.gradient}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 right-10 w-64 h-64 rounded-full ${isDark ? 'bg-white/5' : 'bg-primary/5'} blur-3xl`} />
        <div className={`absolute bottom-10 left-10 w-80 h-80 organic-blob ${isDark ? 'bg-white/5' : 'bg-accent/5'} blur-3xl`} />
        <div className={`absolute top-1/2 right-1/4 w-48 h-48 organic-shape ${isDark ? 'bg-white/5' : 'bg-gold/5'} blur-2xl`} />
        
        {/* Decorative circles */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full border ${isDark ? 'border-white/10' : 'border-primary/10'}`} />
        <div className={`absolute bottom-20 right-20 w-24 h-24 rounded-full border ${isDark ? 'border-white/10' : 'border-accent/10'}`} />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm mb-8 ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
          <Link 
            to="/" 
            className={`flex items-center gap-1 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary'}`}
          >
            <Home size={14} />
            Accueil
          </Link>
          <ChevronRight size={14} />
          <span className={isDark ? 'text-white' : 'text-foreground'}>{title}</span>
        </nav>

        <div className="flex items-start gap-6">
          {icon && (
            <div className={`hidden md:flex w-16 h-16 rounded-2xl ${styles.accent} items-center justify-center`}>
              {icon}
            </div>
          )}
          <div>
            <h1 className={`text-display ${styles.textColor} mb-4`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-xl max-w-2xl ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
