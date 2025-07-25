import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Twitter, Instagram, Youtube, Mail, ExternalLink, Code, X } from "lucide-react";
const DeveloperButton = () => {
  const [showImage, setShowImage] = useState(false);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(
      motion.button,
      {
        onClick: () => setShowImage(true),
        className: "flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden",
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.98 },
        children: [
          /* @__PURE__ */ jsxDEV(Code, { size: 24, className: "group-hover:rotate-12 transition-transform duration-300" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 16,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("span", { children: "D\xE9velopper !" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 17,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0",
              initial: { x: "-100%" },
              whileHover: { x: "100%" },
              transition: { duration: 0.6 }
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 18,
              columnNumber: 9
            }
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 10,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: showImage && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setShowImage(false),
        children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            className: "relative max-w-4xl max-h-[90vh] p-4",
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 },
            transition: { type: "spring", stiffness: 300 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxDEV(
                motion.button,
                {
                  onClick: () => setShowImage(false),
                  className: "absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors duration-200",
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.9 },
                  children: /* @__PURE__ */ jsxDEV(X, { size: 20 }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 49,
                    columnNumber: 17
                  })
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 43,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV(
                motion.img,
                {
                  src: "https://i.goopics.net/ojv4hw.jpg",
                  alt: "D\xE9veloppeur",
                  className: "w-full h-auto rounded-2xl shadow-2xl",
                  initial: { scale: 0.9 },
                  animate: { scale: 1 },
                  transition: { delay: 0.1 }
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 52,
                  columnNumber: 15
                }
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 13
          }
        )
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 28,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 26,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 5
  });
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
  return /* @__PURE__ */ jsxDEV("footer", { className: "glass-dark mt-20", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "col-span-1 md:col-span-2",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-4", children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: "https://iili.io/Fk7k6AB.gif",
                  alt: "EOZ Team Logo",
                  className: "h-12 w-auto"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 117,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold gradient-text", children: "EOZ TEAM" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 122,
                columnNumber: 15
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 116,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 mb-6 max-w-md", children: "Une \xE9quipe esport passionn\xE9e d\xE9di\xE9e \xE0 l'excellence comp\xE9titive. Rejoignez notre communaut\xE9 et vivez l'exp\xE9rience gaming ultime." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 124,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2 text-sm text-gray-400", children: [
              /* @__PURE__ */ jsxDEV(Mail, { size: 16 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 129,
                columnNumber: 15
              }),
              /* @__PURE__ */ jsxDEV("span", { children: "contact@eozteam.gg" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 130,
                columnNumber: 15
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 128,
              columnNumber: 13
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 11
        }
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-semibold mb-4 text-white", children: "Navigation" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 141,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: quickLinks.map((link, index) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: link.href,
                className: "text-gray-300 hover:text-discord-blurple transition-colors duration-200 flex items-center space-x-1",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { children: link.name }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 149,
                    columnNumber: 21
                  }),
                  /* @__PURE__ */ jsxDEV(ExternalLink, { size: 12, className: "opacity-50" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 150,
                    columnNumber: 21
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 145,
                columnNumber: 19
              }
            ) }, index, false, {
              fileName: "<stdin>",
              lineNumber: 144,
              columnNumber: 17
            })) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 142,
              columnNumber: 13
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 135,
          columnNumber: 11
        }
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-semibold mb-4 text-white", children: "Suivez-nous" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 164,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return /* @__PURE__ */ jsxDEV(
                motion.a,
                {
                  href: social.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `flex items-center space-x-3 ${social.color} transition-colors duration-200`,
                  whileHover: { x: 5 },
                  transition: { type: "spring", stiffness: 400 },
                  children: [
                    /* @__PURE__ */ jsxDEV(IconComponent, { size: 20 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 178,
                      columnNumber: 21
                    }),
                    /* @__PURE__ */ jsxDEV("span", { children: social.name }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 179,
                      columnNumber: 21
                    })
                  ]
                },
                index,
                true,
                {
                  fileName: "<stdin>",
                  lineNumber: 169,
                  columnNumber: 19
                }
              );
            }) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 165,
              columnNumber: 13
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 158,
          columnNumber: 11
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 107,
      columnNumber: 9
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "border-t border-gray-700 mt-8 pt-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ jsxDEV(
        motion.p,
        {
          className: "text-gray-400 text-sm",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          children: "\xA9 2024 EOZ Team. Tous droits r\xE9serv\xE9s."
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 190,
          columnNumber: 13
        }
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "flex space-x-6 text-sm",
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors duration-200", children: "Politique de confidentialit\xE9" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 207,
              columnNumber: 15
            }),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors duration-200", children: "Conditions d'utilisation" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 210,
              columnNumber: 15
            }),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors duration-200", children: "Contact" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 213,
              columnNumber: 15
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 200,
          columnNumber: 13
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 189,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 188,
      columnNumber: 9
    }),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "mt-6 text-center",
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.2 },
        viewport: { once: true },
        children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "https://discord.gg/eoz",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center space-x-2 glass px-4 py-2 rounded-full hover:bg-discord-blurple hover:bg-opacity-20 transition-all duration-200",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 234,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-300", children: "Serveur Discord actif" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 235,
                columnNumber: 13
              })
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 228,
            columnNumber: 11
          }
        )
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 221,
        columnNumber: 9
      }
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "mt-8 text-center",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.3 },
        viewport: { once: true },
        children: /* @__PURE__ */ jsxDEV(DeveloperButton, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 247,
          columnNumber: 11
        })
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 240,
        columnNumber: 9
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 106,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 105,
    columnNumber: 5
  });
};
var stdin_default = Footer;
export {
  stdin_default as default
};
