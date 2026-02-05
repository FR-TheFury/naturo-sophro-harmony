const TreeCanopy = () => {
  return (
    <div 
      className="fixed left-0 pointer-events-none z-20 overflow-visible"
      style={{ 
        top: '70px',
        width: '100%', 
        maxWidth: '1100px',
        height: '120px',
      }}
    >
      <svg
        viewBox="0 0 1100 120"
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
            <stop offset="50%" stopColor="white" stopOpacity="0.95" />
            <stop offset="75%" stopColor="white" stopOpacity="0.6" />
            <stop offset="90%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Masque pour le fondu */}
          <mask id="canopyMask">
            <rect x="0" y="0" width="1100" height="120" fill="url(#fadeRight)" />
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
            {/* Grand cluster arrière qui s'étend sur toute la largeur */}
            <path
              d="M 120 70 
                 C 100 50, 90 30, 110 15
                 C 130 0, 180 -5, 230 5
                 C 280 15, 340 10, 400 18
                 C 460 26, 520 22, 580 28
                 C 640 34, 700 30, 760 36
                 C 820 42, 880 38, 940 44
                 C 1000 50, 1050 48, 1080 52
                 C 1050 62, 1000 68, 940 64
                 C 880 60, 820 70, 760 66
                 C 700 62, 640 72, 580 68
                 C 520 64, 460 74, 400 70
                 C 340 66, 280 76, 220 72
                 C 160 68, 120 78, 120 70
                 Z"
              fill="url(#canopyGradientBack)"
            />
            
            {/* Extension haute arrière */}
            <path
              d="M 140 35
                 C 125 20, 130 5, 170 0
                 C 210 -5, 260 -8, 320 0
                 C 380 8, 440 2, 500 8
                 C 560 14, 620 10, 680 16
                 C 740 22, 800 18, 860 24
                 C 920 30, 970 28, 1020 32
                 C 980 42, 920 38, 860 44
                 C 800 50, 740 46, 680 52
                 C 620 58, 560 54, 500 58
                 C 440 62, 380 58, 320 62
                 C 260 66, 200 62, 160 58
                 C 140 55, 140 45, 140 35
                 Z"
              fill="hsl(120 22% 20%)"
            />
          </g>

          {/* COUCHE 2 - MÉDIANE : Feuillage principal avec volume */}
          <g filter="url(#canopyShadow)" className="animate-leaf-sway" style={{ transformOrigin: '300px 50px' }}>
            {/* Cluster principal médian étendu */}
            <path
              d="M 130 65
                 C 115 45, 105 28, 125 15
                 C 145 2, 195 -2, 260 8
                 C 325 18, 390 12, 455 20
                 C 520 28, 585 24, 650 30
                 C 715 36, 780 32, 845 38
                 C 910 44, 970 42, 1030 48
                 C 1000 58, 940 64, 875 60
                 C 810 56, 745 68, 680 64
                 C 615 60, 550 72, 485 68
                 C 420 64, 355 76, 290 72
                 C 225 68, 165 78, 130 72
                 C 125 70, 130 65, 130 65
                 Z"
              fill="url(#canopyGradientMid)"
            />

            {/* Bosses de feuillage - ajoutent du volume - étendues */}
            <ellipse cx="160" cy="25" rx="40" ry="28" fill="hsl(118 24% 30%)" />
            <ellipse cx="240" cy="18" rx="45" ry="26" fill="hsl(115 22% 32%)" />
            <ellipse cx="330" cy="24" rx="42" ry="27" fill="hsl(120 25% 28%)" />
            <ellipse cx="420" cy="28" rx="40" ry="25" fill="hsl(118 23% 31%)" />
            <ellipse cx="510" cy="32" rx="38" ry="24" fill="hsl(115 24% 33%)" />
            <ellipse cx="600" cy="36" rx="36" ry="23" fill="hsl(120 22% 35%)" />
            <ellipse cx="690" cy="40" rx="34" ry="22" fill="hsl(118 25% 32%)" />
            <ellipse cx="780" cy="44" rx="32" ry="21" fill="hsl(115 23% 34%)" />
            <ellipse cx="865" cy="48" rx="30" ry="20" fill="hsl(120 24% 36%)" />
            <ellipse cx="945" cy="52" rx="28" ry="18" fill="hsl(118 22% 38%)" />
            <ellipse cx="1015" cy="55" rx="25" ry="16" fill="hsl(115 25% 40%)" />
          </g>

          {/* COUCHE 3 - AVANT : Détails et highlights */}
          <g className="animate-leaf-sway" style={{ transformOrigin: '250px 40px', animationDelay: '0.5s' }}>
            {/* Petits clusters de feuilles au premier plan - étendus */}
            <path
              d="M 135 55
                 C 125 40, 120 28, 145 20
                 C 170 12, 200 18, 220 28
                 C 240 38, 225 52, 200 58
                 C 175 64, 145 62, 135 55
                 Z"
              fill="url(#canopyGradientFront)"
            />
            
            <path
              d="M 210 45
                 C 200 32, 205 20, 235 14
                 C 265 8, 295 14, 315 28
                 C 335 42, 320 55, 290 60
                 C 260 65, 220 58, 210 45
                 Z"
              fill="url(#canopyGradientHighlight)"
            />
            
            <path
              d="M 300 42
                 C 290 30, 300 18, 335 14
                 C 370 10, 400 18, 420 32
                 C 440 46, 420 58, 385 62
                 C 350 66, 310 54, 300 42
                 Z"
              fill="url(#canopyGradientFront)"
            />

            <path
              d="M 400 46
                 C 390 35, 400 24, 435 20
                 C 470 16, 500 24, 518 38
                 C 536 52, 518 64, 485 67
                 C 452 70, 410 58, 400 46
                 Z"
              fill="hsl(105 28% 40%)"
            />

            <path
              d="M 500 50
                 C 493 40, 503 30, 535 28
                 C 567 26, 592 34, 605 46
                 C 618 58, 602 68, 572 70
                 C 542 72, 507 60, 500 50
                 Z"
              fill="url(#canopyGradientHighlight)"
            />

            <path
              d="M 590 54
                 C 585 45, 595 36, 625 34
                 C 655 32, 678 40, 690 50
                 C 702 60, 688 70, 660 72
                 C 632 74, 595 64, 590 54
                 Z"
              fill="hsl(100 26% 44%)"
            />

            <path
              d="M 680 58
                 C 675 50, 685 42, 712 40
                 C 739 38, 760 45, 770 54
                 C 780 63, 768 72, 742 74
                 C 716 76, 685 66, 680 58
                 Z"
              fill="url(#canopyGradientFront)"
            />

            <path
              d="M 760 62
                 C 756 55, 765 48, 790 46
                 C 815 44, 835 50, 844 58
                 C 853 66, 842 74, 818 76
                 C 794 78, 764 70, 760 62
                 Z"
              fill="hsl(105 28% 42%)"
            />

            <path
              d="M 835 66
                 C 832 60, 840 54, 862 52
                 C 884 50, 902 56, 910 63
                 C 918 70, 908 77, 887 78
                 C 866 79, 838 72, 835 66
                 Z"
              fill="url(#canopyGradientHighlight)"
            />
          </g>

          {/* COUCHE 4 - DÉTAILS : Petites feuilles individuelles pour texture */}
          <g opacity="0.9" className="animate-leaf-sway" style={{ transformOrigin: '200px 30px', animationDelay: '0.8s' }}>
            {/* Feuilles individuelles sur le dessus pour texture - étendues */}
            <ellipse cx="145" cy="15" rx="14" ry="9" fill="hsl(95 32% 45%)" transform="rotate(-15 145 15)" />
            <ellipse cx="190" cy="10" rx="12" ry="8" fill="hsl(100 30% 48%)" transform="rotate(20 190 10)" />
            <ellipse cx="240" cy="12" rx="13" ry="8" fill="hsl(92 28% 42%)" transform="rotate(-10 240 12)" />
            <ellipse cx="295" cy="8" rx="14" ry="9" fill="hsl(98 32% 46%)" transform="rotate(15 295 8)" />
            <ellipse cx="350" cy="14" rx="12" ry="8" fill="hsl(105 28% 44%)" transform="rotate(-25 350 14)" />
            <ellipse cx="410" cy="18" rx="13" ry="8" fill="hsl(95 30% 48%)" transform="rotate(10 410 18)" />
            <ellipse cx="470" cy="22" rx="12" ry="7" fill="hsl(100 28% 45%)" transform="rotate(-20 470 22)" />
            <ellipse cx="530" cy="26" rx="11" ry="7" fill="hsl(92 30% 50%)" transform="rotate(25 530 26)" />
            <ellipse cx="590" cy="30" rx="10" ry="6" fill="hsl(98 28% 48%)" transform="rotate(-15 590 30)" />
            <ellipse cx="650" cy="34" rx="10" ry="6" fill="hsl(100 32% 50%)" transform="rotate(18 650 34)" />
            <ellipse cx="710" cy="38" rx="9" ry="6" fill="hsl(95 30% 52%)" transform="rotate(-12 710 38)" />
            <ellipse cx="770" cy="42" rx="9" ry="5" fill="hsl(100 28% 54%)" transform="rotate(22 770 42)" />
            <ellipse cx="830" cy="46" rx="8" ry="5" fill="hsl(95 30% 50%)" transform="rotate(-18 830 46)" />
            <ellipse cx="885" cy="50" rx="8" ry="5" fill="hsl(100 32% 52%)" transform="rotate(15 885 50)" />
            <ellipse cx="940" cy="54" rx="7" ry="4" fill="hsl(92 28% 54%)" transform="rotate(-10 940 54)" />
            <ellipse cx="990" cy="57" rx="6" ry="4" fill="hsl(98 30% 56%)" transform="rotate(12 990 57)" />
          </g>

          {/* Points de lumière subtils - étendus */}
          <g opacity="0.4">
            <circle cx="160" cy="20" r="3.5" fill="hsl(90 40% 60%)" />
            <circle cx="220" cy="14" r="3" fill="hsl(95 35% 58%)" />
            <circle cx="285" cy="18" r="3.5" fill="hsl(92 38% 62%)" />
            <circle cx="355" cy="24" r="2.5" fill="hsl(100 35% 60%)" />
            <circle cx="425" cy="28" r="3" fill="hsl(95 40% 58%)" />
            <circle cx="495" cy="32" r="2.5" fill="hsl(90 35% 62%)" />
            <circle cx="565" cy="36" r="2.5" fill="hsl(98 38% 60%)" />
            <circle cx="635" cy="40" r="2" fill="hsl(95 35% 62%)" />
            <circle cx="705" cy="44" r="2" fill="hsl(90 40% 58%)" />
            <circle cx="775" cy="48" r="2" fill="hsl(100 35% 60%)" />
            <circle cx="840" cy="52" r="1.5" fill="hsl(95 38% 62%)" />
            <circle cx="900" cy="55" r="1.5" fill="hsl(92 35% 64%)" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TreeCanopy;
