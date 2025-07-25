import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
import { ArrowDown, Gamepad2, Trophy, Users, Zap } from "lucide-react";
const HeroSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { id: "home", className: "min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 overflow-hidden", children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "absolute w-2 h-2 bg-discord-blurple rounded-full opacity-20",
        initial: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        },
        animate: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        },
        transition: {
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse"
        }
      },
      i,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 11,
        columnNumber: 11
      }
    )) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto text-center relative z-10", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "mb-8",
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 1, delay: 0.3 },
                children: /* @__PURE__ */ jsxDEV(
                  motion.h1,
                  {
                    className: "text-7xl md:text-9xl font-black mb-6 gradient-text relative",
                    whileHover: { scale: 1.05 },
                    transition: { type: "spring", stiffness: 300 },
                    children: [
                      "EOZ TEAM",
                      /* @__PURE__ */ jsxDEV(
                        motion.div,
                        {
                          className: "absolute -inset-1 bg-gradient-to-r from-discord-blurple via-purple-500 to-blue-500 rounded-lg blur-xl opacity-20",
                          animate: {
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          },
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        },
                        void 0,
                        false,
                        {
                          fileName: "<stdin>",
                          lineNumber: 49,
                          columnNumber: 15
                        }
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "<stdin>",
                    lineNumber: 43,
                    columnNumber: 13
                  }
                )
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 37,
                columnNumber: 11
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.p,
              {
                className: "text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-medium leading-relaxed",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                children: [
                  "Excellence \u2022 Passion \u2022 Victoire",
                  /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 71,
                    columnNumber: 13
                  }),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-lg text-gray-400 font-normal", children: "La r\xE9f\xE9rence fran\xE7aise en esport comp\xE9titif" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 72,
                    columnNumber: 13
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 64,
                columnNumber: 11
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "flex flex-wrap justify-center gap-8 mb-16",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.8 },
                children: [
                  /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-yellow-400/20",
                      whileHover: { scale: 1.05, borderColor: "rgba(251, 191, 36, 0.5)" },
                      transition: { type: "spring", stiffness: 400 },
                      children: [
                        /* @__PURE__ */ jsxDEV(Trophy, { className: "text-yellow-400", size: 28 }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 86,
                          columnNumber: 15
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold block", children: "Champions" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 88,
                            columnNumber: 17
                          }),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: "Multi-jeux" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 89,
                            columnNumber: 17
                          })
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 87,
                          columnNumber: 15
                        })
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 81,
                      columnNumber: 13
                    }
                  ),
                  /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-discord-blurple/20",
                      whileHover: { scale: 1.05, borderColor: "rgba(88, 101, 242, 0.5)" },
                      transition: { type: "spring", stiffness: 400 },
                      children: [
                        /* @__PURE__ */ jsxDEV(Users, { className: "text-discord-blurple", size: 28 }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 98,
                          columnNumber: 15
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold block", children: "1200+" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 100,
                            columnNumber: 17
                          }),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: "Membres" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 101,
                            columnNumber: 17
                          })
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 99,
                          columnNumber: 15
                        })
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 93,
                      columnNumber: 13
                    }
                  ),
                  /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      className: "flex items-center space-x-3 glass-dark px-8 py-4 rounded-2xl border border-green-400/20",
                      whileHover: { scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" },
                      transition: { type: "spring", stiffness: 400 },
                      children: [
                        /* @__PURE__ */ jsxDEV(Zap, { className: "text-green-400", size: 28 }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 110,
                          columnNumber: 15
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-bold block", children: "Pro" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 112,
                            columnNumber: 17
                          }),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: "Niveau" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 113,
                            columnNumber: 17
                          })
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 111,
                          columnNumber: 15
                        })
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 105,
                      columnNumber: 13
                    }
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 75,
                columnNumber: 11
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 1.2 },
                children: [
                  /* @__PURE__ */ jsxDEV(
                    motion.a,
                    {
                      href: "https://discord.gg/eoz",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "relative group bg-gradient-to-r from-discord-blurple to-purple-600 hover:from-purple-600 hover:to-discord-blurple text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl",
                      whileHover: { scale: 1.05, y: -2 },
                      whileTap: { scale: 0.98 },
                      children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "relative z-10 flex items-center space-x-3", children: [
                          /* @__PURE__ */ jsxDEV("span", { children: "Rejoindre Discord" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 133,
                            columnNumber: 17
                          }),
                          /* @__PURE__ */ jsxDEV(
                            motion.div,
                            {
                              animate: { x: [0, 5, 0] },
                              transition: { duration: 1.5, repeat: Infinity },
                              children: "\u2192"
                            },
                            void 0,
                            false,
                            {
                              fileName: "<stdin>",
                              lineNumber: 134,
                              columnNumber: 17
                            }
                          )
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 132,
                          columnNumber: 15
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-discord-blurple to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 141,
                          columnNumber: 15
                        })
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 124,
                      columnNumber: 13
                    }
                  ),
                  /* @__PURE__ */ jsxDEV(
                    motion.a,
                    {
                      href: "#team",
                      className: "glass-dark border border-white/20 hover:border-white/40 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 backdrop-blur-xl",
                      whileHover: { scale: 1.05, y: -2 },
                      whileTap: { scale: 0.98 },
                      children: "D\xE9couvrir l'\xE9quipe"
                    },
                    void 0,
                    false,
                    {
                      fileName: "<stdin>",
                      lineNumber: 144,
                      columnNumber: 13
                    }
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 118,
                columnNumber: 11
              }
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 32,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: "mt-24",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, delay: 1.5 },
          children: /* @__PURE__ */ jsxDEV(
            motion.a,
            {
              href: "#games",
              className: "inline-block p-4 glass-dark rounded-full hover:bg-white/10 transition-all duration-300",
              animate: { y: [0, -10, 0] },
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              whileHover: { scale: 1.1 },
              children: /* @__PURE__ */ jsxDEV(ArrowDown, { size: 32, className: "text-discord-blurple" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 168,
                columnNumber: 13
              })
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 161,
              columnNumber: 11
            }
          )
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 155,
          columnNumber: 9
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 5
  });
};
var stdin_default = HeroSection;
export {
  stdin_default as default
};
