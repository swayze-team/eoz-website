import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, User, Mail, AlertCircle, CheckCircle2 } from "lucide-react";
const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [ticketId, setTicketId] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const newTicketId = `EOZ-${Date.now().toString(36).toUpperCase()}`;
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      const response = await fetch("/api/support/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          ticketId: newTicketId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        })
      });
      if (response.ok) {
        setTicketId(newTicketId);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          priority: "medium"
        });
      } else {
        throw new Error("Erreur lors de l'envoi du ticket");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez r\xE9essayer.");
      console.error("Erreur:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (submitted) {
    return React.createElement(motion.div, {
      className: "glass-dark rounded-2xl p-8 text-center",
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 }
    }, [
      React.createElement(CheckCircle2, {
        key: "check-icon",
        className: "text-green-400 mx-auto mb-4",
        size: 64
      }),
      React.createElement("h2", {
        key: "success-title",
        className: "text-3xl font-bold mb-4 text-green-400"
      }, "Ticket envoy\xE9 !"),
      React.createElement("p", {
        key: "success-message",
        className: "text-gray-300 mb-2"
      }, "Votre ticket de support a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s."),
      React.createElement("p", {
        key: "ticket-id",
        className: "text-lg font-mono text-discord-blurple mb-6"
      }, `ID: ${ticketId}`),
      React.createElement("p", {
        key: "response-info",
        className: "text-gray-400 mb-8"
      }, "Notre \xE9quipe vous r\xE9pondra dans les plus brefs d\xE9lais via Discord."),
      React.createElement(motion.button, {
        key: "new-ticket-btn",
        onClick: () => setSubmitted(false),
        className: "glass hover:bg-white hover:bg-opacity-10 text-white px-6 py-3 rounded-lg transition-all duration-200",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      }, "Cr\xE9er un nouveau ticket")
    ]);
  }
  return React.createElement(motion.div, {
    className: "glass-dark rounded-2xl p-8",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }, [
    React.createElement("div", { key: "header", className: "text-center mb-8" }, [
      React.createElement("h2", {
        key: "title",
        className: "text-4xl font-bold mb-4 gradient-text"
      }, "Support EOZ Team"),
      React.createElement("p", {
        key: "subtitle",
        className: "text-gray-300 text-lg"
      }, "Besoin d'aide ? Notre \xE9quipe est l\xE0 pour vous accompagner.")
    ]),
    React.createElement("form", { key: "form", onSubmit: handleSubmit, className: "space-y-6" }, [
      React.createElement("div", { key: "name-email-row", className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
        React.createElement("div", { key: "name-field" }, [
          React.createElement("label", {
            key: "name-label",
            className: "block text-sm font-medium text-gray-300 mb-2"
          }, [
            React.createElement(User, { key: "user-icon", size: 16, className: "inline mr-2" }),
            "Nom complet *"
          ]),
          React.createElement("input", {
            key: "name-input",
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleInputChange,
            required: true,
            className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
            placeholder: "Votre nom"
          })
        ]),
        React.createElement("div", { key: "email-field" }, [
          React.createElement("label", {
            key: "email-label",
            className: "block text-sm font-medium text-gray-300 mb-2"
          }, [
            React.createElement(Mail, { key: "mail-icon", size: 16, className: "inline mr-2" }),
            "Email *"
          ]),
          React.createElement("input", {
            key: "email-input",
            type: "email",
            name: "email",
            value: formData.email,
            onChange: handleInputChange,
            required: true,
            className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
            placeholder: "votre@email.com"
          })
        ])
      ]),
      React.createElement("div", { key: "subject-priority-row", className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
        React.createElement("div", { key: "subject-field" }, [
          React.createElement("label", {
            key: "subject-label",
            className: "block text-sm font-medium text-gray-300 mb-2"
          }, [
            React.createElement(MessageSquare, { key: "message-icon", size: 16, className: "inline mr-2" }),
            "Sujet *"
          ]),
          React.createElement("input", {
            key: "subject-input",
            type: "text",
            name: "subject",
            value: formData.subject,
            onChange: handleInputChange,
            required: true,
            className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
            placeholder: "R\xE9sum\xE9 de votre demande"
          })
        ]),
        React.createElement("div", { key: "priority-field" }, [
          React.createElement("label", {
            key: "priority-label",
            className: "block text-sm font-medium text-gray-300 mb-2"
          }, [
            React.createElement(AlertCircle, { key: "alert-icon", size: 16, className: "inline mr-2" }),
            "Priorit\xE9"
          ]),
          React.createElement("select", {
            key: "priority-select",
            name: "priority",
            value: formData.priority,
            onChange: handleInputChange,
            className: "w-full glass p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200"
          }, [
            React.createElement("option", {
              key: "low-option",
              value: "low",
              className: "bg-gray-800"
            }, "Faible"),
            React.createElement("option", {
              key: "medium-option",
              value: "medium",
              className: "bg-gray-800"
            }, "Moyenne"),
            React.createElement("option", {
              key: "high-option",
              value: "high",
              className: "bg-gray-800"
            }, "\xC9lev\xE9e"),
            React.createElement("option", {
              key: "urgent-option",
              value: "urgent",
              className: "bg-gray-800"
            }, "Urgente")
          ])
        ])
      ]),
      React.createElement("div", { key: "message-field" }, [
        React.createElement("label", {
          key: "message-label",
          className: "block text-sm font-medium text-gray-300 mb-2"
        }, "Message *"),
        React.createElement("textarea", {
          key: "message-input",
          name: "message",
          value: formData.message,
          onChange: handleInputChange,
          required: true,
          rows: 6,
          className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200 resize-none",
          placeholder: "D\xE9crivez votre demande en d\xE9tail..."
        })
      ]),
      error && React.createElement("div", {
        key: "error-message",
        className: "glass p-4 rounded-lg border-l-4 border-red-500"
      }, [
        React.createElement("p", {
          key: "error-text",
          className: "text-red-400"
        }, error)
      ]),
      React.createElement(
        motion.button,
        {
          key: "submit-btn",
          type: "submit",
          disabled: isSubmitting,
          className: "w-full bg-discord-blurple hover:bg-opacity-80 disabled:bg-opacity-50 text-white p-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2",
          whileHover: { scale: isSubmitting ? 1 : 1.02 },
          whileTap: { scale: isSubmitting ? 1 : 0.98 }
        },
        isSubmitting ? [
          React.createElement("div", {
            key: "spinner",
            className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
          }),
          React.createElement("span", { key: "submitting-text" }, "Envoi en cours...")
        ] : [
          React.createElement(Send, { key: "send-icon", size: 20 }),
          React.createElement("span", { key: "send-text" }, "Envoyer le ticket")
        ]
      )
    ])
  ]);
};
var stdin_default = SupportForm;
export {
  stdin_default as default
};
