import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, MessageCircle, Activity, Crown } from "lucide-react";
const DiscordWidget = () => {
  const [discordData, setDiscordData] = useState({
    memberCount: 0,
    onlineCount: 0,
    members: []
  });
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalMembers: 1247,
    onlineMembers: 342,
    staffOnline: 12,
    averageActivity: 87
  });
  useEffect(() => {
    const mockData = {
      memberCount: stats.totalMembers,
      onlineCount: stats.onlineMembers,
      members: [
        {
          id: "1",
          username: "EOZ Teddy \xAE",
          avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
          status: "online",
          role: "Fondateur",
          isStaff: true
        },
        {
          id: "2",
          username: "EOZ Max",
          avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
          status: "online",
          role: "Head FTN",
          isStaff: true
        },
        {
          id: "3",
          username: "EOZ Slavik mitro",
          avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
          status: "dnd",
          role: "Pro Player",
          isStaff: false
        },
        {
          id: "4",
          username: "EOZ Sno0w",
          avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
          status: "online",
          role: "Resp. Discord",
          isStaff: true
        },
        {
          id: "5",
          username: "EOZ | Val",
          avatar: "https://cdn.discordapp.com/embed/avatars/4.png",
          status: "idle",
          role: "Administrateur",
          isStaff: true
        }
      ]
    };
    setTimeout(() => {
      setDiscordData(mockData);
      setLoading(false);
    }, 1500);
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        onlineMembers: prev.onlineMembers + Math.floor(Math.random() * 10 - 5),
        averageActivity: Math.max(70, Math.min(95, prev.averageActivity + Math.floor(Math.random() * 6 - 3)))
      }));
    }, 3e4);
    return () => clearInterval(interval);
  }, []);
  const fetchDiscordData = async () => {
    try {
      const response = await fetch("/api/discord/members");
      if (response.ok) {
        const data = await response.json();
        setDiscordData(data);
      }
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es Discord:", error);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-400";
      case "idle":
        return "bg-yellow-400";
      case "dnd":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "online":
        return "En ligne";
      case "idle":
        return "Absent";
      case "dnd":
        return "Occup\xE9";
      default:
        return "Hors ligne";
    }
  };
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "glass-dark rounded-3xl p-8 border border-white/10",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxDEV(
            motion.h2,
            {
              className: "text-5xl font-black mb-6 gradient-text",
              whileHover: { scale: 1.02 },
              transition: { type: "spring", stiffness: 300 },
              children: "Notre Communaut\xE9 Discord"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 124,
              columnNumber: 9
            }
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-300 leading-relaxed", children: "Rejoignez notre serveur Discord et faites partie de l'aventure EOZ Team" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 131,
            columnNumber: 9
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 123,
          columnNumber: 7
        }),
        loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-16 w-16 border-4 border-discord-blurple border-t-transparent" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 139,
            columnNumber: 13
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 rounded-full border-4 border-discord-blurple/20" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 140,
            columnNumber: 13
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 138,
          columnNumber: 11
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 137,
          columnNumber: 9
        }) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "glass p-8 rounded-2xl border border-discord-blurple/20 group",
                whileHover: { scale: 1.02, borderColor: "rgba(88, 101, 242, 0.4)" },
                transition: { type: "spring", stiffness: 300 },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-discord-blurple/20 rounded-xl", children: /* @__PURE__ */ jsxDEV(Users, { className: "text-discord-blurple", size: 32 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 155,
                      columnNumber: 21
                    }) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 154,
                      columnNumber: 19
                    }),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold", children: "Membres Total" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 158,
                        columnNumber: 21
                      }),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Communaut\xE9 active" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 159,
                        columnNumber: 21
                      })
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 157,
                      columnNumber: 19
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 153,
                    columnNumber: 17
                  }) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 152,
                    columnNumber: 15
                  }),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-end space-x-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-black text-discord-blurple group-hover:text-purple-400 transition-colors", children: discordData.memberCount.toLocaleString() }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 164,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-green-400 text-sm font-semibold mb-1", children: "+12 aujourd'hui" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 167,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 163,
                    columnNumber: 15
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 147,
                columnNumber: 13
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "glass p-8 rounded-2xl border border-green-400/20 group",
                whileHover: { scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" },
                transition: { type: "spring", stiffness: 300 },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-green-400/20 rounded-xl", children: /* @__PURE__ */ jsxDEV(UserCheck, { className: "text-green-400", size: 32 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 179,
                      columnNumber: 21
                    }) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 178,
                      columnNumber: 19
                    }),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold", children: "En Ligne" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 182,
                        columnNumber: 21
                      }),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Membres actifs" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 183,
                        columnNumber: 21
                      })
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 181,
                      columnNumber: 19
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 177,
                    columnNumber: 17
                  }) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 176,
                    columnNumber: 15
                  }),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-end space-x-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-black text-green-400 group-hover:text-green-300 transition-colors", children: stats.onlineMembers }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 188,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-400 text-sm font-semibold mb-1", children: "Pic: 412" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 191,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 187,
                    columnNumber: 15
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 171,
                columnNumber: 13
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "glass p-8 rounded-2xl border border-yellow-400/20 group",
                whileHover: { scale: 1.02, borderColor: "rgba(251, 191, 36, 0.4)" },
                transition: { type: "spring", stiffness: 300 },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4 mb-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-yellow-400/20 rounded-xl", children: /* @__PURE__ */ jsxDEV(Crown, { className: "text-yellow-400", size: 32 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 202,
                      columnNumber: 19
                    }) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 201,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold", children: "Staff Actif" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 205,
                        columnNumber: 19
                      }),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "\xC9quipe de mod\xE9ration" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 206,
                        columnNumber: 19
                      })
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 204,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 200,
                    columnNumber: 15
                  }),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-end space-x-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-black text-yellow-400 group-hover:text-yellow-300 transition-colors", children: stats.staffOnline }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 210,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-gray-400 text-sm font-semibold mb-1", children: "/15 total" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 213,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 209,
                    columnNumber: 15
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 195,
                columnNumber: 13
              }
            ),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "glass p-8 rounded-2xl border border-purple-400/20 group",
                whileHover: { scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" },
                transition: { type: "spring", stiffness: 300 },
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4 mb-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-purple-400/20 rounded-xl", children: /* @__PURE__ */ jsxDEV(Activity, { className: "text-purple-400", size: 32 }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 224,
                      columnNumber: 19
                    }) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 223,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold", children: "Activit\xE9" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 227,
                        columnNumber: 19
                      }),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Score d'engagement" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 228,
                        columnNumber: 19
                      })
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 226,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 222,
                    columnNumber: 15
                  }),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-end space-x-2", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-4xl font-black text-purple-400 group-hover:text-purple-300 transition-colors", children: [
                      stats.averageActivity,
                      "%"
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 232,
                      columnNumber: 17
                    }),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-green-400 text-sm font-semibold mb-1", children: "Excellent" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 235,
                      columnNumber: 17
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 231,
                    columnNumber: 15
                  })
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 217,
                columnNumber: 13
              }
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 146,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "glass p-6 rounded-2xl border border-white/10 flex flex-col", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold mb-6 flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxDEV(MessageCircle, { className: "text-discord-blurple", size: 28 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 243,
                columnNumber: 15
              }),
              /* @__PURE__ */ jsxDEV("span", { children: "Widget Discord" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 244,
                columnNumber: 15
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 242,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex justify-center items-start", children: /* @__PURE__ */ jsxDEV(
              "iframe",
              {
                src: "https://discord.com/widget?id=619555290299236352&theme=dark",
                width: "100%",
                height: "500",
                style: { maxWidth: "350px" },
                allowTransparency: "true",
                frameBorder: "0",
                sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                className: "rounded-xl"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 248,
                columnNumber: 15
              }
            ) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 247,
              columnNumber: 13
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 241,
            columnNumber: 11
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 144,
          columnNumber: 9
        }),
        /* @__PURE__ */ jsxDEV(motion.div, { className: "mt-10 text-center", children: [
          /* @__PURE__ */ jsxDEV(
            motion.a,
            {
              href: "https://discord.gg/eoz",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-discord-blurple to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden",
              whileHover: { scale: 1.05, y: -2 },
              whileTap: { scale: 0.98 },
              children: [
                /* @__PURE__ */ jsxDEV(MessageCircle, { size: 28, className: "group-hover:rotate-12 transition-transform duration-300" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 273,
                  columnNumber: 11
                }),
                /* @__PURE__ */ jsxDEV("span", { children: "Rejoindre le Discord EOZ" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 274,
                  columnNumber: 11
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
                    lineNumber: 275,
                    columnNumber: 11
                  }
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 265,
              columnNumber: 9
            }
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 mt-4 text-sm", children: "\u{1F525} Serveur v\xE9rifi\xE9 \u2022 24/7 Support \u2022 Communaut\xE9 active" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 283,
            columnNumber: 9
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 264,
          columnNumber: 7
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 116,
      columnNumber: 5
    }
  );
};
var stdin_default = DiscordWidget;
export {
  stdin_default as default
};
