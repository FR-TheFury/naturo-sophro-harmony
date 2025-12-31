import { useEffect, useState } from "react";

interface NaturalElementsProps {
  className?: string;
  variant?: "roots" | "branches";
}

const NaturalElements = ({ className = "", variant = "roots" }: NaturalElementsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute inset-y-0 left-0 w-[35%] pointer-events-none overflow-hidden ${className}`}>
      {/* SVG Roots/Branches that grow from top */}
      <svg
        viewBox="0 0 400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 h-full w-full"
        preserveAspectRatio="xMinYMin slice"
      >
        {/* Main trunk/root */}
        <path
          d="M120 0 Q 100 100, 130 200 Q 160 300, 100 400 Q 60 500, 120 600 Q 160 700, 90 800 Q 60 850, 80 900"
          stroke="hsl(var(--forest))"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className={`transition-all duration-[3000ms] ease-out ${
            isVisible ? "stroke-dashoffset-0" : "stroke-dashoffset-full"
          }`}
          style={{
            strokeDasharray: 1500,
            strokeDashoffset: isVisible ? 0 : 1500,
          }}
        />

        {/* Branch 1 - upper right */}
        <path
          d="M130 180 Q 180 160, 220 190 Q 260 220, 300 200"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: isVisible ? 0 : 300,
            transition: "stroke-dashoffset 2s ease-out 0.5s",
          }}
        />

        {/* Branch 2 - middle right */}
        <path
          d="M100 380 Q 150 350, 200 380 Q 250 410, 320 370"
          stroke="hsl(var(--secondary))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 350,
            strokeDashoffset: isVisible ? 0 : 350,
            transition: "stroke-dashoffset 2s ease-out 0.8s",
          }}
        />

        {/* Branch 3 - lower */}
        <path
          d="M120 580 Q 170 540, 240 570 Q 300 600, 350 560"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 320,
            strokeDashoffset: isVisible ? 0 : 320,
            transition: "stroke-dashoffset 2s ease-out 1.1s",
          }}
        />

        {/* Small branch left 1 */}
        <path
          d="M105 280 Q 60 250, 30 280"
          stroke="hsl(var(--earth))"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 150,
            strokeDashoffset: isVisible ? 0 : 150,
            transition: "stroke-dashoffset 1.5s ease-out 1.3s",
          }}
        />

        {/* Small branch left 2 */}
        <path
          d="M75 480 Q 40 450, 10 470"
          stroke="hsl(var(--secondary))"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 130,
            strokeDashoffset: isVisible ? 0 : 130,
            transition: "stroke-dashoffset 1.5s ease-out 1.5s",
          }}
        />

        {/* Leaves on branches */}
        <g
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1.8s" }}
        >
          {/* Leaf 1 */}
          <ellipse
            cx="220"
            cy="185"
            rx="15"
            ry="8"
            fill="hsl(var(--leaf))"
            transform="rotate(-20 220 185)"
            className="animate-pulse-soft"
          />
          {/* Leaf 2 */}
          <ellipse
            cx="280"
            cy="195"
            rx="12"
            ry="6"
            fill="hsl(var(--sage))"
            transform="rotate(15 280 195)"
            className="animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
          />
          {/* Leaf 3 */}
          <ellipse
            cx="200"
            cy="375"
            rx="14"
            ry="7"
            fill="hsl(var(--primary))"
            transform="rotate(-10 200 375)"
            className="animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          />
          {/* Leaf 4 */}
          <ellipse
            cx="300"
            cy="365"
            rx="13"
            ry="6"
            fill="hsl(var(--leaf))"
            transform="rotate(25 300 365)"
            className="animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          />
          {/* Leaf 5 */}
          <ellipse
            cx="240"
            cy="565"
            rx="15"
            ry="7"
            fill="hsl(var(--sage))"
            transform="rotate(-15 240 565)"
            className="animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          />
          {/* Leaf 6 */}
          <ellipse
            cx="330"
            cy="555"
            rx="12"
            ry="6"
            fill="hsl(var(--forest))"
            transform="rotate(20 330 555)"
            className="animate-pulse-soft"
            style={{ animationDelay: "0.8s" }}
          />
        </g>

        {/* Small decorative dots/berries */}
        <g
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "2.2s" }}
        >
          <circle cx="250" cy="200" r="4" fill="hsl(var(--gold))" className="animate-pulse-soft" />
          <circle cx="180" cy="390" r="3" fill="hsl(var(--earth))" className="animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
          <circle cx="270" cy="580" r="4" fill="hsl(var(--gold))" className="animate-pulse-soft" style={{ animationDelay: "0.6s" }} />
          <circle cx="50" cy="290" r="3" fill="hsl(var(--accent))" className="animate-pulse-soft" style={{ animationDelay: "0.9s" }} />
        </g>
      </svg>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
    </div>
  );
};

export default NaturalElements;
