const TreeCanopy = () => {
  // Configuration des feuilles avec différentes teintes et positions
  const leaves = [
    // Feuilles proches du tronc (gauche)
    { x: 60, y: 15, scale: 1.2, rotation: -20, delay: 0, color: "forest" },
    { x: 85, y: 8, scale: 0.9, rotation: 15, delay: 0.1, color: "primary" },
    { x: 110, y: 20, scale: 1.1, rotation: -35, delay: 0.2, color: "sage" },
    { x: 130, y: 5, scale: 0.8, rotation: 25, delay: 0.15, color: "forest" },
    { x: 150, y: 18, scale: 1.0, rotation: -10, delay: 0.25, color: "leaf" },
    
    // Feuilles du milieu
    { x: 175, y: 10, scale: 1.3, rotation: 30, delay: 0.3, color: "primary" },
    { x: 200, y: 22, scale: 0.85, rotation: -25, delay: 0.35, color: "sage" },
    { x: 225, y: 6, scale: 1.0, rotation: 40, delay: 0.4, color: "forest" },
    { x: 250, y: 16, scale: 1.15, rotation: -15, delay: 0.45, color: "leaf" },
    { x: 280, y: 12, scale: 0.9, rotation: 20, delay: 0.5, color: "primary" },
    
    // Feuilles qui s'éloignent
    { x: 310, y: 20, scale: 0.75, rotation: -30, delay: 0.55, color: "sage" },
    { x: 340, y: 8, scale: 0.95, rotation: 35, delay: 0.6, color: "forest" },
    { x: 370, y: 18, scale: 0.7, rotation: -5, delay: 0.65, color: "leaf" },
    { x: 400, y: 14, scale: 0.8, rotation: 15, delay: 0.7, color: "primary" },
    { x: 430, y: 22, scale: 0.65, rotation: -20, delay: 0.75, color: "sage" },
    
    // Feuilles les plus éloignées (disparaissent progressivement)
    { x: 460, y: 10, scale: 0.6, rotation: 25, delay: 0.8, color: "forest" },
    { x: 490, y: 16, scale: 0.5, rotation: -15, delay: 0.85, color: "leaf" },
    { x: 520, y: 12, scale: 0.45, rotation: 10, delay: 0.9, color: "primary" },
  ];

  const getLeafColor = (color: string) => {
    switch (color) {
      case "forest":
        return "hsl(120 22% 28%)";
      case "primary":
        return "hsl(120 22% 32%)";
      case "sage":
        return "hsl(90 15% 45%)";
      case "leaf":
        return "hsl(100 30% 38%)";
      default:
        return "hsl(120 22% 28%)";
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-32 pointer-events-none z-30 overflow-hidden">
      <svg
        viewBox="0 0 600 50"
        className="w-full h-full"
        preserveAspectRatio="xMinYMin slice"
        style={{ minWidth: "800px" }}
      >
        <defs>
          {/* Dégradé pour les feuilles */}
          <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(120 22% 35%)" />
            <stop offset="100%" stopColor="hsl(120 22% 25%)" />
          </linearGradient>
          <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(90 15% 52%)" />
            <stop offset="100%" stopColor="hsl(90 15% 40%)" />
          </linearGradient>
          <linearGradient id="leafGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(100 30% 45%)" />
            <stop offset="100%" stopColor="hsl(100 30% 32%)" />
          </linearGradient>
          
          {/* Filtre pour ombre douce */}
          <filter id="leafShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="hsl(120 22% 15%)" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Groupe de feuilles */}
        {leaves.map((leaf, index) => (
          <g
            key={index}
            className="animate-leaf-sway"
            style={{
              transformOrigin: `${leaf.x}px ${leaf.y + 10}px`,
              animationDelay: `${leaf.delay + index * 0.1}s`,
              opacity: 1 - (index * 0.03),
            }}
          >
            {/* Feuille - forme organique avec courbes Bezier */}
            <path
              d={`
                M ${leaf.x} ${leaf.y + 10}
                C ${leaf.x - 5 * leaf.scale} ${leaf.y + 5} 
                  ${leaf.x - 8 * leaf.scale} ${leaf.y - 5 * leaf.scale} 
                  ${leaf.x} ${leaf.y - 12 * leaf.scale}
                C ${leaf.x + 8 * leaf.scale} ${leaf.y - 5 * leaf.scale} 
                  ${leaf.x + 5 * leaf.scale} ${leaf.y + 5} 
                  ${leaf.x} ${leaf.y + 10}
              `}
              fill={getLeafColor(leaf.color)}
              filter="url(#leafShadow)"
              transform={`rotate(${leaf.rotation} ${leaf.x} ${leaf.y})`}
              className="transition-all duration-500"
            />
            
            {/* Nervure centrale de la feuille */}
            <line
              x1={leaf.x}
              y1={leaf.y + 8}
              x2={leaf.x}
              y2={leaf.y - 8 * leaf.scale}
              stroke="hsl(120 22% 20%)"
              strokeWidth={0.5 * leaf.scale}
              strokeOpacity={0.4}
              transform={`rotate(${leaf.rotation} ${leaf.x} ${leaf.y})`}
            />
          </g>
        ))}

        {/* Petites feuilles décoratives supplémentaires */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={80 + i * 55}
            cy={25 + (i % 3) * 8}
            r={2 + (i % 2)}
            fill="hsl(100 30% 42%)"
            opacity={0.3 - i * 0.02}
            className="animate-pulse-soft"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TreeCanopy;
