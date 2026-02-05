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
    <div className={`fixed left-0 top-0 bottom-0 w-44 md:w-52 lg:w-60 pointer-events-none z-40 ${className}`}>
      <svg
        viewBox="0 0 200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Définitions pour les textures et dégradés */}
        <defs>
          {/* Dégradé principal du tronc - effet 3D */}
          <linearGradient id="trunkMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 35%, 15%)"/>
            <stop offset="20%" stopColor="hsl(25, 40%, 22%)"/>
            <stop offset="40%" stopColor="hsl(25, 45%, 28%)"/>
            <stop offset="60%" stopColor="hsl(25, 45%, 26%)"/>
            <stop offset="80%" stopColor="hsl(25, 40%, 20%)"/>
            <stop offset="100%" stopColor="hsl(25, 35%, 12%)"/>
          </linearGradient>

          {/* Dégradé pour les branches principales */}
          <linearGradient id="branchMain" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="hsl(25, 45%, 25%)"/>
            <stop offset="50%" stopColor="hsl(25, 42%, 32%)"/>
            <stop offset="100%" stopColor="hsl(25, 38%, 35%)"/>
          </linearGradient>

          {/* Dégradé pour les racines */}
          <linearGradient id="rootGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(25, 45%, 25%)"/>
            <stop offset="100%" stopColor="hsl(25, 35%, 18%)"/>
          </linearGradient>

          {/* Filtre pour texture naturelle */}
          <filter id="roughness" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>

        {/* ===== TRONC PRINCIPAL - TRÈS ÉPAIS ===== */}
        {/* Forme de base du tronc - 70px de large avec courbes naturelles */}
        <path
          d="M100 -30
             C 85 20, 120 50, 95 100
             C 70 150, 130 180, 100 230
             C 70 280, 125 320, 95 370
             C 65 420, 135 460, 105 510
             C 75 560, 130 600, 95 650
             C 60 700, 140 740, 100 790
             C 60 840, 135 880, 95 930
             C 55 980, 140 1020, 100 1070
             C 65 1120, 130 1150, 100 1180
             L 100 1220
             L 140 1220
             L 140 1180
             C 165 1150, 130 1120, 155 1070
             C 180 1020, 120 980, 155 930
             C 190 880, 115 840, 155 790
             C 195 740, 105 700, 160 650
             C 195 600, 125 560, 160 510
             C 195 460, 115 420, 160 370
             C 195 320, 120 280, 165 230
             C 190 180, 125 150, 165 100
             C 185 50, 130 20, 160 -30
             Z"
          fill="url(#trunkMain)"
          className="tree-trunk-main"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.2s ease-out",
          }}
        />

        {/* Ombre interne gauche pour effet 3D */}
        <path
          d="M100 -30
             C 85 20, 120 50, 95 100
             C 70 150, 130 180, 100 230
             C 70 280, 125 320, 95 370
             C 65 420, 135 460, 105 510
             C 75 560, 130 600, 95 650
             C 60 700, 140 740, 100 790
             C 60 840, 135 880, 95 930
             C 55 980, 140 1020, 100 1070
             C 65 1120, 130 1150, 100 1180
             L 100 1220
             L 115 1220
             L 115 1180
             C 125 1150, 95 1120, 115 1070
             C 130 1020, 85 980, 115 930
             C 145 880, 80 840, 115 790
             C 150 740, 70 700, 120 650
             C 150 600, 90 560, 120 510
             C 150 460, 80 420, 120 370
             C 155 320, 85 280, 125 230
             C 145 180, 90 150, 125 100
             C 145 50, 95 20, 120 -30
             Z"
          fill="hsl(25, 30%, 10%)"
          opacity="0.35"
          style={{
            opacity: isVisible ? 0.35 : 0,
            transition: "opacity 1.2s ease-out 0.2s",
          }}
        />

        {/* ===== TEXTURE ÉCORCE - FISSURES PROFONDES ===== */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.5s ease-out 0.5s",
          }}
        >
          {/* Fissures verticales principales */}
          <path d="M105 30 Q100 80, 110 130 Q120 180, 100 230 Q90 280, 105 330" 
                stroke="hsl(25, 25%, 12%)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M135 50 Q130 100, 140 150 Q150 200, 130 250 Q120 300, 140 350" 
                stroke="hsl(25, 25%, 14%)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
          <path d="M120 380 Q115 430, 125 480 Q135 530, 115 580 Q105 630, 125 680" 
                stroke="hsl(25, 25%, 12%)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M145 400 Q140 450, 150 500 Q160 550, 140 600 Q130 650, 150 700" 
                stroke="hsl(25, 25%, 15%)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55"/>
          <path d="M110 720 Q105 770, 115 820 Q125 870, 105 920 Q95 970, 115 1020" 
                stroke="hsl(25, 25%, 12%)" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.65"/>
          <path d="M140 750 Q135 800, 145 850 Q155 900, 135 950 Q125 1000, 145 1050" 
                stroke="hsl(25, 25%, 14%)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.6"/>
          
          {/* Fissures secondaires */}
          <path d="M115 100 Q108 120, 115 140" stroke="hsl(25, 20%, 16%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M128 200 Q122 220, 130 240" stroke="hsl(25, 20%, 16%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M112 500 Q106 520, 114 540" stroke="hsl(25, 20%, 16%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M138 600 Q132 620, 140 640" stroke="hsl(25, 20%, 16%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M118 850 Q112 870, 120 890" stroke="hsl(25, 20%, 16%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          
          {/* Nœuds du bois - gros et visibles */}
          <ellipse cx="120" cy="180" rx="10" ry="14" fill="hsl(25, 30%, 15%)" opacity="0.6"/>
          <ellipse cx="125" cy="180" rx="5" ry="8" fill="hsl(25, 25%, 12%)" opacity="0.4"/>
          
          <ellipse cx="115" cy="450" rx="12" ry="16" fill="hsl(25, 30%, 15%)" opacity="0.55"/>
          <ellipse cx="120" cy="450" rx="6" ry="9" fill="hsl(25, 25%, 12%)" opacity="0.4"/>
          
          <ellipse cx="130" cy="720" rx="11" ry="15" fill="hsl(25, 30%, 15%)" opacity="0.6"/>
          <ellipse cx="134" cy="720" rx="5" ry="8" fill="hsl(25, 25%, 12%)" opacity="0.4"/>
          
          <ellipse cx="118" cy="980" rx="9" ry="13" fill="hsl(25, 30%, 15%)" opacity="0.55"/>
          <ellipse cx="122" cy="980" rx="4" ry="7" fill="hsl(25, 25%, 12%)" opacity="0.4"/>
        </g>

        {/* ===== BRANCHES PRINCIPALES QUI SORTENT DU TRONC ===== */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.8s ease-out 1s",
          }}
        >
          {/* Branche 1 - haute */}
          <path
            d="M155 150 
               C 175 145, 190 155, 200 150"
            stroke="url(#branchMain)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M155 150 C 175 145, 190 155, 200 150"
            stroke="hsl(25, 25%, 18%)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Branche 2 - milieu-haut */}
          <path
            d="M160 350 
               C 180 340, 195 355, 200 345"
            stroke="url(#branchMain)"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />

          {/* Branche 3 - milieu */}
          <path
            d="M155 550 
               C 175 545, 195 560, 200 555"
            stroke="url(#branchMain)"
            strokeWidth="17"
            fill="none"
            strokeLinecap="round"
          />

          {/* Branche 4 - milieu-bas */}
          <path
            d="M160 750 
               C 178 742, 192 755, 200 748"
            stroke="url(#branchMain)"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />

          {/* Branche 5 - basse */}
          <path
            d="M155 950 
               C 175 945, 190 958, 200 952"
            stroke="url(#branchMain)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* ===== RACINES IMPOSANTES ===== */}
        <g
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease-out 1.5s",
          }}
        >
          {/* Grande racine gauche principale */}
          <path
            d="M95 1150 
               C 60 1165, 30 1175, 0 1190"
            stroke="url(#rootGradient)"
            strokeWidth="28"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M90 1160 
               C 55 1175, 25 1190, -10 1210"
            stroke="hsl(25, 40%, 22%)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M85 1170 
               C 60 1185, 35 1200, 10 1220"
            stroke="hsl(25, 38%, 25%)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />

          {/* Grande racine droite principale */}
          <path
            d="M145 1150 
               C 175 1165, 200 1178, 220 1195"
            stroke="url(#rootGradient)"
            strokeWidth="25"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 1165 
               C 180 1180, 205 1195, 225 1215"
            stroke="hsl(25, 40%, 22%)"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M155 1175 
               C 185 1190, 210 1205, 230 1220"
            stroke="hsl(25, 38%, 25%)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />

          {/* Racines secondaires */}
          <path
            d="M105 1170 Q 85 1185, 70 1200 Q 55 1210, 40 1220"
            stroke="hsl(25, 42%, 24%)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M135 1175 Q 155 1190, 170 1205 Q 185 1215, 195 1220"
            stroke="hsl(25, 42%, 24%)"
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          />

          {/* Petites racines */}
          <path d="M100 1185 Q 90 1200, 80 1220" stroke="hsl(25, 38%, 28%)" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M115 1188 Q 110 1205, 105 1220" stroke="hsl(25, 38%, 28%)" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <path d="M130 1185 Q 140 1200, 150 1220" stroke="hsl(25, 38%, 28%)" strokeWidth="8" fill="none" strokeLinecap="round"/>
        </g>


        {/* ===== REFLETS LUMINEUX ===== */}
        <g
          style={{
            opacity: isVisible ? 0.15 : 0,
            transition: "opacity 2s ease-out 1s",
          }}
        >
          <path
            d="M145 50 Q150 100, 145 150 Q140 200, 148 250"
            stroke="hsl(40, 30%, 60%)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M150 400 Q155 450, 148 500 Q142 550, 152 600"
            stroke="hsl(40, 30%, 60%)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.25"
          />
          <path
            d="M148 750 Q153 800, 146 850 Q140 900, 150 950"
            stroke="hsl(40, 30%, 60%)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.28"
          />
        </g>
      </svg>

      {/* Gradient overlay for fade effect at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent" />
    </div>
  );
};

export default TreeOfLife;
