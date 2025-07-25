import { jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Shield, Gamepad2, Users, Trophy, Star, Zap, Palette, Video, Wrench } from "lucide-react";
const TeamRoster = () => {
  const [activeTab, setActiveTab] = useState("staff");
  const staffData = {
    leadership: {
      title: "Direction",
      icon: Crown,
      color: "text-yellow-400",
      members: [
        { name: "EOZ Teddy \xAE", role: "Fondateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F451}" },
        { name: "EOZ \u{1D7DF}\u{1D425}\u{1D428}\u{1D41D}\u{1D422}\u{1D7DF}\u{1D7CF}\u{1D7D7}", role: "Co-Fondateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F451}" }
      ]
    },
    management: {
      title: "Management",
      icon: Shield,
      color: "text-blue-400",
      members: [
        { name: "EOZ Sno0w", role: "Responsable Discord", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F527}" },
        { name: "EOZ Nez'Uro", role: "Responsable Publicitaire", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F514}" },
        { name: "EOZ Sno0w", role: "Responsable BOT / DEV", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F4BB}" }
      ]
    },
    moderation: {
      title: "Mod\xE9ration",
      icon: Zap,
      color: "text-purple-400",
      members: [
        { name: "EOZ | Val", role: "Administrateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u26A1" },
        { name: "EOZ Xrtypo", role: "Administrateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u26A1" },
        { name: "EOZ Lynx", role: "Mod\xE9rateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F52E}" },
        { name: "EOZ Eva", role: "Mod\xE9rateur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F52E}" },
        { name: "EOZ_N3xus", role: "Helpeur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3AB}" }
      ]
    },
    creative: {
      title: "Cr\xE9atif",
      icon: Palette,
      color: "text-pink-400",
      members: [
        { name: "EOZ ZeyDZN", role: "Graphiste", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3A8}" },
        { name: "PHYV3", role: "Graphiste", flag: "\u{1F1E6}\u{1F1FA}", special: "\u{1F3A8}" },
        { name: "EOZ LeGordeXx", role: "Streamer", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3A5}" },
        { name: "EOZ Max", role: "Monteur", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3AC}" }
      ]
    }
  };
  const esportData = {
    fortnite: {
      title: "Fortnite",
      icon: Trophy,
      color: "text-yellow-400",
      sections: {
        management: {
          title: "Management FTN",
          members: [
            { name: "EOZ Max", role: "Head FTN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3C6}" },
            { name: "EOZ \u{1D54D}\u{1D55A}\u{1D561}\u{1D556}\u{1D563} Manager \u30C4", role: "Manager FTN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F94A}" },
            { name: "EOZ Kodak", role: "Recruteur FTN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u26A1" },
            { name: "COACH EXTERNE", role: "Coach FTN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3B3}" }
          ]
        },
        pro: {
          title: "Joueurs Esport (Min. 20k PR / Div 1)",
          members: [
            { name: "EOZ Slavik mitro", role: "62k PR / $3825 / Div 1", flag: "\u{1F1EC}\u{1F1EA}", special: "\u{1F49B}" },
            { name: "EOZ Odin", role: "36k PR / $3000 / Div 1", flag: "\u{1F1E7}\u{1F1FE}", special: "\u{1F49B}" }
          ]
        },
        academy: {
          title: "Joueurs Acad\xE9miques (Min. 7k PR / Div 1)",
          members: [
            { name: "EOZ Ecl", role: "8.5k PR / $6700 / Div 1", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3AF}" },
            { name: "EOZ Lysoxefn", role: "8.5k PR / $500 / Div 1", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3AF}" },
            { name: "EOZ Mystiqul", role: "8.2k PR / $250 / Div 1", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3AF}" }
          ]
        },
        formation: {
          title: "Centre de Formation",
          members: [
            { name: "EOZ Kitora", role: "Coach Centre de Formation", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3B3}" },
            { name: "EOZ Boomer", role: "1.5k PR / Div 2", flag: "\u{1F1EB}\u{1F1F7}", special: "\u269C\uFE0F" },
            { name: "EOZ Oeht", role: "1.5k PR / Div 2", flag: "\u{1F1EB}\u{1F1F7}", special: "\u269C\uFE0F" },
            { name: "EOZ Skyzoreyli", role: "750 PR / Div 2", flag: "\u{1F1EB}\u{1F1F7}", special: "\u269C\uFE0F" },
            { name: "EOZ Nexim", role: "500 PR / Div 2 / $100", flag: "\u{1F1EB}\u{1F1F7}", special: "\u269C\uFE0F" }
          ]
        },
        clan: {
          title: "Clan",
          members: [
            { name: "EOZ NEYZIX", role: "Directeur CLAN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3C6}" },
            { name: "EOZ aysko", role: "Joueur CLAN", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3C6}" }
          ]
        }
      }
    },
    r6: {
      title: "Rainbow Six",
      icon: Shield,
      color: "text-orange-400",
      sections: {
        team: {
          title: "\xC9quipe R6",
          members: [
            { name: "EOZ Magma", role: "Capitaine", flag: "\u{1F1EB}\u{1F1F7}", special: "\u26AA" }
          ]
        }
      }
    },
    rl: {
      title: "Rocket League",
      icon: Gamepad2,
      color: "text-blue-400",
      sections: {
        management: {
          title: "Management RL",
          members: [
            { name: "EOZ Puhqz", role: "Directeur RL", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F3C6}" },
            { name: "EOZ LynorX", role: "Manager RL", flag: "\u{1F1EB}\u{1F1F7}", special: "\u{1F94A}" }
          ]
        }
      }
    }
  };
  const renderMemberCard = (member, index) => /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "glass p-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05, duration: 0.3 },
      whileHover: { scale: 1.02, y: -2 },
      children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-2xl", children: member.special }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 141,
          columnNumber: 9
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-lg", children: member.flag }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 144,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-white", children: member.name }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 145,
              columnNumber: 13
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 143,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400", children: member.role }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 147,
            columnNumber: 11
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 142,
          columnNumber: 9
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 140,
        columnNumber: 7
      })
    },
    `${member.name}-${index}`,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 132,
      columnNumber: 5
    }
  );
  const renderStaffSection = (section, sectionKey) => {
    const IconComponent = section.icon;
    return /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "mb-8",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1, duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV(IconComponent, { className: `${section.color}`, size: 28 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 164,
              columnNumber: 11
            }),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-white", children: section.title }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 165,
              columnNumber: 11
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 163,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: section.members.map((member, index) => renderMemberCard(member, index)) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 167,
            columnNumber: 9
          })
        ]
      },
      sectionKey,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 156,
        columnNumber: 7
      }
    );
  };
  const renderEsportSection = (game, gameKey) => {
    const IconComponent = game.icon;
    return /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "mb-12",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1, duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-8", children: [
            /* @__PURE__ */ jsxDEV(IconComponent, { className: `${game.color}`, size: 32 }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 185,
              columnNumber: 11
            }),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-bold gradient-text", children: game.title }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 186,
              columnNumber: 11
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 184,
            columnNumber: 9
          }),
          Object.entries(game.sections).map(([sectionKey, section]) => /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-semibold text-white mb-4 pl-4 border-l-4 border-discord-blurple", children: section.title }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 191,
              columnNumber: 13
            }),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: section.members.map((member, index) => renderMemberCard(member, index)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 194,
              columnNumber: 13
            })
          ] }, sectionKey, true, {
            fileName: "<stdin>",
            lineNumber: 190,
            columnNumber: 11
          }))
        ]
      },
      gameKey,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 177,
        columnNumber: 7
      }
    );
  };
  return /* @__PURE__ */ jsxDEV("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "text-center mb-12",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-5xl font-bold mb-6 gradient-text", children: "Notre \xC9quipe" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 213,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "D\xE9couvrez les talents qui composent EOZ Team, de notre staff d\xE9vou\xE9 \xE0 nos joueurs d'\xE9lite" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 214,
            columnNumber: 11
          })
        ]
      },
      void 0,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 206,
        columnNumber: 9
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "glass-dark rounded-full p-2 flex space-x-2", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveTab("staff"),
          className: `px-8 py-4 rounded-full font-semibold transition-all duration-300 ${activeTab === "staff" ? "bg-discord-blurple text-white" : "text-gray-400 hover:text-white"}`,
          children: "Staff"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 222,
          columnNumber: 13
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setActiveTab("esport"),
          className: `px-8 py-4 rounded-full font-semibold transition-all duration-300 ${activeTab === "esport" ? "bg-discord-blurple text-white" : "text-gray-400 hover:text-white"}`,
          children: "Esport"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 232,
          columnNumber: 13
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 221,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 220,
      columnNumber: 9
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "glass-dark rounded-2xl p-8", children: [
      activeTab === "staff" && /* @__PURE__ */ jsxDEV("div", { children: Object.entries(staffData).map(
        ([key, section]) => renderStaffSection(section, key)
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 248,
        columnNumber: 13
      }),
      activeTab === "esport" && /* @__PURE__ */ jsxDEV("div", { children: Object.entries(esportData).map(
        ([key, game]) => renderEsportSection(game, key)
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 256,
        columnNumber: 13
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 246,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 205,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 204,
    columnNumber: 5
  });
};
var stdin_default = TeamRoster;
export {
  stdin_default as default
};
