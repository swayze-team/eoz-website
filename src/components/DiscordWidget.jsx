import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, MessageCircle, Activity, Crown, RefreshCw, Wifi, WifiOff } from "lucide-react";
const DiscordWidget = () => {
  const [discordData, setDiscordData] = useState({
    memberCount: 0,
    onlineCount: 0,
    members: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [stats, setStats] = useState({
    totalMembers: 0,
    onlineMembers: 0,
    staffOnline: 0,
    averageActivity: 0
  });
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(3e4);
  const [isConnecting, setIsConnecting] = useState(false);
  const fetchDiscordData = useCallback(async () => {
    try {
      setError(null);
      setIsConnecting(true);
      const response = await fetch("/api/discord/stats", {
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_API_SECRET}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const data = await response.json();
        setDiscordData(data);
        setStats({
          totalMembers: data.memberCount,
          onlineMembers: data.onlineCount,
          staffOnline: data.staffOnline || 0,
          averageActivity: data.averageActivity || 0
        });
      } else {
        throw new Error("Connection failed");
      }
      setLastUpdated(/* @__PURE__ */ new Date());
    } catch (err) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es Discord:", err);
      setError("Impossible de se connecter au serveur Discord");
      setDiscordData({
        memberCount: 0,
        onlineCount: 0,
        members: []
      });
      setStats({
        totalMembers: 0,
        onlineMembers: 0,
        staffOnline: 0,
        averageActivity: 0
      });
    } finally {
      setLoading(false);
      setIsConnecting(false);
    }
  }, []);
  useEffect(() => {
    fetchDiscordData();
  }, [fetchDiscordData]);
  useEffect(() => {
    if (autoRefresh && refreshInterval > 0) {
      const interval = setInterval(fetchDiscordData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval, fetchDiscordData]);
  const handleManualRefresh = () => {
    setLoading(true);
    fetchDiscordData();
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
  return React.createElement(motion.div, {
    className: "glass-dark rounded-3xl p-8 border border-white/10 relative overflow-hidden",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }, [
    // Animated background pattern
    React.createElement(
      "div",
      {
        key: "bg-pattern",
        className: "absolute inset-0 opacity-5"
      },
      React.createElement(motion.div, {
        key: "bg-motion",
        className: "w-full h-full",
        style: {
          backgroundImage: `radial-gradient(circle at 25% 25%, #5865F2 0%, transparent 25%), 
                           radial-gradient(circle at 75% 75%, #7289DA 0%, transparent 25%)`
        },
        animate: {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      })
    ),
    React.createElement("div", { key: "header", className: "text-center mb-10 relative z-10" }, [
      React.createElement(motion.h2, {
        key: "title",
        className: "text-5xl font-black mb-6 gradient-text",
        whileHover: { scale: 1.02 },
        transition: { type: "spring", stiffness: 300 }
      }, "Notre Communaut\xE9 Discord"),
      React.createElement("p", {
        key: "subtitle",
        className: "text-xl text-gray-300 leading-relaxed mb-4"
      }, "Rejoignez notre serveur Discord et faites partie de l'aventure EOZ Team"),
      // Connection status and controls
      React.createElement("div", {
        key: "controls",
        className: "flex items-center justify-center space-x-4 mb-6"
      }, [
        React.createElement("div", {
          key: "status",
          className: `flex items-center space-x-2 px-4 py-2 glass rounded-full ${error ? "text-red-400" : isConnecting ? "text-yellow-400" : "text-green-400"}`
        }, [
          error ? React.createElement(WifiOff, { key: "offline", size: 16 }) : isConnecting ? React.createElement(motion.div, {
            key: "connecting",
            className: "w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full",
            animate: { rotate: 360 },
            transition: { duration: 1, repeat: Infinity, ease: "linear" }
          }) : React.createElement(Wifi, { key: "online", size: 16 }),
          React.createElement("span", {
            key: "status-text",
            className: "text-sm font-medium"
          }, error ? "Connexion \xE9chou\xE9e" : isConnecting ? "Connexion..." : "Connect\xE9")
        ]),
        React.createElement(motion.button, {
          key: "refresh",
          onClick: handleManualRefresh,
          disabled: loading,
          className: "flex items-center space-x-2 px-4 py-2 glass hover:bg-white/10 rounded-full transition-all duration-200 disabled:opacity-50",
          whileHover: { scale: loading ? 1 : 1.05 },
          whileTap: { scale: loading ? 1 : 0.95 }
        }, [
          React.createElement(RefreshCw, {
            key: "refresh-icon",
            size: 16,
            className: `text-discord-blurple ${loading ? "animate-spin" : ""}`
          }),
          React.createElement("span", {
            key: "refresh-text",
            className: "text-sm text-gray-300"
          }, loading ? "Tentative..." : "R\xE9essayer")
        ]),
        lastUpdated && !error && React.createElement("div", {
          key: "last-updated",
          className: "text-xs text-gray-500"
        }, `Tent\xE9: ${lastUpdated.toLocaleTimeString()}`)
      ])
    ]),
    // Enhanced Statistics Grid
    React.createElement("div", {
      key: "stats-grid",
      className: "grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10"
    }, [
      // Statistics cards
      React.createElement("div", {
        key: "stats",
        className: "xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
      }, [
        React.createElement(motion.div, {
          key: "total-members",
          className: "glass p-8 rounded-2xl border border-discord-blurple/20 group relative overflow-hidden",
          whileHover: { scale: 1.02, borderColor: "rgba(88, 101, 242, 0.4)" },
          transition: { type: "spring", stiffness: 300 }
        }, [
          React.createElement(
            "div",
            {
              key: "member-header",
              className: "flex items-center justify-between mb-4"
            },
            React.createElement("div", { className: "flex items-center space-x-4" }, [
              React.createElement(
                "div",
                {
                  key: "icon-container",
                  className: "p-3 bg-discord-blurple/20 rounded-xl group-hover:bg-discord-blurple/30 transition-colors"
                },
                React.createElement(Users, { className: "text-discord-blurple", size: 32 })
              ),
              React.createElement("div", { key: "text-container" }, [
                React.createElement("h3", { key: "title", className: "text-2xl font-bold" }, "Membres Total"),
                React.createElement("p", { key: "subtitle", className: "text-gray-400" }, "Communaut\xE9")
              ])
            ])
          ),
          React.createElement("div", { key: "member-count", className: "flex items-end space-x-2" }, [
            React.createElement(motion.span, {
              key: "count",
              className: "text-4xl font-black text-discord-blurple group-hover:text-purple-400 transition-colors",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 200, delay: 0.1 }
            }, stats.totalMembers.toLocaleString()),
            React.createElement("span", {
              key: "zero-note",
              className: "text-gray-500 text-sm font-medium mb-1"
            }, error ? "connexion \xE9chou\xE9e" : "en attente...")
          ]),
          React.createElement(motion.div, {
            key: "member-glow",
            className: "absolute inset-0 bg-gradient-to-r from-discord-blurple/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          })
        ]),
        React.createElement(motion.div, {
          key: "online-members",
          className: "glass p-8 rounded-2xl border border-green-400/20 group relative overflow-hidden",
          whileHover: { scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" },
          transition: { type: "spring", stiffness: 300 }
        }, [
          React.createElement(
            "div",
            {
              key: "online-header",
              className: "flex items-center justify-between mb-4"
            },
            React.createElement("div", { className: "flex items-center space-x-4" }, [
              React.createElement(
                "div",
                {
                  key: "online-icon",
                  className: "p-3 bg-green-400/20 rounded-xl group-hover:bg-green-400/30 transition-colors"
                },
                React.createElement(UserCheck, { className: "text-green-400", size: 32 })
              ),
              React.createElement("div", { key: "online-text" }, [
                React.createElement("h3", { key: "title", className: "text-2xl font-bold" }, "En Ligne"),
                React.createElement("p", { key: "subtitle", className: "text-gray-400" }, "Membres actifs")
              ])
            ])
          ),
          React.createElement("div", { key: "online-count", className: "flex items-end space-x-2" }, [
            React.createElement(motion.span, {
              key: "online-count",
              className: "text-4xl font-black text-green-400 group-hover:text-green-300 transition-colors",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 200, delay: 0.2 }
            }, stats.onlineMembers),
            React.createElement("span", {
              key: "online-zero",
              className: "text-gray-500 text-sm font-medium mb-1"
            }, error ? "connexion \xE9chou\xE9e" : "en attente...")
          ]),
          React.createElement(motion.div, {
            key: "online-pulse",
            className: "absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full",
            animate: {
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            },
            transition: {
              duration: 2,
              repeat: Infinity
            }
          })
        ]),
        React.createElement(motion.div, {
          key: "staff-members",
          className: "glass p-8 rounded-2xl border border-yellow-400/20 group relative overflow-hidden",
          whileHover: { scale: 1.02, borderColor: "rgba(251, 191, 36, 0.4)" },
          transition: { type: "spring", stiffness: 300 }
        }, [
          React.createElement(
            "div",
            {
              key: "staff-header",
              className: "flex items-center space-x-4 mb-4"
            },
            React.createElement("div", { className: "flex items-center space-x-4" }, [
              React.createElement(
                "div",
                {
                  key: "staff-icon",
                  className: "p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-colors"
                },
                React.createElement(Crown, { className: "text-yellow-400", size: 32 })
              ),
              React.createElement("div", { key: "staff-text" }, [
                React.createElement("h3", { key: "title", className: "text-2xl font-bold" }, "Staff Actif"),
                React.createElement("p", { key: "subtitle", className: "text-gray-400" }, "\xC9quipe de mod\xE9ration")
              ])
            ])
          ),
          React.createElement("div", { key: "staff-count", className: "flex items-end space-x-2" }, [
            React.createElement(motion.span, {
              key: "staff-count",
              className: "text-4xl font-black text-yellow-400 group-hover:text-yellow-300 transition-colors",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 200, delay: 0.3 }
            }, stats.staffOnline),
            React.createElement("span", {
              key: "staff-zero",
              className: "text-gray-500 text-sm font-medium mb-1"
            }, "donn\xE9es indisponibles")
          ])
        ]),
        React.createElement(motion.div, {
          key: "activity",
          className: "glass p-8 rounded-2xl border border-purple-400/20 group relative overflow-hidden",
          whileHover: { scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" },
          transition: { type: "spring", stiffness: 300 }
        }, [
          React.createElement(
            "div",
            {
              key: "activity-header",
              className: "flex items-center space-x-4 mb-4"
            },
            React.createElement("div", { className: "flex items-center space-x-4" }, [
              React.createElement(
                "div",
                {
                  key: "activity-icon",
                  className: "p-3 bg-purple-400/20 rounded-xl group-hover:bg-purple-400/30 transition-colors"
                },
                React.createElement(Activity, { className: "text-purple-400", size: 32 })
              ),
              React.createElement("div", { key: "activity-text" }, [
                React.createElement("h3", { key: "title", className: "text-2xl font-bold" }, "Activit\xE9"),
                React.createElement("p", { key: "subtitle", className: "text-gray-400" }, "Score d'engagement")
              ])
            ])
          ),
          React.createElement("div", { key: "activity-count", className: "flex items-end space-x-2" }, [
            React.createElement(motion.span, {
              key: "activity-count",
              className: "text-4xl font-black text-purple-400 group-hover:text-purple-300 transition-colors",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 200, delay: 0.4 }
            }, stats.averageActivity + "%"),
            React.createElement("span", {
              key: "activity-zero",
              className: "text-gray-500 text-sm font-medium mb-1"
            }, "donn\xE9es indisponibles")
          ])
        ])
      ]),
      // Enhanced Discord Widget
      React.createElement("div", {
        key: "widget",
        className: "glass p-6 rounded-2xl border border-white/10 flex flex-col relative overflow-hidden"
      }, [
        React.createElement("h3", {
          key: "widget-title",
          className: "text-2xl font-bold mb-6 flex items-center space-x-3"
        }, [
          React.createElement(MessageCircle, { key: "icon", className: "text-discord-blurple", size: 28 }),
          React.createElement("span", { key: "text" }, "Widget Discord")
        ]),
        React.createElement("div", { key: "widget-container", className: "flex-1 flex justify-center items-start relative" }, [
          React.createElement("iframe", {
            key: "discord-iframe",
            src: "https://discord.com/widget?id=619555290299236352&theme=dark",
            width: "100%",
            height: "500",
            style: { maxWidth: "350px" },
            allowtransparency: "true",
            frameBorder: "0",
            sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            className: "rounded-xl shadow-2xl"
          }),
          React.createElement("div", {
            key: "widget-overlay",
            className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-xl"
          })
        ])
      ])
    ]),
    // Enhanced Join Section
    React.createElement(motion.div, { key: "join-section", className: "mt-10 text-center relative z-10" }, [
      React.createElement(motion.a, {
        key: "join-button",
        href: "https://discord.gg/eoz",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-discord-blurple via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-indigo-600 hover:to-discord-blurple text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden",
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.98 }
      }, [
        React.createElement(MessageCircle, {
          key: "join-icon",
          size: 28,
          className: "group-hover:rotate-12 transition-transform duration-300"
        }),
        React.createElement("span", { key: "join-text" }, "Rejoindre le Discord EOZ"),
        React.createElement(motion.div, {
          key: "join-shine",
          className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12",
          initial: { x: "-100%" },
          whileHover: { x: "100%" },
          transition: { duration: 0.6 }
        })
      ]),
      React.createElement("div", {
        key: "join-info",
        className: "mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400"
      }, [
        React.createElement("div", {
          key: "verified",
          className: "flex items-center space-x-2"
        }, [
          React.createElement("div", {
            key: "verified-badge",
            className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
          }),
          React.createElement("span", { key: "verified-text" }, "Serveur v\xE9rifi\xE9")
        ]),
        React.createElement("div", {
          key: "support",
          className: "flex items-center space-x-2"
        }, [
          React.createElement("div", {
            key: "support-badge",
            className: "w-2 h-2 bg-blue-400 rounded-full"
          }),
          React.createElement("span", { key: "support-text" }, "Support 24/7")
        ]),
        React.createElement("div", {
          key: "community",
          className: "flex items-center space-x-2"
        }, [
          React.createElement("div", {
            key: "community-badge",
            className: "w-2 h-2 bg-purple-400 rounded-full"
          }),
          React.createElement("span", { key: "community-text" }, "Communaut\xE9 active")
        ])
      ])
    ])
  ]);
};
var stdin_default = DiscordWidget;
export {
  stdin_default as default
};
