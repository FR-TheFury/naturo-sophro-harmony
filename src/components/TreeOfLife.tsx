import { useEffect, useState } from "react";

interface TreeOfLifeProps {
  className?: string;
}

const TreeOfLife = ({ className = "" }: TreeOfLifeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed left-0 top-0 bottom-0 w-24 md:w-28 lg:w-32 pointer-events-none z-40 ${className}`}>
      <svg
        viewBox="0 0 120 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Définitions pour les textures et dégradés */}
        <defs>
          {/* Texture écorce */}
          <pattern id="barkPattern" patternUnits="userSpaceOnUse" width="20" height="40">
            <rect width="20" height="40" fill="hsl(25, 45%, 25%)"/>
            <path d="M0 5 Q5 8, 10 5 T20 5" stroke="hsl(25, 35%, 18%)" strokeWidth="1" fill="none"/>
            <path d="M0 15 Q7 18, 14 14 T20 16" stroke="hsl(25, 35%, 20%)" strokeWidth="0.8" fill="none"/>
            <path d="M0 25 Q4 27, 8 24 T16 26 T20 24" stroke="hsl(25, 40%, 18%)" strokeWidth="1.2" fill="none"/>
            <path d="M0 35 Q6 38, 12 34 T20 36" stroke="hsl(25, 35%, 22%)" strokeWidth="0.6" fill="none"/>
            <circle cx="3" cy="10" r="1" fill="hsl(25, 30%, 20%)" opacity="0.5"/>
            <circle cx="15" cy="22" r="0.8" fill="hsl(25, 30%, 20%)" opacity="0.4"/>
            <circle cx="8" cy="32" r="1.2" fill="hsl(25, 30%, 18%)" opacity="0.3"/>
          </pattern>
          
          {/* Dégradé pour l'ombre du tronc */}
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 40%, 20%)"/>
            <stop offset="30%" stopColor="hsl(25, 45%, 28%)"/>
            <stop offset="70%" stopColor="hsl(25, 45%, 25%)"/>
            <stop offset="100%" stopColor="hsl(25, 35%, 18%)"/>
          </linearGradient>

          {/* Dégradé pour les branches */}
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 40%, 25%)"/>
            <stop offset="100%" stopColor="hsl(25, 35%, 30%)"/>
          </linearGradient>

          {/* Filtre pour l'effet bois */}
          <filter id="woodTexture" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>

        {/* Tronc principal - forme épaisse avec texture bois */}
        <path
          d="M60 -20 
             C 55 30, 68 60, 58 100 
             C 48 140, 70 180, 62 220 
             C 54 260, 68 300, 56 340 
             C 44 380, 72 420, 60 460 
             C 48 500, 70 540, 58 580 
             C 46 620, 68 660, 55 700 
             C 42 740, 72 780, 58 820 
             C 44 860, 68 900, 56 940 
             C 44 980, 70 1020, 58 1060 
             C 46 1100, 65 1140, 55 1180 
             L 55 1220
             L 75 1220
             L 75 1180
             C 85 1140, 66 1100, 78 1060
             C 90 1020, 64 980, 76 940
             C 88 900, 64 860, 78 820
             C 92 780, 62 740, 75 700
             C 88 660, 66 620, 78 580
             C 90 540, 68 500, 80 460
             C 92 420, 64 380, 76 340
             C 88 300, 66 260, 78 220
             C 90 180, 68 140, 82 100
             C 96 60, 72 30, 80 -20
             Z"
          fill="url(#trunkGradient)"
          className="tree-trunk-shape"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease-out",
          }}
        />

        {/* Lignes de texture écorce sur le tronc */}
        <g
          style={{
            opacity: isVisible ? 0.6 : 0,
            transition: "opacity 1.5s ease-out 0.5s",
          }}
        >
          {/* Lignes verticales d'écorce */}
          <path d="M58 50 Q60 100, 56 150 Q54 200, 60 250" stroke="hsl(25, 30%, 18%)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M72 80 Q70 130, 74 180 Q76 230, 70 280" stroke="hsl(25, 25%, 20%)" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M56 300 Q58 350, 54 400 Q52 450, 58 500" stroke="hsl(25, 30%, 18%)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M74 350 Q72 400, 76 450 Q78 500, 72 550" stroke="hsl(25, 25%, 22%)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
          <path d="M54 550 Q58 600, 52 650 Q50 700, 56 750" stroke="hsl(25, 30%, 18%)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          <path d="M76 600 Q74 650, 78 700 Q80 750, 74 800" stroke="hsl(25, 25%, 20%)" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M52 800 Q56 850, 50 900 Q48 950, 54 1000" stroke="hsl(25, 30%, 18%)" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
          <path d="M78 850 Q76 900, 80 950 Q82 1000, 76 1050" stroke="hsl(25, 25%, 22%)" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          
          {/* Nœuds du bois */}
          <ellipse cx="65" cy="180" rx="4" ry="6" fill="hsl(25, 35%, 18%)" opacity="0.5"/>
          <ellipse cx="58" cy="420" rx="3" ry="5" fill="hsl(25, 35%, 16%)" opacity="0.4"/>
          <ellipse cx="72" cy="650" rx="4" ry="7" fill="hsl(25, 30%, 18%)" opacity="0.45"/>
          <ellipse cx="60" cy="890" rx="3" ry="5" fill="hsl(25, 35%, 17%)" opacity="0.4"/>
        </g>

        {/* Ombrage latéral pour donner du volume */}
        <path
          d="M60 -20 
             C 55 30, 68 60, 58 100 
             C 48 140, 70 180, 62 220 
             C 54 260, 68 300, 56 340 
             C 44 380, 72 420, 60 460 
             C 48 500, 70 540, 58 580 
             C 46 620, 68 660, 55 700 
             C 42 740, 72 780, 58 820 
             C 44 860, 68 900, 56 940 
             C 44 980, 70 1020, 58 1060 
             C 46 1100, 65 1140, 55 1180 
             L 55 1220
             L 62 1220
             L 62 1180
             C 68 1140, 58 1100, 62 1060
             C 66 1020, 56 980, 60 940
             C 64 900, 56 860, 62 820
             C 68 780, 54 740, 60 700
             C 66 660, 58 620, 62 580
             C 66 540, 60 500, 64 460
             C 68 420, 56 380, 60 340
             C 64 300, 58 260, 62 220
             C 66 180, 60 140, 66 100
             C 72 60, 64 30, 66 -20
             Z"
          fill="hsl(25, 35%, 15%)"
          opacity="0.3"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transition: "opacity 1s ease-out 0.3s",
          }}
        />

        {/* Racines visibles en bas */}
        <g
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "2s" }}
        >
          {/* Grande racine gauche */}
          <path
            d="M55 1150 
               Q 35 1160, 20 1175 
               Q 8 1188, 0 1200"
            stroke="url(#branchGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 1165 
               Q 38 1175, 28 1188 
               Q 20 1195, 12 1200"
            stroke="hsl(25, 40%, 25%)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Grande racine droite */}
          <path
            d="M75 1150 
               Q 95 1162, 108 1178 
               Q 115 1190, 120 1200"
            stroke="url(#branchGradient)"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M80 1168 
               Q 92 1178, 100 1190 
               Q 106 1196, 110 1200"
            stroke="hsl(25, 40%, 25%)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Petites racines */}
          <path
            d="M58 1175 Q 48 1185, 42 1200"
            stroke="hsl(25, 35%, 28%)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M72 1178 Q 82 1188, 88 1200"
            stroke="hsl(25, 35%, 28%)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Mousse / lichen sur le tronc */}
        <g
          style={{
            opacity: isVisible ? 0.4 : 0,
            transition: "opacity 2s ease-out 1s",
          }}
        >
          <ellipse cx="52" cy="320" rx="6" ry="4" fill="hsl(120, 25%, 35%)"/>
          <ellipse cx="78" cy="520" rx="5" ry="3" fill="hsl(120, 30%, 38%)"/>
          <ellipse cx="48" cy="720" rx="7" ry="4" fill="hsl(120, 25%, 32%)"/>
          <ellipse cx="80" cy="920" rx="5" ry="3" fill="hsl(120, 28%, 36%)"/>
        </g>
      </svg>

      {/* Gradient overlay for fade effect at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent" />
    </div>
  );
};

export default TreeOfLife;
