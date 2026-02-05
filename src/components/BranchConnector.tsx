import { useEffect, useState, useRef } from "react";

interface BranchConnectorProps {
  delay?: number;
  direction?: "left-to-right" | "right-to-left";
  startY?: number;
  className?: string;
  onComplete?: () => void;
  isTriggered?: boolean;
}

const BranchConnector = ({
  delay = 0,
  direction = "left-to-right",
  startY = 50,
  className = "",
  onComplete,
  isTriggered = true,
}: BranchConnectorProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (isTriggered && !hasTriggered.current) {
      hasTriggered.current = true;
      const timer = setTimeout(() => {
        setIsAnimating(true);
        if (onComplete) {
          setTimeout(onComplete, 900);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isTriggered, delay, onComplete]);

  const isRTL = direction === "right-to-left";
  
  // Chemin organique épais pour une vraie branche d'arbre
  const ltrPath = `M0 ${startY} 
    C 40 ${startY - 15}, 80 ${startY + 12}, 130 ${startY - 5} 
    C 180 ${startY - 18}, 220 ${startY + 8}, 280 ${startY}`;
  
  const rtlPath = `M280 ${startY} 
    C 240 ${startY - 15}, 200 ${startY + 12}, 150 ${startY - 5} 
    C 100 ${startY - 18}, 60 ${startY + 8}, 0 ${startY}`;

  const branchPath = isRTL ? rtlPath : ltrPath;
  const leafX = isRTL ? 15 : 265;
  const leafRotation = isRTL ? -25 : 25;

  // Sous-branches
  const subBranches = isRTL ? [
    { path: `M180 ${startY + 5} Q 160 ${startY - 15}, 145 ${startY - 25}`, delay: 0.5 },
    { path: `M100 ${startY - 8} Q 85 ${startY + 12}, 70 ${startY + 22}`, delay: 0.6 },
    { path: `M220 ${startY - 5} Q 205 ${startY - 18}, 195 ${startY - 30}`, delay: 0.55 },
  ] : [
    { path: `M100 ${startY + 5} Q 120 ${startY - 15}, 135 ${startY - 25}`, delay: 0.5 },
    { path: `M180 ${startY - 8} Q 195 ${startY + 12}, 210 ${startY + 22}`, delay: 0.6 },
    { path: `M60 ${startY - 5} Q 75 ${startY - 18}, 85 ${startY - 30}`, delay: 0.55 },
  ];

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 280 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Dégradé bois réaliste pour la branche */}
          <linearGradient id={`branchWood-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 42%, 24%)" />
            <stop offset="30%" stopColor="hsl(25, 40%, 30%)" />
            <stop offset="70%" stopColor="hsl(25, 38%, 32%)" />
            <stop offset="100%" stopColor="hsl(25, 35%, 35%)" />
          </linearGradient>

          {/* Dégradé pour les feuilles */}
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(120, 40%, 35%)" />
            <stop offset="100%" stopColor="hsl(120, 45%, 45%)" />
          </linearGradient>
        </defs>

        {/* Branche principale - ÉPAISSE */}
        <path
          d={branchPath}
          stroke={`url(#branchWood-${direction})`}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          className="branch-path-main"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: isAnimating ? 0 : 400,
            transition: "stroke-dashoffset 0.9s ease-out",
          }}
        />

        {/* Ombre de la branche pour effet 3D */}
        <path
          d={branchPath}
          stroke="hsl(25, 30%, 18%)"
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
          opacity="0.2"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: isAnimating ? 0 : 400,
            transition: "stroke-dashoffset 0.9s ease-out",
            transform: "translateY(2px)",
          }}
        />

        {/* Texture sur la branche principale */}
        <path
          d={branchPath}
          stroke="hsl(25, 25%, 16%)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: isAnimating ? 0 : 400,
            transition: "stroke-dashoffset 0.9s ease-out 0.15s",
          }}
        />
        
        {/* Sous-branches épaisses */}
        {subBranches.map((branch, i) => (
          <g key={i}>
            <path
              d={branch.path}
              stroke="hsl(25, 38%, 28%)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 80,
                strokeDashoffset: isAnimating ? 0 : 80,
                transition: `stroke-dashoffset 0.5s ease-out ${branch.delay}s`,
              }}
            />
            <path
              d={branch.path}
              stroke="hsl(25, 30%, 22%)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
              style={{
                strokeDasharray: 80,
                strokeDashoffset: isAnimating ? 0 : 80,
                transition: `stroke-dashoffset 0.5s ease-out ${branch.delay + 0.1}s`,
              }}
            />
          </g>
        ))}
        
        {/* Groupe de feuilles au bout de la branche principale */}
        <g
          className={`transition-all duration-600 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          style={{ 
            transformOrigin: `${leafX}px ${startY}px`,
            transitionDelay: isAnimating ? "0.8s" : "0s" 
          }}
        >
          {/* Feuilles principales - grandes et visibles */}
          <ellipse
            cx={leafX}
            cy={startY - 2}
            rx="22"
            ry="10"
            fill="url(#leafGradient)"
            transform={`rotate(${leafRotation} ${leafX} ${startY - 2})`}
          />
          <path
            d={`M${leafX - 10} ${startY - 2} Q${leafX} ${startY - 8} ${leafX + 10} ${startY - 2}`}
            stroke="hsl(120, 35%, 30%)"
            strokeWidth="1"
            fill="none"
            transform={`rotate(${leafRotation} ${leafX} ${startY - 2})`}
          />
          
          <ellipse
            cx={leafX + (isRTL ? 12 : -12)}
            cy={startY - 14}
            rx="18"
            ry="8"
            fill="hsl(120, 42%, 42%)"
            transform={`rotate(${leafRotation + 30} ${leafX + (isRTL ? 12 : -12)} ${startY - 14})`}
          />
          
          <ellipse
            cx={leafX + (isRTL ? -8 : 8)}
            cy={startY + 10}
            rx="16"
            ry="7"
            fill="hsl(120, 38%, 38%)"
            transform={`rotate(${leafRotation - 20} ${leafX + (isRTL ? -8 : 8)} ${startY + 10})`}
          />

          <ellipse
            cx={leafX + (isRTL ? 5 : -5)}
            cy={startY - 22}
            rx="14"
            ry="6"
            fill="hsl(120, 45%, 48%)"
            transform={`rotate(${leafRotation + 45} ${leafX + (isRTL ? 5 : -5)} ${startY - 22})`}
          />
        </g>

        {/* Feuilles sur les sous-branches */}
        <g
          style={{
            opacity: isAnimating ? 1 : 0,
            transition: "opacity 0.4s ease-out 0.9s",
          }}
        >
          {/* Feuilles sous-branche 1 */}
          <ellipse 
            cx={isRTL ? 145 : 135} 
            cy={startY - 25} 
            rx="12" 
            ry="5" 
            fill="hsl(120, 40%, 40%)" 
            transform={`rotate(${isRTL ? -15 : 15} ${isRTL ? 145 : 135} ${startY - 25})`}
          />
          <ellipse 
            cx={isRTL ? 150 : 130} 
            cy={startY - 32} 
            rx="10" 
            ry="4" 
            fill="hsl(120, 45%, 46%)" 
            transform={`rotate(${isRTL ? -30 : 30} ${isRTL ? 150 : 130} ${startY - 32})`}
          />
          
          {/* Feuilles sous-branche 2 */}
          <ellipse 
            cx={isRTL ? 70 : 210} 
            cy={startY + 22} 
            rx="11" 
            ry="5" 
            fill="hsl(120, 38%, 42%)" 
            transform={`rotate(${isRTL ? 25 : -25} ${isRTL ? 70 : 210} ${startY + 22})`}
          />
          <ellipse 
            cx={isRTL ? 65 : 215} 
            cy={startY + 28} 
            rx="9" 
            ry="4" 
            fill="hsl(120, 42%, 48%)" 
            transform={`rotate(${isRTL ? 40 : -40} ${isRTL ? 65 : 215} ${startY + 28})`}
          />

          {/* Feuilles sous-branche 3 */}
          <ellipse 
            cx={isRTL ? 195 : 85} 
            cy={startY - 30} 
            rx="10" 
            ry="4" 
            fill="hsl(120, 40%, 44%)" 
            transform={`rotate(${isRTL ? -20 : 20} ${isRTL ? 195 : 85} ${startY - 30})`}
          />
        </g>

        {/* Bourgeons dorés */}
        <g
          style={{
            opacity: isAnimating ? 1 : 0,
            transition: "opacity 0.3s ease-out 1s",
          }}
        >
          <circle 
            cx={leafX + (isRTL ? -2 : 2)} 
            cy={startY - 28} 
            r="4" 
            fill="hsl(38, 60%, 50%)" 
          />
          <circle 
            cx={isRTL ? 140 : 140} 
            cy={startY - 28} 
            r="3" 
            fill="hsl(38, 55%, 55%)" 
          />
          <circle 
            cx={isRTL ? 68 : 212} 
            cy={startY + 30} 
            r="3" 
            fill="hsl(38, 60%, 52%)" 
          />
        </g>
      </svg>
    </div>
  );
};

export default BranchConnector;
