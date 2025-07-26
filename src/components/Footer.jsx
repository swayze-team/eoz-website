import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Twitter, Instagram, Youtube, Mail, ExternalLink, Code, X } from "lucide-react";
const DeveloperButton = () => {
  const [showImage, setShowImage] = useState(false);
  return React.createElement(React.Fragment, null, [
    React.createElement(motion.button, {
      key: "dev-button",
      onClick: () => setShowImage(true),
      className: "flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden",
      whileHover: { scale: 1.05, y: -2 },
      whileTap: { scale: 0.98 }
    }, [
      React.createElement(Code, {
        key: "code-icon",
        size: 24,
        className: "group-hover:rotate-12 transition-transform duration-300"
      }),
      React.createElement("span", { key: "dev-text" }, "D\xE9velopper !"),
      React.createElement(motion.div, {
        key: "shine-effect",
        className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0",
        initial: { x: "-100%" },
        whileHover: { x: "100%" },
        transition: { duration: 0.6 }
      })
    ]),
    React.createElement(
      AnimatePresence,
      { key: "modal" },
      showImage && React.createElement(motion.div, {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setShowImage(false)
      }, [
        React.createElement(motion.div, {
          key: "modal-content",
          className: "relative max-w-4xl max-h-[90vh] p-4",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { type: "spring", stiffness: 300 },
          onClick: (e) => e.stopPropagation()
        }, [
          React.createElement(
            motion.button,
            {
              key: "close-btn",
              onClick: () => setShowImage(false),
              className: "absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200",
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            },
            React.createElement(X, { size: 20 })
          ),
          React.createElement(motion.img, {
            key: "dev-image",
            src: "https://i.goopics.net/ojv4hw.jpg",
            alt: "D\xE9veloppeur",
            className: "w-full h-auto rounded-2xl shadow-2xl",
            initial: { scale: 0.9 },
            animate: { scale: 1 },
            transition: { delay: 0.1 }
          })
        ])
      ])
    )
  ]);
};
const Footer = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/eoz",
      color: "text-discord-blurple hover:text-discord-blurple"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/eozteam",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/eozteam",
      color: "text-pink-400 hover:text-pink-300"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/eozteam",
      color: "text-red-400 hover:text-red-300"
    }
  ];
  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Jeux", href: "#games" },
    { name: "\xC9quipe", href: "#team" },
    { name: "Discord", href: "#discord" },
    { name: "Support", href: "#support" }
  ];
  return React.createElement(
    "footer",
    { className: "glass-dark mt-20" },
    React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" }, [
      React.createElement("div", { key: "grid-container", className: "grid grid-cols-1 md:grid-cols-4 gap-8" }, [
        // Logo et Description
        React.createElement(motion.div, {
          key: "logo-section",
          className: "col-span-1 md:col-span-2",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true }
        }, [
          React.createElement("div", { key: "logo-header", className: "flex items-center space-x-3 mb-4" }, [
            React.createElement("img", {
              key: "logo-img",
              src: "https://iili.io/Fk7k6AB.gif",
              alt: "EOZ Team Logo",
              className: "h-12 w-auto"
            }),
            React.createElement("h3", {
              key: "logo-text",
              className: "text-2xl font-bold gradient-text"
            }, "EOZ TEAM")
          ]),
          React.createElement("p", {
            key: "description",
            className: "text-gray-300 mb-6 max-w-md"
          }, "Une \xE9quipe esport passionn\xE9e d\xE9di\xE9e \xE0 l'excellence comp\xE9titive. Rejoignez notre communaut\xE9 et vivez l'exp\xE9rience gaming ultime."),
          React.createElement("div", { key: "contact", className: "flex items-center space-x-2 text-sm text-gray-400" }, [
            React.createElement(Mail, { key: "mail-icon", size: 16 }),
            React.createElement("span", { key: "email" }, "contact@eozteam.gg")
          ])
        ]),
        // Liens Rapides
        React.createElement(motion.div, {
          key: "nav-links",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true }
        }, [
          React.createElement("h4", {
            key: "nav-title",
            className: "text-lg font-semibold mb-4 text-white"
          }, "Navigation"),
          React.createElement(
            "ul",
            { key: "nav-list", className: "space-y-2" },
            quickLinks.map(
              (link, index) => React.createElement(
                "li",
                { key: index },
                React.createElement("a", {
                  href: link.href,
                  className: "text-gray-300 hover:text-discord-blurple transition-colors duration-200 flex items-center space-x-1"
                }, [
                  React.createElement("span", { key: "link-text" }, link.name),
                  React.createElement(ExternalLink, { key: "link-icon", size: 12, className: "opacity-50" })
                ])
              )
            )
          )
        ]),
        // Réseaux Sociaux
        React.createElement(motion.div, {
          key: "social-links",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          viewport: { once: true }
        }, [
          React.createElement("h4", {
            key: "social-title",
            className: "text-lg font-semibold mb-4 text-white"
          }, "Suivez-nous"),
          React.createElement(
            "div",
            { key: "social-list", className: "space-y-3" },
            socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return React.createElement(motion.a, {
                key: index,
                href: social.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `flex items-center space-x-3 ${social.color} transition-colors duration-200`,
                whileHover: { x: 5 },
                transition: { type: "spring", stiffness: 400 }
              }, [
                React.createElement(IconComponent, { key: "social-icon", size: 20 }),
                React.createElement("span", { key: "social-name" }, social.name)
              ]);
            })
          )
        ])
      ]),
      // Séparateur
      React.createElement(
        "div",
        { key: "separator", className: "border-t border-gray-700 mt-8 pt-8" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" }, [
          React.createElement(motion.p, {
            key: "copyright",
            className: "text-gray-400 text-sm",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.6 },
            viewport: { once: true }
          }, "\xA9 2024 EOZ Team. Tous droits r\xE9serv\xE9s."),
          React.createElement(motion.div, {
            key: "legal-links",
            className: "flex space-x-6 text-sm",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.1 },
            viewport: { once: true }
          }, [
            React.createElement("a", {
              key: "privacy",
              href: "#",
              className: "text-gray-400 hover:text-white transition-colors duration-200"
            }, "Politique de confidentialit\xE9"),
            React.createElement("a", {
              key: "terms",
              href: "#",
              className: "text-gray-400 hover:text-white transition-colors duration-200"
            }, "Conditions d'utilisation"),
            React.createElement("a", {
              key: "contact",
              href: "#",
              className: "text-gray-400 hover:text-white transition-colors duration-200"
            }, "Contact")
          ])
        ])
      ),
      // Badge de statut Discord
      React.createElement(
        motion.div,
        {
          key: "discord-status",
          className: "mt-6 text-center",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.2 },
          viewport: { once: true }
        },
        React.createElement("a", {
          href: "https://discord.gg/eoz",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center space-x-2 glass px-4 py-2 rounded-full hover:bg-discord-blurple hover:bg-opacity-20 transition-all duration-200"
        }, [
          React.createElement("div", {
            key: "status-dot",
            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
          }),
          React.createElement("span", {
            key: "status-text",
            className: "text-sm text-gray-300"
          }, "Serveur Discord actif")
        ])
      ),
      // Développer Button
      React.createElement(
        motion.div,
        {
          key: "dev-button-container",
          className: "mt-8 text-center",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          viewport: { once: true }
        },
        React.createElement(DeveloperButton)
      )
    ])
  );
};
var stdin_default = Footer;
export {
  stdin_default as default
};
