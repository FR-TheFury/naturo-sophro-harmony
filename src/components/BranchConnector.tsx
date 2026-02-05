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
        // Call onComplete after branch animation finishes
        if (onComplete) {
          setTimeout(onComplete, 800);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isTriggered, delay, onComplete]);

  const isRTL = direction === "right-to-left";
  
  // Chemin plus organique et épais pour ressembler à une vraie branche d'arbre
  const ltrPath = `M0 ${startY} 
    C 25 ${startY - 12}, 50 ${startY + 8}, 80 ${startY - 3} 
    C 110 ${startY - 14}, 130 ${startY + 5}, 160 ${startY}`;
  
  const rtlPath = `M160 ${startY} 
    C 135 ${startY - 12}, 110 ${startY + 8}, 80 ${startY - 3} 
    C 50 ${startY - 14}, 30 ${startY + 5}, 0 ${startY}`;

  const branchPath = isRTL ? rtlPath : ltrPath;
  const leafX = isRTL ? 5 : 155;
  const leafRotation = isRTL ? -30 : 30;

  // Sous-branches
  const subBranches = isRTL ? [
    { path: `M110 ${startY + 4} Q 95 ${startY - 10}, 85 ${startY - 18}`, delay: 0.5 },
    { path: `M60 ${startY - 6} Q 50 ${startY + 8}, 40 ${startY + 15}`, delay: 0.6 },
  ] : [
    { path: `M50 ${startY + 4} Q 65 ${startY - 10}, 75 ${startY - 18}`, delay: 0.5 },
    { path: `M100 ${startY - 6} Q 110 ${startY + 8}, 120 ${startY + 15}`, delay: 0.6 },
  ];

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="branchWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(25, 40%, 25%)" />
            <stop offset="50%" stopColor="hsl(25, 38%, 32%)" />
            <stop offset="100%" stopColor="hsl(25, 30%, 35%)" />
          </linearGradient>
        </defs>

        {/* Branche principale - épaisse comme du vrai bois */}
        <path
          d={branchPath}
          stroke="url(#branchWoodGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          className="branch-path"
          style={{
            strokeDasharray: 250,
            strokeDashoffset: isAnimating ? 0 : 250,
            transition: "stroke-dashoffset 0.8s ease-out",
          }}
        />

        {/* Texture écorce sur la branche */}
        <path
          d={branchPath}
          stroke="hsl(25, 30%, 20%)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          style={{
            strokeDasharray: 250,
            strokeDashoffset: isAnimating ? 0 : 250,
            transition: "stroke-dashoffset 0.8s ease-out 0.1s",
          }}
        />
        
        {/* Sous-branches */}
        {subBranches.map((branch, i) => (
          <path
            key={i}
            d={branch.path}
            stroke="hsl(25, 35%, 30%)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: 60,
              strokeDashoffset: isAnimating ? 0 : 60,
              transition: `stroke-dashoffset 0.4s ease-out ${branch.delay}s`,
            }}
          />
        ))}
        
        {/* Feuilles au bout des branches */}
        <g
          className={`transition-all duration-500 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          style={{ 
            transformOrigin: `${leafX}px ${startY}px`,
            transitionDelay: isAnimating ? "0.7s" : "0s" 
          }}
        >
          {/* Feuille principale */}
          <ellipse
            cx={leafX}
            cy={startY}
            rx="14"
            ry="7"
            fill="hsl(120, 32%, 40%)"
            transform={`rotate(${leafRotation} ${leafX} ${startY})`}
          />
          <ellipse
            cx={leafX + (isRTL ? 6 : -6)}
            cy={startY - 8}
            rx="10"
            ry="5"
            fill="hsl(120, 38%, 48%)"
            transform={`rotate(${leafRotation + 25} ${leafX + (isRTL ? 6 : -6)} ${startY - 8})`}
          />
          <ellipse
            cx={leafX + (isRTL ? -5 : 5)}
            cy={startY + 6}
            rx="8"
            ry="4"
            fill="hsl(120, 30%, 45%)"
            transform={`rotate(${leafRotation - 15} ${leafX + (isRTL ? -5 : 5)} ${startY + 6})`}
          />
        </g>

        {/* Petits bourgeons sur les sous-branches */}
        <g
          style={{
            opacity: isAnimating ? 1 : 0,
            transition: "opacity 0.3s ease-out 0.8s",
          }}
        >
          <circle 
            cx={isRTL ? 85 : 75} 
            cy={startY - 18} 
            r="4" 
            fill="hsl(120, 35%, 42%)" 
          />
          <circle 
            cx={isRTL ? 40 : 120} 
            cy={startY + 15} 
            r="3" 
            fill="hsl(120, 40%, 50%)" 
          />
        </g>
      </svg>
    </div>
  );
};

export default BranchConnector;
