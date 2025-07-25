import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV(
    motion.header,
    {
      className: "fixed top-0 left-0 right-0 z-50 glass-dark",
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6 },
      children: /* @__PURE__ */ jsxDEV("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center h-16", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              className: "flex-shrink-0",
              whileHover: { scale: 1.05 },
              transition: { type: "spring", stiffness: 400 },
              children: /* @__PURE__ */ jsxDEV(
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
                  lineNumber: 23,
                  columnNumber: 13
                }
              )
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 18,
              columnNumber: 11
            }
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline space-x-8", children: [
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#home",
                className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
                children: "Accueil"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 33,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#games",
                className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
                children: "Jeux"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 39,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#team",
                className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
                children: "\xC9quipe"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 45,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#discord",
                className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
                children: "Discord"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 51,
                columnNumber: 15
              }
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#support",
                className: "text-white hover:text-discord-blurple transition-colors duration-200 font-medium",
                children: "Support"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 57,
                columnNumber: 15
              }
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 32,
            columnNumber: 13
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 31,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center", children: /* @__PURE__ */ jsxDEV(
            motion.a,
            {
              href: "https://discord.gg/eoz",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center space-x-2 bg-discord-blurple hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all duration-200",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: [
                /* @__PURE__ */ jsxDEV(MessageCircle, { size: 16 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 76,
                  columnNumber: 15
                }),
                /* @__PURE__ */ jsxDEV("span", { children: "Discord" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 77,
                  columnNumber: 15
                })
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 68,
              columnNumber: 13
            }
          ) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 67,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "md:hidden", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "text-white hover:text-discord-blurple transition-colors duration-200",
              children: isMenuOpen ? /* @__PURE__ */ jsxDEV(X, { size: 24 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 87,
                columnNumber: 29
              }) : /* @__PURE__ */ jsxDEV(Menu, { size: 24 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 87,
                columnNumber: 47
              })
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 83,
              columnNumber: 13
            }
          ) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 82,
            columnNumber: 11
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 16,
          columnNumber: 9
        }),
        isMenuOpen && /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            className: "md:hidden",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3 },
            children: /* @__PURE__ */ jsxDEV("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark rounded-lg mt-2", children: [
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#home",
                  className: "block text-white hover:text-discord-blurple px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  children: "Accueil"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 102,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#games",
                  className: "block text-white hover:text-discord-blurple px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  children: "Jeux"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 108,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#team",
                  className: "block text-white hover:text-discord-blurple px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  children: "\xC9quipe"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 114,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#discord",
                  className: "block text-white hover:text-discord-blurple px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  children: "Discord"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 120,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#support",
                  className: "block text-white hover:text-discord-blurple px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  children: "Support"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 126,
                  columnNumber: 15
                }
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "pt-4", children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "https://discord.gg/eoz",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center justify-center space-x-2 bg-discord-blurple text-white px-4 py-2 rounded-lg transition-all duration-200",
                  children: [
                    /* @__PURE__ */ jsxDEV(MessageCircle, { size: 16 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 139,
                      columnNumber: 19
                    }),
                    /* @__PURE__ */ jsxDEV("span", { children: "Discord" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 140,
                      columnNumber: 19
                    })
                  ]
                },
                void 0,
                true,
                {
                  fileName: "<stdin>",
                  lineNumber: 133,
                  columnNumber: 17
                }
              ) }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 132,
                columnNumber: 15
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 101,
              columnNumber: 13
            })
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 94,
            columnNumber: 11
          }
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 7
      })
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 5
    }
  );
};
var stdin_default = Header;
export {
  stdin_default as default
};
