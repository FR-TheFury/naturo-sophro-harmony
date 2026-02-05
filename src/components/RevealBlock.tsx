import { useEffect, useState, useRef, ReactNode } from "react";
import BranchConnector from "./BranchConnector";

interface RevealBlockProps {
  children: ReactNode;
  delay?: number;
  branchDirection?: "left-to-right" | "right-to-left";
  showBranch?: boolean;
  branchOffsetY?: string;
  className?: string;
  immediate?: boolean; // For hero section - no scroll trigger
}

const RevealBlock = ({
  children,
  delay = 0,
  branchDirection = "left-to-right",
  showBranch = true,
  branchOffsetY = "50%",
  className = "",
  immediate = false,
}: RevealBlockProps) => {
  const [isInView, setIsInView] = useState(immediate);
  const [isRevealed, setIsRevealed] = useState(immediate);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate) {
      const timer = setTimeout(() => setIsRevealed(true), delay + 800);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px",
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, [immediate, isInView, delay]);

  const handleBranchComplete = () => {
    setIsRevealed(true);
  };

  const isLTR = branchDirection === "left-to-right";

  return (
    <div ref={blockRef} className={`relative ${className}`}>
      {/* Branch connector */}
      {showBranch && (
        <div
          className={`absolute ${isLTR ? "-left-32 md:-left-36 lg:-left-40" : "-right-32 md:-right-36 lg:-right-40"} w-32 md:w-36 lg:w-40 h-20`}
          style={{ top: branchOffsetY, transform: "translateY(-50%)" }}
        >
          <BranchConnector
            delay={delay}
            direction={branchDirection}
            isTriggered={isInView}
            onComplete={handleBranchComplete}
          />
        </div>
      )}

      {/* Content block with reveal animation */}
      <div
        className={`transition-all duration-700 ease-out ${
          isRevealed
            ? "opacity-100 translate-x-0"
            : isLTR
            ? "opacity-0 translate-x-8"
            : "opacity-0 -translate-x-8"
        }`}
        style={{
          transitionDelay: `${isRevealed ? 0 : delay + 300}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealBlock;
