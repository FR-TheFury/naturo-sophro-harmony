import { Leaf } from "lucide-react";

interface FloatingLeavesProps {
  className?: string;
  count?: number;
}

const FloatingLeaves = ({ className = "", count = 5 }: FloatingLeavesProps) => {
  const leaves = [
    { top: "10%", left: "5%", size: 24, delay: 0, rotation: 15, duration: 8 },
    { top: "25%", left: "8%", size: 18, delay: 1.5, rotation: -20, duration: 10 },
    { top: "45%", left: "3%", size: 22, delay: 3, rotation: 30, duration: 7 },
    { top: "60%", left: "10%", size: 16, delay: 2, rotation: -10, duration: 9 },
    { top: "80%", left: "6%", size: 20, delay: 4, rotation: 25, duration: 11 },
    { top: "15%", left: "12%", size: 14, delay: 2.5, rotation: -25, duration: 8.5 },
    { top: "70%", left: "2%", size: 19, delay: 1, rotation: 5, duration: 9.5 },
  ].slice(0, count);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {leaves.map((leaf, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            top: leaf.top,
            left: leaf.left,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <Leaf
            size={leaf.size}
            className="text-primary"
            style={{
              filter: "drop-shadow(0 2px 4px hsl(var(--primary) / 0.2))",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
