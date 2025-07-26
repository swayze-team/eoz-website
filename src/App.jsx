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
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import NotificationSystem from "./components/NotificationSystem";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState({
    primaryColor: "#5865F2",
    accentColor: "#7289DA",
    glowIntensity: 0.3,
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
    React.createElement(ScrollProgress, { key: "scroll-progress" }),
    React.createElement(NotificationSystem, { key: "notifications" }),
    React.createElement(MusicPlayer, { key: "music-player", enabled: theme.musicEnabled }),
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
