import { useEffect, useState, useRef, ReactNode } from "react";
import BranchConnector from "./BranchConnector";

interface RevealBlockProps {
  children: ReactNode;
  delay?: number;
  branchDirection?: "left-to-right" | "right-to-left";
  showBranch?: boolean;
  branchOffsetY?: string;
  className?: string;
  immediate?: boolean;
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
      const timer = setTimeout(() => setIsRevealed(true), delay + 900);
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
        threshold: 0.15,
        rootMargin: "-30px 0px",
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
      {/* Branch connector - plus large pour accommoder les nouvelles branches */}
      {showBranch && (
        <div
          className={`absolute ${isLTR ? "-left-48 md:-left-56 lg:-left-64" : "-right-48 md:-right-56 lg:-right-64"} w-48 md:w-56 lg:w-64 h-24 z-[-1]`}
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
        className={`transition-all duration-800 ease-out ${
          isRevealed
            ? "opacity-100 translate-x-0"
            : isLTR
            ? "opacity-0 translate-x-10"
            : "opacity-0 -translate-x-10"
        }`}
        style={{
          transitionDelay: `${isRevealed ? 0 : delay + 400}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealBlock;
