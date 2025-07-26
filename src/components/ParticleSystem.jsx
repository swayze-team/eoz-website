import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const ParticleSystem = () => {
  const particleCount = 50;
  const particleColors = ["#5865F2", "#7289DA", "#8A2BE2", "#00D4FF"];
  const particleSizes = [2, 3, 4];
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: particleSizes[Math.floor(Math.random() * particleSizes.length)],
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(initialParticles);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return React.createElement(
    "div",
    {
      className: "fixed inset-0 pointer-events-none z-5 overflow-hidden"
    },
    particles.map((particle) => {
      const distanceToMouse = Math.sqrt(
        Math.pow(particle.x - mousePosition.x, 2) + Math.pow(particle.y - mousePosition.y, 2)
      );
      const mouseInfluence = Math.max(0, 1 - distanceToMouse / 200);
      return React.createElement(motion.div, {
        key: particle.id,
        className: "absolute rounded-full",
        style: {
          width: particle.size,
          height: particle.size,
          backgroundColor: particle.color,
          opacity: particle.opacity + mouseInfluence * 0.3,
          boxShadow: `0 0 ${10 + mouseInfluence * 20}px ${particle.color}`,
          filter: `blur(${mouseInfluence * 2}px)`
        },
        animate: {
          x: [
            particle.x,
            particle.x + particle.speedX * 100 + mouseInfluence * 50,
            particle.x + particle.speedX * 200,
            particle.x
          ],
          y: [
            particle.y,
            particle.y + particle.speedY * 100 + mouseInfluence * 30,
            particle.y + particle.speedY * 200,
            particle.y
          ],
          scale: [1, 1 + mouseInfluence * 0.5, 1]
        },
        transition: {
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
        }
      });
    })
  );
};
var stdin_default = ParticleSystem;
export {
  stdin_default as default
};
