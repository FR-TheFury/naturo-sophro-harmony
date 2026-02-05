const TreeCanopy = () => {
  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-20 overflow-visible"
      style={{ 
        width: '650px', 
        height: '160px',
      }}
    >
      <svg
        viewBox="0 0 650 160"
        className="w-full h-full"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          {/* Dégradés pour les différentes couches de feuillage */}
          <linearGradient id="canopyGradientBack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(120 25% 18%)" />
            <stop offset="100%" stopColor="hsl(120 20% 22%)" />
          </linearGradient>
          
          <linearGradient id="canopyGradientMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(120 22% 28%)" />
            <stop offset="100%" stopColor="hsl(115 25% 32%)" />
          </linearGradient>
          
          <linearGradient id="canopyGradientFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(100 28% 38%)" />
            <stop offset="100%" stopColor="hsl(110 25% 42%)" />
          </linearGradient>

          <linearGradient id="canopyGradientHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(90 30% 48%)" />
            <stop offset="100%" stopColor="hsl(95 25% 40%)" />
          </linearGradient>

          {/* Dégradé d'opacité horizontal - fondu vers la droite */}
          <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.9" />
            <stop offset="80%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Masque pour le fondu */}
          <mask id="canopyMask">
            <rect x="0" y="0" width="650" height="160" fill="url(#fadeRight)" />
          </mask>

          {/* Filtre pour profondeur sur couche arrière */}
          <filter id="blurBack" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
          
          {/* Ombre subtile */}
          <filter id="canopyShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="hsl(120 30% 10%)" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Conteneur avec masque de fondu */}
        <g mask="url(#canopyMask)">
          
          {/* COUCHE 1 - ARRIÈRE : Feuillage sombre et flou pour la profondeur */}
          <g filter="url(#blurBack)" opacity="0.85">
            {/* Grand cluster arrière gauche */}
            <path
              d="M 80 90 
                 C 60 70, 50 50, 70 30
                 C 90 10, 130 5, 160 15
                 C 190 25, 220 20, 250 30
                 C 280 40, 300 35, 330 45
                 C 360 55, 390 50, 420 60
                 C 450 70, 470 65, 500 75
                 C 520 82, 540 78, 560 85
                 C 540 95, 510 100, 480 95
                 C 450 90, 420 100, 380 95
                 C 340 90, 300 105, 260 98
                 C 220 91, 180 105, 140 95
                 C 100 85, 80 95, 80 90
                 Z"
              fill="url(#canopyGradientBack)"
            />
            
            {/* Extension haute arrière */}
            <path
              d="M 100 50
                 C 85 35, 90 15, 120 10
                 C 150 5, 180 0, 210 8
                 C 240 16, 270 10, 300 18
                 C 330 26, 350 20, 380 28
                 C 360 40, 330 35, 300 42
                 C 270 49, 240 44, 210 50
                 C 180 56, 150 50, 120 55
                 C 100 58, 100 50, 100 50
                 Z"
              fill="hsl(120 22% 20%)"
            />
          </g>

          {/* COUCHE 2 - MÉDIANE : Feuillage principal avec volume */}
          <g filter="url(#canopyShadow)" className="animate-leaf-sway" style={{ transformOrigin: '200px 60px' }}>
            {/* Cluster principal médian */}
            <path
              d="M 90 85
                 C 75 65, 65 45, 85 28
                 C 105 11, 140 8, 175 18
                 C 210 28, 245 22, 280 32
                 C 315 42, 345 38, 380 48
                 C 415 58, 440 55, 475 62
                 C 500 67, 520 64, 545 70
                 C 525 82, 495 88, 460 82
                 C 425 76, 390 90, 350 84
                 C 310 78, 275 92, 235 86
                 C 195 80, 160 94, 125 88
                 C 95 82, 90 85, 90 85
                 Z"
              fill="url(#canopyGradientMid)"
            />

            {/* Bosses de feuillage - ajoutent du volume */}
            <ellipse cx="120" cy="35" rx="35" ry="28" fill="hsl(118 24% 30%)" />
            <ellipse cx="180" cy="28" rx="40" ry="25" fill="hsl(115 22% 32%)" />
            <ellipse cx="250" cy="35" rx="38" ry="26" fill="hsl(120 25% 28%)" />
            <ellipse cx="320" cy="42" rx="35" ry="24" fill="hsl(118 23% 31%)" />
            <ellipse cx="390" cy="52" rx="32" ry="22" fill="hsl(115 24% 33%)" />
            <ellipse cx="455" cy="60" rx="28" ry="20" fill="hsl(120 22% 35%)" />
            <ellipse cx="510" cy="68" rx="24" ry="18" fill="hsl(118 25% 36%)" />
          </g>

          {/* COUCHE 3 - AVANT : Détails et highlights */}
          <g className="animate-leaf-sway" style={{ transformOrigin: '180px 50px', animationDelay: '0.5s' }}>
            {/* Petits clusters de feuilles au premier plan */}
            <path
              d="M 95 70
                 C 85 55, 80 40, 100 30
                 C 120 20, 145 25, 160 35
                 C 175 45, 165 60, 150 70
                 C 135 80, 110 78, 95 70
                 Z"
              fill="url(#canopyGradientFront)"
            />
            
            <path
              d="M 155 55
                 C 145 42, 150 28, 175 22
                 C 200 16, 225 22, 240 35
                 C 255 48, 245 62, 220 68
                 C 195 74, 165 68, 155 55
                 Z"
              fill="url(#canopyGradientHighlight)"
            />
            
            <path
              d="M 230 48
                 C 220 35, 230 22, 260 18
                 C 290 14, 315 22, 330 38
                 C 345 54, 330 68, 300 72
                 C 270 76, 240 62, 230 48
                 Z"
              fill="url(#canopyGradientFront)"
            />

            <path
              d="M 310 55
                 C 300 44, 310 32, 340 28
                 C 370 24, 395 32, 408 46
                 C 421 60, 405 72, 375 75
                 C 345 78, 320 66, 310 55
                 Z"
              fill="hsl(105 28% 40%)"
            />

            <path
              d="M 385 62
                 C 378 52, 388 42, 415 40
                 C 442 38, 462 45, 472 56
                 C 482 67, 468 78, 442 80
                 C 416 82, 392 72, 385 62
                 Z"
              fill="url(#canopyGradientHighlight)"
            />

            <path
              d="M 450 68
                 C 445 60, 455 52, 478 50
                 C 501 48, 518 54, 525 64
                 C 532 74, 520 82, 498 84
                 C 476 86, 455 76, 450 68
                 Z"
              fill="hsl(100 26% 44%)"
            />
          </g>

          {/* COUCHE 4 - DÉTAILS : Petites feuilles individuelles pour texture */}
          <g opacity="0.9" className="animate-leaf-sway" style={{ transformOrigin: '150px 40px', animationDelay: '0.8s' }}>
            {/* Feuilles individuelles sur le dessus pour texture */}
            <ellipse cx="100" cy="25" rx="12" ry="8" fill="hsl(95 32% 45%)" transform="rotate(-15 100 25)" />
            <ellipse cx="135" cy="18" rx="10" ry="7" fill="hsl(100 30% 48%)" transform="rotate(20 135 18)" />
            <ellipse cx="165" cy="22" rx="11" ry="7" fill="hsl(92 28% 42%)" transform="rotate(-10 165 22)" />
            <ellipse cx="200" cy="16" rx="12" ry="8" fill="hsl(98 32% 46%)" transform="rotate(15 200 16)" />
            <ellipse cx="235" cy="20" rx="10" ry="7" fill="hsl(105 28% 44%)" transform="rotate(-25 235 20)" />
            <ellipse cx="275" cy="26" rx="11" ry="7" fill="hsl(95 30% 48%)" transform="rotate(10 275 26)" />
            <ellipse cx="315" cy="32" rx="10" ry="6" fill="hsl(100 28% 45%)" transform="rotate(-20 315 32)" />
            <ellipse cx="355" cy="38" rx="9" ry="6" fill="hsl(92 30% 50%)" transform="rotate(25 355 38)" />
            <ellipse cx="395" cy="45" rx="8" ry="5" fill="hsl(98 28% 48%)" transform="rotate(-15 395 45)" />
            <ellipse cx="435" cy="52" rx="8" ry="5" fill="hsl(100 32% 50%)" transform="rotate(18 435 52)" />
            <ellipse cx="475" cy="58" rx="7" ry="5" fill="hsl(95 30% 52%)" transform="rotate(-12 475 58)" />
            <ellipse cx="510" cy="64" rx="6" ry="4" fill="hsl(100 28% 54%)" transform="rotate(22 510 64)" />
          </g>

          {/* Points de lumière subtils */}
          <g opacity="0.4">
            <circle cx="110" cy="30" r="3" fill="hsl(90 40% 60%)" />
            <circle cx="150" cy="22" r="2.5" fill="hsl(95 35% 58%)" />
            <circle cx="195" cy="25" r="3" fill="hsl(92 38% 62%)" />
            <circle cx="240" cy="30" r="2" fill="hsl(100 35% 60%)" />
            <circle cx="290" cy="38" r="2.5" fill="hsl(95 40% 58%)" />
            <circle cx="340" cy="45" r="2" fill="hsl(90 35% 62%)" />
            <circle cx="390" cy="52" r="2" fill="hsl(98 38% 60%)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TreeCanopy;
