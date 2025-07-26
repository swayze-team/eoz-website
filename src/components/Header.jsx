import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle, Gamepad2 } from "lucide-react";
const Header = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(0.95);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setHeaderOpacity(Math.max(0.8, 1 - scrollY / 1e3));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const playClickSound = () => {
    if (soundEnabled) {
      console.log("Click sound played");
    }
  };
  return React.createElement(
    motion.header,
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-dark backdrop-blur-xl shadow-2xl" : "glass-dark backdrop-blur-md"}`,
      style: { opacity: headerOpacity },
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6 }
    },
    React.createElement(
      "nav",
      { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", role: "navigation" },
      React.createElement("div", { className: "flex justify-between items-center h-16" }, [
        // Logo
        React.createElement(motion.div, {
          key: "logo",
          className: "flex items-center space-x-3",
          whileHover: { scale: 1.05 },
          transition: { type: "spring", stiffness: 400 },
          onClick: playClickSound
        }, [
          React.createElement(motion.img, {
            key: "logo-img",
            src: "https://iili.io/Fk7k6AB.gif",
            alt: "EOZ Team Logo",
            className: "h-12 w-auto",
            whileHover: { rotate: 360 },
            transition: { duration: 0.8 }
          }),
          React.createElement(motion.div, {
            key: "logo-text",
            className: "hidden sm:block",
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.2 }
          }, [
            React.createElement("h1", {
              key: "title",
              className: "text-xl font-black gradient-text"
            }, "EOZ TEAM"),
            React.createElement("p", {
              key: "subtitle",
              className: "text-xs text-gray-400"
            }, "Esport Elite")
          ])
        ]),
        // Desktop Navigation
        React.createElement(
          "div",
          {
            key: "desktop-nav",
            className: "hidden md:block absolute left-1/2 transform -translate-x-1/2"
          },
          React.createElement("div", { className: "flex items-center space-x-8 glass-dark px-6 py-2 rounded-full" }, [
            React.createElement(motion.a, {
              key: "home",
              href: "#home",
              className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium flex items-center space-x-2 group",
              whileHover: { scale: 1.05 },
              onClick: playClickSound
            }, [
              React.createElement("span", { key: "text" }, "Accueil"),
              React.createElement(motion.div, {
                key: "indicator",
                className: "w-0 h-0.5 bg-discord-blurple group-hover:w-full transition-all duration-300"
              })
            ]),
            React.createElement(motion.a, {
              key: "games",
              href: "#games",
              className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium flex items-center space-x-2 group",
              whileHover: { scale: 1.05 },
              onClick: playClickSound
            }, [
              React.createElement(Gamepad2, { key: "icon", size: 16 }),
              React.createElement("span", { key: "text" }, "Jeux")
            ]),
            React.createElement(motion.a, {
              key: "team",
              href: "#team",
              className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
              whileHover: { scale: 1.05 },
              onClick: playClickSound
            }, "\xC9quipe"),
            React.createElement(motion.a, {
              key: "discord",
              href: "#discord",
              className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
              whileHover: { scale: 1.05 },
              onClick: playClickSound
            }, "Discord"),
            React.createElement(motion.a, {
              key: "support",
              href: "#support",
              className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
              whileHover: { scale: 1.05 },
              onClick: playClickSound
            }, "Support")
          ])
        ),
        // Action Buttons
        React.createElement("div", {
          key: "actions",
          className: "hidden md:flex items-center space-x-4"
        }, [
          // Discord button
          React.createElement(motion.a, {
            key: "discord-link",
            href: "https://discord.gg/eoz",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center space-x-2 bg-discord-blurple hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all duration-200 relative overflow-hidden group",
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: playClickSound
          }, [
            React.createElement(MessageCircle, { key: "icon", size: 16 }),
            React.createElement("span", { key: "text" }, "Discord"),
            React.createElement(motion.div, {
              key: "hover-bg",
              className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            })
          ])
        ]),
        // Mobile menu button
        React.createElement(
          "div",
          { key: "mobile-menu", className: "md:hidden" },
          React.createElement(motion.button, {
            onClick: () => {
              setIsMenuOpen(!isMenuOpen);
              playClickSound();
            },
            className: "text-white hover:text-discord-blurple transition-colors duration-200 p-2",
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 }
          }, isMenuOpen ? React.createElement(X, { size: 24 }) : React.createElement(Menu, { size: 24 }))
        )
      ]),
      // Mobile Navigation
      isMenuOpen && React.createElement(
        motion.div,
        {
          key: "mobile-nav",
          className: "md:hidden",
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 }
        },
        React.createElement("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark rounded-lg mt-2 border border-white/10" }, [
          React.createElement(motion.a, {
            key: "mobile-home",
            href: "#home",
            className: "flex items-center space-x-3 text-white hover:text-discord-blurple px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
            whileHover: { x: 5 },
            onClick: () => {
              setIsMenuOpen(false);
              playClickSound();
            }
          }, [
            React.createElement("span", { key: "home-text" }, "\u{1F3E0}"),
            React.createElement("span", { key: "home-label" }, "Accueil")
          ]),
          React.createElement(motion.a, {
            key: "mobile-games",
            href: "#games",
            className: "flex items-center space-x-3 text-white hover:text-discord-blurple px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
            whileHover: { x: 5 },
            onClick: () => setIsMenuOpen(false)
          }, [
            React.createElement(Gamepad2, { key: "games-icon", size: 18 }),
            React.createElement("span", { key: "games-label" }, "Jeux")
          ]),
          React.createElement(motion.a, {
            key: "mobile-team",
            href: "#team",
            className: "flex items-center space-x-3 text-white hover:text-discord-blurple px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
            whileHover: { x: 5 },
            onClick: () => setIsMenuOpen(false)
          }, [
            React.createElement("span", { key: "team-text" }, "\u{1F465}"),
            React.createElement("span", { key: "team-label" }, "\xC9quipe")
          ]),
          React.createElement(motion.a, {
            key: "mobile-discord",
            href: "#discord",
            className: "flex items-center space-x-3 text-white hover:text-discord-blurple px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
            whileHover: { x: 5 },
            onClick: () => setIsMenuOpen(false)
          }, [
            React.createElement(MessageCircle, { key: "discord-icon", size: 18 }),
            React.createElement("span", { key: "discord-label" }, "Discord")
          ]),
          React.createElement(motion.a, {
            key: "mobile-support",
            href: "#support",
            className: "flex items-center space-x-3 text-white hover:text-discord-blurple px-3 py-3 rounded-md text-base font-medium transition-colors duration-200",
            whileHover: { x: 5 },
            onClick: () => setIsMenuOpen(false)
          }, [
            React.createElement("span", { key: "support-text" }, "\u{1F4AC}"),
            React.createElement("span", { key: "support-label" }, "Support")
          ]),
          React.createElement(
            "div",
            { key: "mobile-action", className: "pt-4 px-3" },
            React.createElement("a", {
              href: "https://discord.gg/eoz",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center space-x-2 bg-discord-blurple text-white px-4 py-3 rounded-lg transition-all duration-200 w-full",
              onClick: () => {
                setIsMenuOpen(false);
                playClickSound();
              }
            }, [
              React.createElement(MessageCircle, { key: "mobile-icon", size: 16 }),
              React.createElement("span", { key: "mobile-text" }, "Rejoindre Discord")
            ])
          )
        ])
      )
    )
  );
};
var stdin_default = Header;
export {
  stdin_default as default
};
