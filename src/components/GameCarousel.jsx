import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Calendar, Trophy, Users, ExternalLink, Play } from "lucide-react";
const GameCarousel = () => {
  const [games, setGames] = useState([]);
  const [fortniteCompetitions, setFortniteCompetitions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("popular");
  const teamGames = ["fortnite", "rainbow-six-siege", "rocket-league"];
  useEffect(() => {
    fetchGames();
    fetchFortniteCompetitions();
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, Math.ceil(games.length / 3)));
    }, 4e3);
    return () => clearInterval(interval);
  }, [games.length]);
  const fetchGames = async () => {
    try {
      const gamePromises = teamGames.map(async (slug) => {
        const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=33da0029de88420b9577e2b02c7fb759`);
        return await response.json();
      });
      const gameResults = await Promise.all(gamePromises);
      setGames(gameResults.filter((game) => game && game.id));
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des jeux:", error);
      setGames([
        {
          id: 1,
          name: "Fortnite",
          background_image: "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          rating: 4.2,
          released: "2017-07-21",
          genres: [{ name: "Battle Royale" }, { name: "Shooter" }]
        },
        {
          id: 2,
          name: "Rainbow Six Siege",
          background_image: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          rating: 4.1,
          released: "2015-12-01",
          genres: [{ name: "Shooter" }, { name: "Tactical" }]
        },
        {
          id: 3,
          name: "Rocket League",
          background_image: "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          rating: 4.4,
          released: "2015-07-07",
          genres: [{ name: "Sports" }, { name: "Racing" }]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };
  const fetchFortniteCompetitions = async () => {
    try {
      const response = await fetch("https://fortnite-api.com/v1/playlists", {
        headers: {
          "Authorization": "e57fbf38-7012-4df1-baf4-f0acc1162b9a"
        }
      });
      const data = await response.json();
      if (data.status === 200 && data.data) {
        const competitivePlaylist = data.data.filter(
          (playlist) => playlist.name && (playlist.name.toLowerCase().includes("arena") || playlist.name.toLowerCase().includes("ranked") || playlist.name.toLowerCase().includes("cup"))
        );
        setFortniteCompetitions(competitivePlaylist.slice(0, 6));
      }
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des comp\xE9titions Fortnite:", error);
      setFortniteCompetitions([
        {
          id: "arena-solo",
          name: "Arena Solo",
          description: "Mode comp\xE9titif solo class\xE9",
          images: { showcase: "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg" }
        },
        {
          id: "arena-duo",
          name: "Arena Duo",
          description: "Mode comp\xE9titif duo class\xE9",
          images: { showcase: "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg" }
        },
        {
          id: "fncs",
          name: "FNCS",
          description: "Fortnite Champion Series",
          images: { showcase: "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg" }
        }
      ]);
    }
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, Math.ceil(games.length / 3)));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, Math.ceil(games.length / 3))) % Math.max(1, Math.ceil(games.length / 3)));
  };
  if (loading) {
    return /* @__PURE__ */ jsxDEV("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-16 w-16 border-4 border-discord-blurple border-t-transparent mx-auto" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 129,
          columnNumber: 15
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 rounded-full border-4 border-discord-blurple/20" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 130,
          columnNumber: 15
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 128,
        columnNumber: 13
      }),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 mt-6 text-lg", children: "Chargement des jeux..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 132,
        columnNumber: 13
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 127,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 126,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 125,
      columnNumber: 7
    });
  }
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "text-center mb-16",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV(
            motion.h2,
            {
              className: "text-6xl font-black mb-6 gradient-text",
              whileHover: { scale: 1.02 },
              transition: { type: "spring", stiffness: 300 },
              children: "Nos Jeux"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 149,
              columnNumber: 11
            }
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed", children: "Les titres sur lesquels notre \xE9quipe domine la comp\xE9tition" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 156,
            columnNumber: 11
          })
        ]
      },
      void 0,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 142,
        columnNumber: 9
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-dark rounded-2xl p-2 flex space-x-2", children: [
      { id: "popular", label: "Jeux EOZ Team", icon: Star },
      { id: "competitive", label: "Comp\xE9titions", icon: Trophy }
    ].map((category) => {
      const IconComponent = category.icon;
      return /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveCategory(category.id),
          className: `flex items-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeCategory === category.id ? "bg-discord-blurple text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
          children: [
            /* @__PURE__ */ jsxDEV(IconComponent, { size: 20 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 179,
              columnNumber: 19
            }),
            /* @__PURE__ */ jsxDEV("span", { children: category.label }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 180,
              columnNumber: 19
            })
          ]
        },
        category.id,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 170,
          columnNumber: 17
        }
      );
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 163,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 162,
      columnNumber: 9
    }),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: [
      activeCategory === "popular" && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "glass-dark rounded-3xl p-8 mb-12",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-bold text-white flex items-center space-x-3", children: [
                /* @__PURE__ */ jsxDEV(Users, { className: "text-discord-blurple", size: 32 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 199,
                  columnNumber: 19
                }),
                /* @__PURE__ */ jsxDEV("span", { children: "Jeux de Comp\xE9tition EOZ" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 200,
                  columnNumber: 19
                })
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 198,
                columnNumber: 17
              }),
              /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-3", children: [
                /* @__PURE__ */ jsxDEV(
                  motion.button,
                  {
                    onClick: prevSlide,
                    className: "glass p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: /* @__PURE__ */ jsxDEV(ChevronLeft, { size: 24, className: "group-hover:text-discord-blurple transition-colors" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 209,
                      columnNumber: 21
                    })
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 203,
                    columnNumber: 19
                  }
                ),
                /* @__PURE__ */ jsxDEV(
                  motion.button,
                  {
                    onClick: nextSlide,
                    className: "glass p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: /* @__PURE__ */ jsxDEV(ChevronRight, { size: 24, className: "group-hover:text-discord-blurple transition-colors" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 217,
                      columnNumber: 21
                    })
                  },
                  void 0,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 211,
                    columnNumber: 19
                  }
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 202,
                columnNumber: 17
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 197,
              columnNumber: 15
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden relative", children: /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "flex space-x-8",
                animate: { x: -currentIndex * 420 },
                transition: { type: "spring", stiffness: 300, damping: 30 },
                children: games.map((game, index) => /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    className: "flex-shrink-0 w-96 group",
                    whileHover: { y: -8, scale: 1.02 },
                    transition: { type: "spring", stiffness: 400 },
                    children: /* @__PURE__ */ jsxDEV("div", { className: "glass rounded-2xl overflow-hidden hover:border-discord-blurple/50 border border-white/10 transition-all duration-300 relative", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden", children: [
                        /* @__PURE__ */ jsxDEV(
                          "img",
                          {
                            src: game.background_image,
                            alt: game.name,
                            className: "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                          },
                          void 0,
                          false,
                          {
                            fileName: "<stdin>",
                            lineNumber: 237,
                            columnNumber: 27
                          }
                        ),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 242,
                          columnNumber: 27
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md px-3 py-2 rounded-full", children: [
                          /* @__PURE__ */ jsxDEV(Star, { size: 16, className: "text-yellow-400" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 244,
                            columnNumber: 29
                          }),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold", children: game.rating?.toFixed(1) || "N/A" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 245,
                            columnNumber: 29
                          })
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 243,
                          columnNumber: 27
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-discord-blurple/90 backdrop-blur-md p-4 rounded-full", children: /* @__PURE__ */ jsxDEV(Play, { size: 32, className: "text-white" }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 249,
                          columnNumber: 31
                        }) }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 248,
                          columnNumber: 29
                        }) }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 247,
                          columnNumber: 27
                        })
                      ] }, void 0, true, {
                        fileName: "<stdin>",
                        lineNumber: 236,
                        columnNumber: 25
                      }),
                      /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-bold text-white mb-3 group-hover:text-discord-blurple transition-colors", children: game.name }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 254,
                          columnNumber: 27
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2 mb-4", children: [
                          /* @__PURE__ */ jsxDEV(Calendar, { size: 16, className: "text-gray-400" }, void 0, false, {
                            fileName: "<stdin>",
                            lineNumber: 258,
                            columnNumber: 29
                          }),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-400", children: [
                            "Sortie: ",
                            game.released ? new Date(game.released).getFullYear() : "N/A"
                          ] }, void 0, true, {
                            fileName: "<stdin>",
                            lineNumber: 259,
                            columnNumber: 29
                          })
                        ] }, void 0, true, {
                          fileName: "<stdin>",
                          lineNumber: 257,
                          columnNumber: 27
                        }),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: game.genres?.slice(0, 3).map((genre, idx) => /* @__PURE__ */ jsxDEV(
                          "span",
                          {
                            className: "px-3 py-1 text-xs bg-discord-blurple/20 text-discord-blurple rounded-full font-medium border border-discord-blurple/30",
                            children: genre.name
                          },
                          idx,
                          false,
                          {
                            fileName: "<stdin>",
                            lineNumber: 265,
                            columnNumber: 31
                          }
                        )) }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 263,
                          columnNumber: 27
                        })
                      ] }, void 0, true, {
                        fileName: "<stdin>",
                        lineNumber: 253,
                        columnNumber: 25
                      })
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 235,
                      columnNumber: 23
                    })
                  },
                  game.id,
                  false,
                  {
                    fileName: "<stdin>",
                    lineNumber: 229,
                    columnNumber: 21
                  }
                ))
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 223,
                columnNumber: 17
              }
            ) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 222,
              columnNumber: 15
            })
          ]
        },
        "games",
        true,
        {
          fileName: "<stdin>",
          lineNumber: 189,
          columnNumber: 13
        }
      ),
      activeCategory === "competitive" && fortniteCompetitions.length > 0 && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "glass-dark rounded-3xl p-8",
          children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-bold text-white mb-8 flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxDEV(Trophy, { className: "text-yellow-400", size: 32 }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 292,
                columnNumber: 17
              }),
              /* @__PURE__ */ jsxDEV("span", { children: "Comp\xE9titions Fortnite" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 293,
                columnNumber: 17
              }),
              /* @__PURE__ */ jsxDEV("span", { className: "text-lg text-gray-400 font-normal", children: "\u2022 Modes Actifs" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 294,
                columnNumber: 17
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 291,
              columnNumber: 15
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: fortniteCompetitions.map((competition, index) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                className: "glass rounded-2xl p-6 hover:bg-white/10 hover:border-discord-blurple/50 border border-white/10 transition-all duration-300 group",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1 },
                whileHover: { y: -5, scale: 1.02 },
                children: [
                  competition.images?.showcase && /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden rounded-xl mb-4", children: [
                    /* @__PURE__ */ jsxDEV(
                      "img",
                      {
                        src: competition.images.showcase,
                        alt: competition.name,
                        className: "w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      },
                      void 0,
                      false,
                      {
                        fileName: "<stdin>",
                        lineNumber: 308,
                        columnNumber: 25
                      }
                    ),
                    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 313,
                      columnNumber: 25
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 307,
                    columnNumber: 23
                  }),
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-white mb-3 group-hover:text-discord-blurple transition-colors", children: competition.name }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 316,
                    columnNumber: 21
                  }),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 mb-4", children: competition.description || "Mode de jeu comp\xE9titif officiel" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 319,
                    columnNumber: 21
                  }),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium border border-green-500/30", children: "Actif" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 323,
                      columnNumber: 23
                    }),
                    /* @__PURE__ */ jsxDEV(ExternalLink, { size: 16, className: "text-gray-400 group-hover:text-discord-blurple transition-colors" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 326,
                      columnNumber: 23
                    })
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 322,
                    columnNumber: 21
                  })
                ]
              },
              competition.id,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 298,
                columnNumber: 19
              }
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 296,
              columnNumber: 15
            })
          ]
        },
        "competitions",
        true,
        {
          fileName: "<stdin>",
          lineNumber: 283,
          columnNumber: 13
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 187,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 141,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 140,
    columnNumber: 5
  });
};
var stdin_default = GameCarousel;
export {
  stdin_default as default
};
