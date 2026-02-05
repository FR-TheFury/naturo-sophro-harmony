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
    <div className={`fixed left-0 top-0 bottom-0 w-20 md:w-24 lg:w-28 pointer-events-none z-40 ${className}`}>
      <svg
        viewBox="0 0 100 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Main trunk - organic wavy path */}
        <path
          d="M50 0 
             Q 45 50, 52 100 
             Q 58 150, 48 200 
             Q 42 250, 55 300 
             Q 62 350, 45 400 
             Q 38 450, 52 500 
             Q 60 550, 48 600 
             Q 40 650, 55 700 
             Q 65 750, 48 800 
             Q 38 850, 55 900 
             Q 62 950, 48 1000 
             Q 40 1050, 52 1100 
             Q 58 1150, 50 1200"
          stroke="hsl(var(--forest))"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          className="tree-trunk"
          style={{
            strokeDasharray: 1800,
            strokeDashoffset: isVisible ? 0 : 1800,
            transition: "stroke-dashoffset 3s ease-out",
          }}
        />

        {/* Trunk texture lines */}
        <path
          d="M48 50 Q 50 70, 52 90"
          stroke="hsl(var(--earth))"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: isVisible ? 0 : 50,
            transition: "stroke-dashoffset 1s ease-out 0.5s",
          }}
        />
        <path
          d="M52 200 Q 48 220, 50 240"
          stroke="hsl(var(--earth))"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: isVisible ? 0 : 50,
            transition: "stroke-dashoffset 1s ease-out 1s",
          }}
        />
        <path
          d="M46 400 Q 50 420, 48 440"
          stroke="hsl(var(--earth))"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: isVisible ? 0 : 50,
            transition: "stroke-dashoffset 1s ease-out 1.5s",
          }}
        />

        {/* Small decorative roots at bottom */}
        <g
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "2.5s" }}
        >
          <path
            d="M50 1150 Q 30 1170, 15 1200"
            stroke="hsl(var(--earth))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 1150 Q 70 1175, 85 1200"
            stroke="hsl(var(--earth))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 1180 Q 40 1190, 35 1200"
            stroke="hsl(var(--earth))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M50 1180 Q 60 1190, 65 1200"
            stroke="hsl(var(--earth))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Gradient overlay for fade effect at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
};

export default TreeOfLife;
