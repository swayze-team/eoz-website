import React, { useState } from "react";
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
  const renderMemberCard = (member, index) => React.createElement(
    motion.div,
    {
      key: `${member.name}-${index}`,
      className: "glass p-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05, duration: 0.3 },
      whileHover: { scale: 1.02, y: -2 }
    },
    React.createElement("div", { className: "flex items-center space-x-3" }, [
      React.createElement("div", { key: "emoji", className: "text-2xl" }, member.special),
      React.createElement("div", { key: "info", className: "flex-1" }, [
        React.createElement("div", { key: "name-row", className: "flex items-center space-x-2" }, [
          React.createElement("span", { key: "flag", className: "text-lg" }, member.flag),
          React.createElement("h4", { key: "name", className: "font-semibold text-white" }, member.name)
        ]),
        React.createElement("p", { key: "role", className: "text-sm text-gray-400" }, member.role)
      ])
    ])
  );
  const renderStaffSection = (section, sectionKey) => {
    const IconComponent = section.icon;
    return React.createElement(motion.div, {
      key: sectionKey,
      className: "mb-8",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1, duration: 0.4 }
    }, [
      React.createElement("div", { className: "flex items-center space-x-3 mb-6" }, [
        React.createElement(IconComponent, { className: `${section.color}` }, null),
        React.createElement("h3", { className: "text-2xl font-bold text-white" }, section.title)
      ]),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, [
        section.members.map((member, index) => renderMemberCard(member, index))
      ])
    ]);
  };
  const renderEsportSection = (game, gameKey) => {
    const IconComponent = game.icon;
    return React.createElement(motion.div, {
      key: gameKey,
      className: "mb-12",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1, duration: 0.4 }
    }, [
      React.createElement("div", { className: "flex items-center space-x-3 mb-8" }, [
        React.createElement(IconComponent, { className: `${game.color}` }, null),
        React.createElement("h3", { className: "text-3xl font-bold gradient-text" }, game.title)
      ]),
      Object.entries(game.sections).map(([sectionKey, section]) => React.createElement("div", { key: sectionKey, className: "mb-8" }, [
        React.createElement("h4", { className: "text-xl font-semibold text-white mb-4 pl-4 border-l-4 border-discord-blurple" }, section.title),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, [
          section.members.map((member, index) => renderMemberCard(member, index))
        ])
      ]))
    ]);
  };
  return React.createElement(
    "section",
    { className: "py-20 px-4" },
    React.createElement("div", { className: "max-w-7xl mx-auto" }, [
      React.createElement(motion.div, {
        key: "header",
        className: "text-center mb-12",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
      }, [
        React.createElement("h2", {
          key: "title",
          className: "text-5xl font-bold mb-6 gradient-text"
        }, "Notre \xC9quipe"),
        React.createElement("p", {
          key: "subtitle",
          className: "text-xl text-gray-300 max-w-3xl mx-auto"
        }, "D\xE9couvrez les talents qui composent EOZ Team, de notre staff d\xE9vou\xE9 \xE0 nos joueurs d'\xE9lite")
      ]),
      // Tabs - Centered
      React.createElement(
        "div",
        { key: "tabs", className: "flex justify-center mb-12" },
        React.createElement("div", { className: "glass-dark rounded-full p-2 flex space-x-2" }, [
          React.createElement("button", {
            key: "staff-tab",
            onClick: () => setActiveTab("staff"),
            className: `px-8 py-4 rounded-full font-semibold transition-all duration-300 ${activeTab === "staff" ? "bg-discord-blurple text-white" : "text-gray-400 hover:text-white"}`
          }, "Staff"),
          React.createElement("button", {
            key: "esport-tab",
            onClick: () => setActiveTab("esport"),
            className: `px-8 py-4 rounded-full font-semibold transition-all duration-300 ${activeTab === "esport" ? "bg-discord-blurple text-white" : "text-gray-400 hover:text-white"}`
          }, "Esport")
        ])
      ),
      // Content
      React.createElement("div", { key: "content", className: "glass-dark rounded-2xl p-8" }, [
        activeTab === "staff" && React.createElement(
          "div",
          { key: "staff-content" },
          Object.entries(staffData).map(
            ([key, section]) => renderStaffSection(section, key)
          )
        ),
        activeTab === "esport" && React.createElement(
          "div",
          { key: "esport-content" },
          Object.entries(esportData).map(
            ([key, game]) => renderEsportSection(game, key)
          )
        )
      ])
    ])
  );
};
var stdin_default = TeamRoster;
export {
  stdin_default as default
};
