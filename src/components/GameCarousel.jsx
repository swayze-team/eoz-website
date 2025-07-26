import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Calendar, Trophy, Users, ExternalLink, Play, Award, Target, Crown, Gamepad2, Medal } from "lucide-react";
const GameCarousel = () => {
  const [games, setGames] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("popular");
  const [selectedGame, setSelectedGame] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollInterval, setScrollInterval] = useState(5e3);
  const [gameFilter, setGameFilter] = useState("all");
  const teamGamesData = [
    {
      id: 1,
      name: "Fortnite",
      slug: "fortnite",
      background_image: "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      rating: 4.2,
      released: "2017-07-21",
      genres: [{ name: "Battle Royale" }, { name: "Shooter" }],
      description: "Le jeu phare d'EOZ Team avec nos meilleurs joueurs pro dans la comp\xE9tition internationale",
      players: ["EOZ Slavik mitro", "EOZ Odin", "EOZ Ecl", "EOZ Lysoxefn", "EOZ Mystiqul"],
      achievements: ["FNCS Qualification", "Div 1 Players", "$10k+ Earnings", "62k PR Record", "Multiple Championships"],
      competitive_level: "Pro",
      team_rank: "#1"
    },
    {
      id: 2,
      name: "Rainbow Six Siege",
      slug: "rainbow-six-siege",
      background_image: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
      rating: 4.1,
      released: "2015-12-01",
      genres: [{ name: "Shooter" }, { name: "Tactical" }],
      description: "Strat\xE9gie et pr\xE9cision avec notre \xE9quipe R6 tactique d'\xE9lite",
      players: ["EOZ Magma"],
      achievements: ["Ranked Diamond", "Team Captain", "ESL Qualifier", "Pro League Ready"],
      competitive_level: "Semi-Pro",
      team_rank: "#3"
    },
    {
      id: 3,
      name: "Rocket League",
      slug: "rocket-league",
      background_image: "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      rating: 4.4,
      released: "2015-07-07",
      genres: [{ name: "Sports" }, { name: "Racing" }],
      description: "Football et vitesse combin\xE9s avec style et technique perfectionn\xE9e",
      players: ["EOZ Puhqz", "EOZ LynorX"],
      achievements: ["Grand Champion", "Tournament Wins", "RLCS Participant", "Championship Series"],
      competitive_level: "Semi-Pro",
      team_rank: "#2"
    }
  ];
  const competitionsData = [];
  const filterOptions = [
    { value: "all", label: "Tous les jeux", icon: Gamepad2 },
    { value: "pro", label: "Niveau Pro", icon: Crown },
    { value: "semi-pro", label: "Semi-Pro", icon: Medal }
  ];
  useEffect(() => {
    const loadGames = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setGames(teamGamesData);
        setCompetitions(competitionsData);
      } catch (error) {
        console.error("Erreur lors du chargement des jeux:", error);
        setGames(teamGamesData);
        setCompetitions(competitionsData);
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);
  useEffect(() => {
    if (autoScroll && games.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, Math.ceil(getFilteredGames().length / 3)));
      }, scrollInterval);
      return () => clearInterval(interval);
    }
  }, [autoScroll, games.length, scrollInterval, gameFilter]);
  const getFilteredGames = () => {
    if (gameFilter === "all") return games;
    return games.filter((game) => {
      switch (gameFilter) {
        case "pro":
          return game.competitive_level === "Pro";
        case "semi-pro":
          return game.competitive_level === "Semi-Pro";
        default:
          return true;
      }
    });
  };
  const nextSlide = useCallback(() => {
    const filteredGames = getFilteredGames();
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, Math.ceil(filteredGames.length / 3)));
  }, [games.length, gameFilter]);
  const prevSlide = useCallback(() => {
    const filteredGames = getFilteredGames();
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, Math.ceil(filteredGames.length / 3))) % Math.max(1, Math.ceil(filteredGames.length / 3)));
  }, [games.length, gameFilter]);
  const getRankColor = (rank) => {
    switch (rank) {
      case "#1":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
      case "#2":
        return "text-gray-300 border-gray-300/30 bg-gray-300/10";
      case "#3":
        return "text-orange-400 border-orange-400/30 bg-orange-400/10";
      default:
        return "text-blue-400 border-blue-400/30 bg-blue-400/10";
    }
  };
  const getCompetitiveColor = (level) => {
    switch (level) {
      case "Pro":
        return "text-red-400 bg-red-400/20 border-red-400/30";
      case "Semi-Pro":
        return "text-orange-400 bg-orange-400/20 border-orange-400/30";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/30";
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/20 border-green-400/50";
      case "upcoming":
        return "text-orange-400 bg-orange-400/20 border-orange-400/50";
      case "completed":
        return "text-gray-400 bg-gray-400/20 border-gray-400/50";
      default:
        return "text-blue-400 bg-blue-400/20 border-blue-400/50";
    }
  };
  if (loading) {
    return React.createElement(
      "section",
      { className: "py-20 px-4" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto" },
        React.createElement("div", { className: "text-center" }, [
          React.createElement(motion.div, {
            key: "loading-spinner",
            className: "relative mx-auto mb-8",
            style: { width: "100px", height: "100px" },
            initial: { opacity: 0 },
            animate: { opacity: 1 }
          }, [
            React.createElement("div", {
              key: "spinner-bg",
              className: "absolute inset-0 rounded-full border-4 border-discord-blurple/20"
            }),
            React.createElement(motion.div, {
              key: "spinner-1",
              className: "absolute inset-0 rounded-full border-4 border-transparent border-t-discord-blurple",
              animate: { rotate: 360 },
              transition: { duration: 1, repeat: Infinity, ease: "linear" }
            }),
            React.createElement(motion.div, {
              key: "spinner-2",
              className: "absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500",
              animate: { rotate: -360 },
              transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }),
            React.createElement(motion.div, {
              key: "spinner-3",
              className: "absolute inset-4 rounded-full border-4 border-transparent border-t-blue-400",
              animate: { rotate: 360 },
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            })
          ]),
          React.createElement(motion.p, {
            key: "loading-text",
            className: "text-gray-300 text-xl font-medium mb-4",
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { duration: 2, repeat: Infinity }
          }, "Chargement des jeux de l'\xE9quipe..."),
          React.createElement(motion.div, {
            key: "loading-dots",
            className: "flex justify-center space-x-2",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 }
          }, [...Array(3)].map(
            (_, i) => React.createElement(motion.div, {
              key: `loading-dot-${i}`,
              className: "w-3 h-3 bg-discord-blurple rounded-full",
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              },
              transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1
              }
            })
          ))
        ])
      )
    );
  }
  return React.createElement(
    "section",
    { className: "py-20 px-4" },
    React.createElement("div", { className: "max-w-7xl mx-auto" }, [
      /* Enhanced Header */
      React.createElement(motion.div, {
        key: "header",
        className: "text-center mb-16",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
      }, [
        React.createElement(motion.h2, {
          key: "title",
          className: "text-6xl font-black mb-6 gradient-text",
          whileHover: { scale: 1.02 },
          transition: { type: "spring", stiffness: 300 }
        }, "Nos Jeux"),
        React.createElement("p", {
          key: "subtitle",
          className: "text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
        }, "Les titres sur lesquels notre \xE9quipe domine la comp\xE9tition internationale"),
        /* Enhanced Statistics Bar */
        React.createElement("div", {
          key: "stats-bar",
          className: "flex justify-center space-x-8 text-sm mb-8"
        }, [
          React.createElement("div", {
            key: "games-stat",
            className: "flex items-center space-x-2 glass-dark px-4 py-2 rounded-full"
          }, [
            React.createElement(Gamepad2, { key: "games-icon", size: 16, className: "text-discord-blurple" }),
            React.createElement("span", { key: "games-count", className: "text-gray-300" }, `${games.length} Jeux`)
          ]),
          React.createElement("div", {
            key: "competitions-stat",
            className: "flex items-center space-x-2 glass-dark px-4 py-2 rounded-full"
          }, [
            React.createElement(Trophy, { key: "trophy-icon", size: 16, className: "text-yellow-400" }),
            React.createElement("span", { key: "competitions-count", className: "text-gray-300" }, `${competitions.length} Comp\xE9titions`)
          ]),
          React.createElement("div", {
            key: "players-stat",
            className: "flex items-center space-x-2 glass-dark px-4 py-2 rounded-full"
          }, [
            React.createElement(Users, { key: "users-icon", size: 16, className: "text-green-400" }),
            React.createElement("span", { key: "players-count", className: "text-gray-300" }, `${games.reduce((acc, game) => acc + game.players.length, 0)} Joueurs`)
          ])
        ])
      ]),
      /* Enhanced Category Tabs */
      React.createElement(
        "div",
        { key: "category-tabs", className: "flex justify-center mb-12" },
        React.createElement("div", { className: "glass-dark rounded-2xl p-2 flex space-x-2" }, [
          { id: "popular", label: "Jeux EOZ Team", icon: Star },
          { id: "competitive", label: "Comp\xE9titions", icon: Trophy }
        ].map((category) => {
          const IconComponent = category.icon;
          return React.createElement(motion.button, {
            key: category.id,
            onClick: () => setActiveCategory(category.id),
            className: `flex items-center space-x-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeCategory === category.id ? "bg-discord-blurple text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
          }, [
            React.createElement(IconComponent, { key: "icon", size: 20 }),
            React.createElement("span", { key: "label" }, category.label),
            activeCategory === category.id && React.createElement(motion.div, {
              key: "indicator",
              className: "w-2 h-2 bg-white rounded-full",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 400 }
            })
          ]);
        }))
      ),
      /* Content based on active category */
      React.createElement(AnimatePresence, { key: "content", mode: "wait" }, [
        activeCategory === "popular" && React.createElement(motion.div, {
          key: "games-content",
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 50 },
          transition: { duration: 0.5 }
        }, [
          /* Game Filter Options */
          React.createElement(
            "div",
            { key: "filters", className: "flex justify-center mb-8" },
            React.createElement(
              "div",
              { className: "flex space-x-2 glass-dark rounded-xl p-2" },
              filterOptions.map((option) => {
                const IconComponent = option.icon;
                return React.createElement(motion.button, {
                  key: option.value,
                  onClick: () => setGameFilter(option.value),
                  className: `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${gameFilter === option.value ? "bg-discord-blurple text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`,
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 }
                }, [
                  React.createElement(IconComponent, { key: "icon", size: 16 }),
                  React.createElement("span", { key: "label" }, option.label)
                ]);
              })
            )
          ),
          /* Games Grid */
          React.createElement(
            "div",
            { key: "games-grid", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" },
            getFilteredGames().map(
              (game, index) => React.createElement(motion.div, {
                key: game.id,
                className: "glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-discord-blurple/50 transition-all duration-300 group cursor-pointer",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1, duration: 0.5 },
                whileHover: { scale: 1.02, y: -5 },
                onClick: () => setSelectedGame(game)
              }, [
                /* Game Image */
                React.createElement("div", { key: "image", className: "relative h-48 overflow-hidden" }, [
                  React.createElement("img", {
                    key: "img",
                    src: game.background_image,
                    alt: game.name,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  }),
                  React.createElement("div", {
                    key: "gradient",
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  }),
                  React.createElement("div", {
                    key: "rank",
                    className: `absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold border ${getRankColor(game.team_rank)}`
                  }, game.team_rank),
                  React.createElement("div", {
                    key: "level",
                    className: `absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border ${getCompetitiveColor(game.competitive_level)}`
                  }, game.competitive_level)
                ]),
                /* Game Info */
                React.createElement("div", { key: "info", className: "p-6" }, [
                  React.createElement("div", { key: "header", className: "flex items-center justify-between mb-3" }, [
                    React.createElement("h3", {
                      key: "name",
                      className: "text-2xl font-bold text-white group-hover:text-discord-blurple transition-colors"
                    }, game.name),
                    React.createElement("div", { key: "rating", className: "flex items-center space-x-1" }, [
                      React.createElement(Star, { key: "star", size: 16, className: "text-yellow-400 fill-current" }),
                      React.createElement("span", { key: "rating-value", className: "text-sm text-gray-300 font-medium" }, game.rating)
                    ])
                  ]),
                  React.createElement("p", {
                    key: "description",
                    className: "text-gray-400 text-sm mb-4 line-clamp-2"
                  }, game.description),
                  React.createElement(
                    "div",
                    { key: "genres", className: "flex flex-wrap gap-2 mb-4" },
                    game.genres.map(
                      (genre, genreIndex) => React.createElement("span", {
                        key: `genre-${genreIndex}`,
                        className: "px-2 py-1 glass text-xs rounded-full text-gray-300"
                      }, genre.name)
                    )
                  ),
                  React.createElement("div", { key: "stats", className: "space-y-2" }, [
                    React.createElement("div", { key: "players", className: "flex items-center space-x-2 text-sm" }, [
                      React.createElement(Users, { key: "users-icon", size: 14, className: "text-discord-blurple" }),
                      React.createElement("span", { key: "players-count", className: "text-gray-300" }, `${game.players.length} joueur${game.players.length > 1 ? "s" : ""}`)
                    ]),
                    React.createElement("div", { key: "achievements", className: "flex items-center space-x-2 text-sm" }, [
                      React.createElement(Award, { key: "award-icon", size: 14, className: "text-yellow-400" }),
                      React.createElement("span", { key: "achievements-count", className: "text-gray-300" }, `${game.achievements.length} succ\xE8s`)
                    ])
                  ])
                ])
              ])
            )
          ),
          /* Enhanced Controls */
          React.createElement("div", { key: "controls", className: "flex justify-center items-center space-x-6" }, [
            React.createElement("label", { key: "auto-scroll", className: "flex items-center space-x-2 text-sm text-gray-400" }, [
              React.createElement("input", {
                key: "checkbox",
                type: "checkbox",
                checked: autoScroll,
                onChange: (e) => setAutoScroll(e.target.checked),
                className: "form-checkbox h-4 w-4 text-discord-blurple rounded"
              }),
              React.createElement("span", { key: "label" }, "D\xE9filement automatique")
            ]),
            React.createElement("div", { key: "nav-buttons", className: "flex space-x-2" }, [
              React.createElement(motion.button, {
                key: "prev",
                onClick: prevSlide,
                className: "p-2 glass-dark rounded-lg hover:bg-white/10 transition-colors",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 }
              }, React.createElement(ChevronLeft, { size: 20, className: "text-discord-blurple" })),
              React.createElement(motion.button, {
                key: "next",
                onClick: nextSlide,
                className: "p-2 glass-dark rounded-lg hover:bg-white/10 transition-colors",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 }
              }, React.createElement(ChevronRight, { size: 20, className: "text-discord-blurple" }))
            ])
          ])
        ]),
        activeCategory === "competitive" && React.createElement(
          motion.div,
          {
            key: "competitions-content",
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -50 },
            transition: { duration: 0.5 }
          },
          competitionsData.length > 0 ? React.createElement(
            "div",
            { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" },
            competitions.map(
              (competition, index) => React.createElement(motion.div, {
                key: competition.id,
                className: "glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1, duration: 0.5 },
                whileHover: { scale: 1.02 }
              }, [
                React.createElement("div", { key: "comp-image", className: "relative h-40 overflow-hidden" }, [
                  React.createElement("img", {
                    key: "comp-img",
                    src: competition.image,
                    alt: competition.name,
                    className: "w-full h-full object-cover"
                  }),
                  React.createElement("div", {
                    key: "comp-gradient",
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  }),
                  React.createElement("div", {
                    key: "comp-status",
                    className: `absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(competition.status)}`
                  }, competition.status === "active" ? "En cours" : competition.status === "upcoming" ? "\xC0 venir" : "Termin\xE9"),
                  React.createElement("div", {
                    key: "comp-region",
                    className: "absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-bold text-white"
                  }, competition.region)
                ]),
                React.createElement("div", { key: "comp-info", className: "p-6" }, [
                  React.createElement("h3", { key: "comp-name", className: "text-xl font-bold text-white mb-2" }, competition.name),
                  React.createElement("p", { key: "comp-desc", className: "text-gray-400 text-sm mb-4" }, competition.description),
                  React.createElement("div", { key: "comp-details", className: "space-y-2 text-sm" }, [
                    React.createElement("div", { key: "prize", className: "flex items-center space-x-2" }, [
                      React.createElement(Trophy, { key: "trophy-icon", size: 14, className: "text-yellow-400" }),
                      React.createElement("span", { key: "prize-text", className: "text-gray-300" }, `Prize Pool: ${competition.prize_pool}`)
                    ]),
                    React.createElement("div", { key: "participants", className: "flex items-center space-x-2" }, [
                      React.createElement(Users, { key: "users-icon", size: 14, className: "text-discord-blurple" }),
                      React.createElement("span", { key: "participants-text", className: "text-gray-300" }, competition.participants)
                    ]),
                    React.createElement("div", { key: "dates", className: "flex items-center space-x-2" }, [
                      React.createElement(Calendar, { key: "calendar-icon", size: 14, className: "text-green-400" }),
                      React.createElement(
                        "span",
                        { key: "dates-text", className: "text-gray-300" },
                        `${new Date(competition.start_date).toLocaleDateString("fr-FR")} - ${new Date(competition.end_date).toLocaleDateString("fr-FR")}`
                      )
                    ]),
                    competition.teams_participating && React.createElement("div", { key: "teams", className: "flex items-center space-x-2" }, [
                      React.createElement(Target, { key: "target-icon", size: 14, className: "text-purple-400" }),
                      React.createElement("span", { key: "teams-text", className: "text-gray-300" }, `${competition.teams_participating} \xE9quipes`)
                    ]),
                    competition.current_standing && React.createElement("div", { key: "standing", className: "flex items-center space-x-2" }, [
                      React.createElement(Medal, { key: "medal-icon", size: 14, className: "text-orange-400" }),
                      React.createElement("span", { key: "standing-text", className: "text-gray-300" }, `Position: ${competition.current_standing}`)
                    ])
                  ])
                ])
              ])
            )
          ) : React.createElement("div", { className: "text-center py-16" }, [
            React.createElement("div", {
              key: "no-tournaments",
              className: "glass-dark rounded-2xl p-12 max-w-md mx-auto"
            }, [
              React.createElement(Trophy, {
                key: "trophy-icon",
                size: 64,
                className: "text-gray-400 mx-auto mb-4"
              }),
              React.createElement("h3", {
                key: "no-tournaments-title",
                className: "text-2xl font-bold text-gray-300 mb-2"
              }, "Aucun tournoi actuel"),
              React.createElement("p", {
                key: "no-tournaments-desc",
                className: "text-gray-400"
              }, "Les informations des comp\xE9titions seront affich\xE9es ici d\xE8s qu'elles seront disponibles.")
            ])
          ])
        )
      ]),
      /* Game Detail Modal */
      selectedGame && React.createElement(
        motion.div,
        {
          key: "modal",
          className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setSelectedGame(null)
        },
        React.createElement(motion.div, {
          key: "modal-content",
          className: "glass-dark rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
          transition: { type: "spring", stiffness: 300 },
          onClick: (e) => e.stopPropagation()
        }, [
          /* Modal header with game image */
          React.createElement("div", { key: "modal-header", className: "relative h-72 overflow-hidden rounded-t-3xl" }, [
            React.createElement("img", {
              key: "modal-img",
              src: selectedGame.background_image,
              alt: selectedGame.name,
              className: "w-full h-full object-cover"
            }),
            React.createElement("div", {
              key: "modal-gradient",
              className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            }),
            React.createElement("button", {
              key: "close-btn",
              onClick: () => setSelectedGame(null),
              className: "absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors text-white text-xl font-bold"
            }, "\xD7"),
            React.createElement("div", { key: "modal-title", className: "absolute bottom-8 left-8 right-8" }, [
              React.createElement("h2", { key: "game-title", className: "text-5xl font-black text-white mb-4" }, selectedGame.name),
              React.createElement("div", { key: "badges", className: "flex items-center space-x-4" }, [
                React.createElement("span", {
                  key: "rank-badge",
                  className: `px-4 py-2 rounded-full text-sm font-bold border ${getRankColor(selectedGame.team_rank)}`
                }, `Rang ${selectedGame.team_rank}`),
                React.createElement("span", {
                  key: "level-badge",
                  className: `px-4 py-2 rounded-full text-sm font-bold border ${getCompetitiveColor(selectedGame.competitive_level)}`
                }, selectedGame.competitive_level),
                React.createElement("div", { key: "rating", className: "flex items-center space-x-1" }, [
                  React.createElement(Star, { key: "star", className: "text-yellow-400 fill-current", size: 20 }),
                  React.createElement("span", { key: "rating-value", className: "text-white font-bold" }, selectedGame.rating)
                ])
              ])
            ])
          ]),
          /* Modal content */
          React.createElement("div", { key: "modal-body", className: "p-8" }, [
            React.createElement("p", {
              key: "game-desc",
              className: "text-xl text-gray-300 mb-8 leading-relaxed"
            }, selectedGame.description),
            React.createElement("div", { key: "modal-grid", className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" }, [
              /* Players section */
              React.createElement("div", { key: "players-section" }, [
                React.createElement("h3", {
                  key: "players-title",
                  className: "text-2xl font-bold text-white mb-6 flex items-center space-x-2"
                }, [
                  React.createElement(Users, { key: "users-icon", className: "text-discord-blurple" }),
                  React.createElement("span", { key: "title-text" }, "Joueurs")
                ]),
                React.createElement(
                  "div",
                  { key: "players-list", className: "space-y-3" },
                  selectedGame.players.map(
                    (player, index) => React.createElement("div", {
                      key: `player-${index}`,
                      className: "flex items-center space-x-3 glass p-4 rounded-xl hover:bg-white/5 transition-colors"
                    }, [
                      React.createElement("div", {
                        key: "player-avatar",
                        className: "w-10 h-10 bg-discord-blurple rounded-full flex items-center justify-center text-white font-bold"
                      }, player.charAt(0)),
                      React.createElement("span", {
                        key: "player-name",
                        className: "text-gray-300 font-medium text-lg"
                      }, player)
                    ])
                  )
                )
              ]),
              /* Achievements section */
              React.createElement("div", { key: "achievements-section" }, [
                React.createElement("h3", {
                  key: "achievements-title",
                  className: "text-2xl font-bold text-white mb-6 flex items-center space-x-2"
                }, [
                  React.createElement(Award, { key: "award-icon", className: "text-yellow-400" }),
                  React.createElement("span", { key: "title-text" }, "Succ\xE8s")
                ]),
                React.createElement(
                  "div",
                  { key: "achievements-list", className: "space-y-3" },
                  selectedGame.achievements.map(
                    (achievement, index) => React.createElement("div", {
                      key: `achievement-${index}`,
                      className: "flex items-center space-x-3 glass p-4 rounded-xl hover:bg-white/5 transition-colors"
                    }, [
                      React.createElement(Crown, { key: "crown-icon", size: 20, className: "text-yellow-400" }),
                      React.createElement("span", {
                        key: "achievement-text",
                        className: "text-gray-300 font-medium"
                      }, achievement)
                    ])
                  )
                )
              ])
            ]),
            /* Recent Tournaments */
            selectedGame.recent_tournaments && selectedGame.recent_tournaments.length > 0 && React.createElement("div", { key: "tournaments-section" }, [
              React.createElement("h3", {
                key: "tournaments-title",
                className: "text-2xl font-bold text-white mb-6 flex items-center space-x-2"
              }, [
                React.createElement(Trophy, { key: "trophy-icon", className: "text-yellow-400" }),
                React.createElement("span", { key: "title-text" }, "Tournois R\xE9cents")
              ]),
              React.createElement(
                "div",
                { key: "tournaments-grid", className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                selectedGame.recent_tournaments.map(
                  (tournament, index) => React.createElement("div", {
                    key: `tournament-${index}`,
                    className: "glass p-4 rounded-xl"
                  }, [
                    React.createElement("h4", {
                      key: "tournament-name",
                      className: "font-bold text-white mb-2"
                    }, tournament.name),
                    React.createElement("div", { key: "placement-row", className: "flex justify-between items-center mb-2" }, [
                      React.createElement("span", { key: "placement-label", className: "text-gray-400 text-sm" }, "Placement:"),
                      React.createElement("span", { key: "placement-value", className: "text-orange-400 font-bold" }, tournament.placement)
                    ]),
                    React.createElement("div", { key: "prize-row", className: "flex justify-between items-center" }, [
                      React.createElement("span", { key: "prize-label", className: "text-gray-400 text-sm" }, "Prix:"),
                      React.createElement("span", { key: "prize-value", className: "text-green-400 font-bold" }, tournament.prize)
                    ])
                  ])
                )
              )
            ])
          ])
        ])
      )
    ])
  );
};
var stdin_default = GameCarousel;
export {
  stdin_default as default
};
