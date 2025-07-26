import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DiscordWidget from "./components/DiscordWidget";
import SupportForm from "./components/SupportForm";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import TeamRoster from "./components/TeamRoster";
import GameCarousel from "./components/GameCarousel";
import LoadingScreen from "./components/LoadingScreen";
import ParticleSystem from "./components/ParticleSystem";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import NotificationSystem from "./components/NotificationSystem";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [theme, setTheme] = useState({
    primaryColor: "#5865F2",
    accentColor: "#7289DA",
    glowIntensity: 0.3,
    /* @tweakable sound and music settings */
    musicEnabled: true
  });
  const [performanceMode, setPerformanceMode] = useState("high");
  const [animationSpeed, setAnimationSpeed] = useState(1);
  useEffect(() => {
    let progress = 0;
    const loadingTimer = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        setIsLoading(false);
        clearInterval(loadingTimer);
      }
    }, 100);
    const checkPerformance = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection && connection.effectiveType) {
        if (connection.effectiveType === "2g" || connection.effectiveType === "slow-2g") {
          setPerformanceMode("low");
          setParticlesEnabled(false);
        }
      }
    };
    checkPerformance();
    return () => clearInterval(loadingTimer);
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", theme.primaryColor);
    document.documentElement.style.setProperty("--accent-color", theme.accentColor);
    document.documentElement.style.setProperty("--glow-intensity", theme.glowIntensity);
  }, [theme]);
  if (isLoading) {
    return React.createElement(LoadingScreen);
  }
  return React.createElement("div", {
    className: "min-h-screen bg-black text-white relative overflow-x-hidden",
    "data-performance": performanceMode,
    style: {
      "--animation-speed": `${animationSpeed}s`
    }
  }, [
    React.createElement(VideoBackground, { key: "video", performanceMode }),
    particlesEnabled && performanceMode !== "low" && React.createElement(ParticleSystem, { key: "particles" }),
    React.createElement(ScrollProgress, { key: "scroll-progress" }),
    React.createElement(NotificationSystem, { key: "notifications" }),
    React.createElement(MusicPlayer, { key: "music-player", enabled: theme.musicEnabled }),
    // Enhanced accessibility controls
    React.createElement("div", {
      key: "accessibility-controls",
      className: "fixed top-20 left-4 z-50 space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
    }, [
      React.createElement("button", {
        key: "reduce-motion",
        onClick: () => setAnimationSpeed(animationSpeed === 1 ? 0.5 : 1),
        className: "glass-dark p-2 rounded text-xs text-gray-300 hover:text-white",
        "aria-label": "Toggle reduced motion"
      }, animationSpeed === 1 ? "\u{1F40C}" : "\u26A1"),
      React.createElement("button", {
        key: "toggle-particles",
        onClick: () => setParticlesEnabled(!particlesEnabled),
        className: "glass-dark p-2 rounded text-xs text-gray-300 hover:text-white",
        "aria-label": "Toggle particle effects"
      }, particlesEnabled ? "\u2728" : "\u{1F6AB}"),
      React.createElement("button", {
        key: "toggle-sound",
        onClick: () => setTheme((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled })),
        className: "glass-dark p-2 rounded text-xs text-gray-300 hover:text-white",
        "aria-label": "Toggle sound effects"
      }, theme.soundEnabled ? "\u{1F50A}" : "\u{1F507}")
    ]),
    React.createElement("div", { className: "relative z-10", key: "content" }, [
      React.createElement(Header, {
        key: "header",
        theme,
        setTheme
      }),
      React.createElement("main", { key: "main", role: "main" }, [
        React.createElement(HeroSection, {
          key: "hero",
          animationSpeed
        }),
        React.createElement(motion.section, {
          key: "games",
          id: "games",
          className: "py-20 px-4",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 * animationSpeed },
          viewport: { once: true, margin: "-100px" }
        }, React.createElement(GameCarousel, {
          performanceMode
        })),
        React.createElement(motion.section, {
          key: "team",
          id: "team",
          className: "py-20 px-4",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 * animationSpeed },
          viewport: { once: true, margin: "-100px" }
        }, React.createElement(TeamRoster, { animationSpeed })),
        React.createElement(motion.section, {
          key: "discord",
          id: "discord",
          className: "py-20 px-4",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 * animationSpeed },
          viewport: { once: true, margin: "-100px" }
        }, React.createElement("div", { className: "max-w-6xl mx-auto" }, React.createElement(DiscordWidget))),
        React.createElement(motion.section, {
          key: "support",
          id: "support",
          className: "py-20 px-4",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 * animationSpeed },
          viewport: { once: true, margin: "-100px" }
        }, React.createElement("div", { className: "max-w-4xl mx-auto" }, React.createElement(SupportForm)))
      ]),
      React.createElement(Footer, { key: "footer", theme })
    ]),
    React.createElement(BackToTop, { key: "back-to-top", animationSpeed })
  ]);
}
var stdin_default = App;
export {
  stdin_default as default
};
