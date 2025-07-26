import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Gamepad2, Trophy, Users, Zap, Play } from "lucide-react";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Excellence \u2022 Passion \u2022 Victoire";
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => {
      clearInterval(typeInterval);
    };
  }, []);
  return React.createElement("section", {
    id: "home",
    className: "min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
  }, [
    // Enhanced animated background particles
    React.createElement(
      "div",
      { key: "particles", className: "absolute inset-0 overflow-hidden" },
      [...Array(30)].map(
        (_, i) => React.createElement(motion.div, {
          key: `particle-${i}`,
          className: "absolute rounded-full opacity-20",
          style: {
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: `linear-gradient(45deg, #5865F2, #7289DA, #8A2BE2)`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(88, 101, 242, 0.5)`
          },
          initial: {
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080)
          },
          animate: {
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          },
          transition: {
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        })
      )
    ),
    React.createElement(
      "div",
      { key: "content", className: "max-w-7xl mx-auto text-center relative z-10" },
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 }
      }, [
        // Enhanced logo and title
        React.createElement(motion.div, {
          key: "title-container",
          className: "mb-8",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 1, delay: 0.3 }
        }, [
          React.createElement(
            motion.div,
            {
              key: "logo-section",
              className: "mb-6",
              whileHover: { scale: 1.05 },
              transition: { type: "spring", stiffness: 300 }
            },
            React.createElement("img", {
              src: "https://iili.io/Fk7k6AB.gif",
              alt: "EOZ Team Logo",
              className: "h-32 w-auto mx-auto mb-4 filter drop-shadow-2xl"
            })
          ),
          React.createElement(motion.h1, {
            className: "text-7xl md:text-9xl font-black mb-6 gradient-text relative cursor-pointer",
            whileHover: {
              scale: 1.05,
              textShadow: "0 0 40px rgba(88, 101, 242, 0.8)"
            },
            transition: { type: "spring", stiffness: 300 }
          }, [
            "EOZ TEAM",
            React.createElement(motion.div, {
              key: "glow",
              className: "absolute -inset-1 bg-gradient-to-r from-discord-blurple via-purple-500 to-blue-500 rounded-lg blur-xl opacity-20",
              animate: {
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 5, -5, 0]
              },
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            })
          ])
        ]),
        // Enhanced description with typing effect
        React.createElement(motion.div, {
          key: "description-container",
          className: "mb-12",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.6 }
        }, [
          React.createElement(motion.p, {
            key: "typed-text",
            className: "text-3xl md:text-4xl text-gray-200 mb-4 font-bold tracking-wider"
          }, [
            typedText,
            React.createElement(motion.span, {
              key: "cursor",
              className: "inline-block w-1 h-8 bg-discord-blurple ml-1",
              animate: { opacity: [0, 1, 0] },
              transition: { duration: 1, repeat: Infinity }
            })
          ]),
          React.createElement("p", {
            key: "subtitle",
            className: "text-xl text-gray-400 font-normal max-w-3xl mx-auto leading-relaxed"
          }, "La r\xE9f\xE9rence fran\xE7aise en esport comp\xE9titif - Domination, Innovation, Excellence")
        ]),
        // Team qualities cards
        React.createElement(motion.div, {
          key: "qualities-section",
          className: "mb-16",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.8 }
        }, [
          React.createElement("div", {
            key: "qualities-cards",
            className: "flex flex-wrap justify-center gap-8"
          }, [
            React.createElement(motion.div, {
              key: "champions-card",
              className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-yellow-400/20 group",
              whileHover: { scale: 1.05, borderColor: "rgba(251, 191, 36, 0.5)" },
              transition: { type: "spring", stiffness: 400 }
            }, [
              React.createElement(Trophy, { key: "trophy", className: "text-yellow-400 group-hover:rotate-12 transition-transform", size: 28 }),
              React.createElement("div", { key: "champions-content", className: "text-left" }, [
                React.createElement("span", { key: "champions-title", className: "text-xl font-bold block" }, "Champions"),
                React.createElement("span", { key: "champions-subtitle", className: "text-sm text-gray-400" }, "Multi-jeux")
              ])
            ]),
            React.createElement(motion.div, {
              key: "team-card",
              className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-discord-blurple/20 group",
              whileHover: { scale: 1.05, borderColor: "rgba(88, 101, 242, 0.5)" },
              transition: { type: "spring", stiffness: 400 }
            }, [
              React.createElement(Users, { key: "users", className: "text-discord-blurple group-hover:scale-110 transition-transform", size: 28 }),
              React.createElement("div", { key: "team-content", className: "text-left" }, [
                React.createElement("span", { key: "team-title", className: "text-xl font-bold block" }, "Team"),
                React.createElement("span", { key: "team-subtitle", className: "text-sm text-gray-400" }, "Professionnelle")
              ])
            ]),
            React.createElement(motion.div, {
              key: "pro-card",
              className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-green-400/20 group",
              whileHover: { scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" },
              transition: { type: "spring", stiffness: 400 }
            }, [
              React.createElement(Zap, { key: "zap", className: "text-green-400 group-hover:animate-pulse", size: 28 }),
              React.createElement("div", { key: "pro-content", className: "text-left" }, [
                React.createElement("span", { key: "pro-title", className: "text-xl font-bold block" }, "Pro"),
                React.createElement("span", { key: "pro-subtitle", className: "text-sm text-gray-400" }, "Niveau")
              ])
            ])
          ])
        ]),
        // Enhanced action buttons
        React.createElement(motion.div, {
          key: "buttons",
          className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-8",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 1.2 }
        }, [
          React.createElement(motion.a, {
            key: "discord-btn",
            href: "https://discord.gg/eoz",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "relative group bg-gradient-to-r from-discord-blurple to-purple-600 hover:from-purple-600 hover:to-discord-blurple text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl overflow-hidden",
            whileHover: { scale: 1.05, y: -2 },
            whileTap: { scale: 0.98 }
          }, [
            React.createElement("span", {
              key: "btn-content",
              className: "relative z-10 flex items-center space-x-3"
            }, [
              React.createElement(Play, { key: "play-icon", size: 24 }),
              React.createElement("span", { key: "btn-text" }, "Rejoindre Discord"),
              React.createElement(motion.div, {
                key: "btn-arrow",
                animate: { x: [0, 5, 0] },
                transition: { duration: 1.5, repeat: Infinity }
              }, "\u2192")
            ]),
            React.createElement(motion.div, {
              key: "btn-glow",
              className: "absolute inset-0 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
            }),
            React.createElement(motion.div, {
              key: "btn-shine",
              className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700",
              animate: { x: ["-100%", "100%"] },
              transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
            })
          ]),
          React.createElement(motion.a, {
            key: "team-btn",
            href: "#team",
            className: "glass-dark border border-white/20 hover:border-white/40 hover:bg-white/10 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 backdrop-blur-xl relative overflow-hidden group",
            whileHover: { scale: 1.05, y: -2 },
            whileTap: { scale: 0.98 }
          }, [
            React.createElement("span", {
              key: "team-btn-text",
              className: "relative z-10"
            }, "D\xE9couvrir l'\xE9quipe"),
            React.createElement(motion.div, {
              key: "team-btn-bg",
              className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
              initial: { x: "-100%" },
              whileHover: { x: "100%" },
              transition: { duration: 0.6 }
            })
          ])
        ])
      ])
    )
  ]);
};
var stdin_default = HeroSection;
export {
  stdin_default as default
};
