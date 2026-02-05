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
  
  // Path for left-to-right branch
  const ltrPath = `M0 ${startY} Q 40 ${startY - 15}, 80 ${startY - 5} Q 120 ${startY + 5}, 150 ${startY}`;
  // Path for right-to-left branch (mirrored)
  const rtlPath = `M150 ${startY} Q 110 ${startY - 15}, 70 ${startY - 5} Q 30 ${startY + 5}, 0 ${startY}`;

  const branchPath = isRTL ? rtlPath : ltrPath;
  const leafX = isRTL ? 5 : 145;
  const leafRotation = isRTL ? -30 : 30;

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 150 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Branch path */}
        <path
          d={branchPath}
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="branch-path"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: isAnimating ? 0 : 200,
            transition: "stroke-dashoffset 0.8s ease-out",
          }}
        />
        
        {/* Leaf at the end */}
        <g
          className={`transition-all duration-500 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          style={{ 
            transformOrigin: `${leafX}px ${startY}px`,
            transitionDelay: isAnimating ? "0.6s" : "0s" 
          }}
        >
          <ellipse
            cx={leafX}
            cy={startY}
            rx="10"
            ry="5"
            fill="hsl(var(--leaf))"
            transform={`rotate(${leafRotation} ${leafX} ${startY})`}
          />
          <ellipse
            cx={leafX + (isRTL ? 4 : -4)}
            cy={startY - 6}
            rx="7"
            ry="3.5"
            fill="hsl(var(--sage))"
            transform={`rotate(${leafRotation + 20} ${leafX + (isRTL ? 4 : -4)} ${startY - 6})`}
          />
        </g>
      </svg>
    </div>
  );
};

export default BranchConnector;
