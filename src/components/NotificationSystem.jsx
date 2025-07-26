import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const welcomeNotification = {
      id: Date.now(),
      type: "info",
      title: "Bienvenue sur EOZ Team",
      message: "D\xE9couvrez notre univers esport !",
      duration: 5e3
    };
    setNotifications([welcomeNotification]);
  }, []);
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };
  const getIcon = (type) => {
    switch (type) {
      case "success":
        return CheckCircle;
      case "error":
        return AlertCircle;
      case "info":
      default:
        return Info;
    }
  };
  const getColors = (type) => {
    switch (type) {
      case "success":
        return "border-green-400/50 bg-green-400/10 text-green-400";
      case "error":
        return "border-red-400/50 bg-red-400/10 text-red-400";
      case "info":
      default:
        return "border-discord-blurple/50 bg-discord-blurple/10 text-discord-blurple";
    }
  };
  return React.createElement(
    "div",
    {
      className: "fixed top-20 right-4 z-50 space-y-4 max-w-sm"
    },
    React.createElement(
      AnimatePresence,
      null,
      notifications.map((notification) => {
        const IconComponent = getIcon(notification.type);
        const colors = getColors(notification.type);
        return React.createElement(motion.div, {
          key: notification.id,
          className: `glass-dark border rounded-xl p-4 shadow-2xl ${colors}`,
          initial: { x: 400, opacity: 0, scale: 0.8 },
          animate: { x: 0, opacity: 1, scale: 1 },
          exit: { x: 400, opacity: 0, scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          layout: true
        }, [
          React.createElement("div", {
            key: "content",
            className: "flex items-start space-x-3"
          }, [
            React.createElement(IconComponent, {
              key: "icon",
              size: 20,
              className: "flex-shrink-0 mt-0.5"
            }),
            React.createElement("div", {
              key: "text",
              className: "flex-1 min-w-0"
            }, [
              React.createElement("h4", {
                key: "title",
                className: "font-semibold text-sm"
              }, notification.title),
              React.createElement("p", {
                key: "message",
                className: "text-xs text-gray-300 mt-1"
              }, notification.message)
            ]),
            React.createElement("button", {
              key: "close",
              onClick: () => removeNotification(notification.id),
              className: "text-gray-400 hover:text-white transition-colors"
            }, React.createElement(X, { size: 16 }))
          ])
        ]);
      })
    )
  );
};
var stdin_default = NotificationSystem;
export {
  stdin_default as default
};
