import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const LoadingScreen = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const loadingMessages = [
    "Initialisation des syst\xE8mes EOZ...",
    "Connexion aux serveurs de jeu...",
    "Chargement des statistiques...",
    "Pr\xE9paration de l'interface...",
    "Finalisation..."
  ];
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 500);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);
  return React.createElement("div", {
    className: "fixed inset-0 z-50 bg-black flex items-center justify-center"
  }, [
    // Animated background
    React.createElement("div", {
      key: "bg-animation",
      className: "absolute inset-0 opacity-30"
    }, [
      React.createElement(motion.div, {
        key: "gradient-bg",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 30% 40%, #5865F2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7289DA 0%, transparent 50%), radial-gradient(circle at 40% 80%, #8A2BE2 0%, transparent 50%)"
        },
        animate: {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }
      })
    ]),
    // Loading content
    React.createElement("div", {
      key: "loading-content",
      className: "relative z-10 text-center"
    }, [
      // Logo animation
      React.createElement(motion.div, {
        key: "logo",
        className: "mb-8",
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.8, type: "spring", stiffness: 200 }
      }, [
        React.createElement("img", {
          key: "logo-img",
          src: "https://iili.io/Fk7k6AB.gif",
          alt: "EOZ Team",
          className: "h-24 w-auto mx-auto mb-4"
        }),
        React.createElement(motion.h1, {
          key: "logo-text",
          className: "text-6xl font-black gradient-text",
          animate: {
            textShadow: [
              "0 0 20px rgba(88, 101, 242, 0.5)",
              "0 0 40px rgba(88, 101, 242, 0.8)",
              "0 0 20px rgba(88, 101, 242, 0.5)"
            ]
          },
          transition: {
            duration: 2,
            repeat: Infinity
          }
        }, "EOZ TEAM")
      ]),
      // Loading messages
      React.createElement(
        "div",
        {
          key: "messages",
          className: "mb-8 h-8"
        },
        React.createElement(
          AnimatePresence,
          { mode: "wait" },
          React.createElement(motion.p, {
            key: currentMessageIndex,
            className: "text-xl text-gray-300",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.3 }
          }, loadingMessages[currentMessageIndex])
        )
      ),
      // Progress bar
      React.createElement("div", {
        key: "progress",
        className: "w-80 mx-auto"
      }, [
        React.createElement(
          "div",
          {
            key: "progress-bar",
            className: "glass-dark rounded-full h-3 mb-4 overflow-hidden"
          },
          React.createElement(motion.div, {
            key: "progress-fill",
            className: "h-full bg-gradient-to-r from-discord-blurple to-purple-600 rounded-full",
            initial: { width: "0%" },
            animate: { width: `${Math.min(progress, 100)}%` },
            transition: { duration: 0.3 }
          })
        ),
        React.createElement("p", {
          key: "progress-text",
          className: "text-sm text-gray-400 font-mono"
        }, `${Math.floor(Math.min(progress, 100))}%`)
      ]),
      // Loading spinner
      React.createElement(
        "div",
        {
          key: "spinner",
          className: "mt-8 flex justify-center"
        },
        React.createElement(motion.div, {
          key: "spinner-div",
          className: "w-8 h-8 border-2 border-discord-blurple border-t-transparent rounded-full",
          animate: { rotate: 360 },
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }
        })
      )
    ])
  ]);
};
var stdin_default = LoadingScreen;
export {
  stdin_default as default
};
