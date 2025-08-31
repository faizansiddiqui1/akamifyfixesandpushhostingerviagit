"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCircle = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1, // Mousemove pe cursor dikhana
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1, // Mousemove pe cursor dikhana
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", moveCircle);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to([cursor, follower], {
          scale: 1.5,
          duration: 0.3,
        });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to([cursor, follower], {
          scale: 1,
          duration: 0.3,
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none bg-blue-500 z-50 w-4 h-4 rounded-full bg-primary mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)", opacity: 0 }}
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none bg-blue-500 z-100 w-8 h-8 rounded-full border-2 border-primary mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)", opacity: 0 }}
      />
    </>
  );
}
