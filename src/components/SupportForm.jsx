import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
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
    return /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "glass-dark rounded-2xl p-8 text-center",
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "text-green-400 mx-auto mb-4", size: 64 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 80,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold mb-4 text-green-400", children: "Ticket envoy\xE9 !" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 81,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 mb-2", children: "Votre ticket de support a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 82,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-mono text-discord-blurple mb-6", children: [
            "ID: ",
            ticketId
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 85,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400 mb-8", children: "Notre \xE9quipe vous r\xE9pondra dans les plus brefs d\xE9lais via Discord." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 88,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV(
            motion.button,
            {
              onClick: () => setSubmitted(false),
              className: "glass hover:bg-white hover:bg-opacity-10 text-white px-6 py-3 rounded-lg transition-all duration-200",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "Cr\xE9er un nouveau ticket"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 91,
              columnNumber: 9
            }
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 74,
        columnNumber: 7
      }
    );
  }
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "glass-dark rounded-2xl p-8",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl font-bold mb-4 gradient-text", children: "Support EOZ Team" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 112,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 text-lg", children: "Besoin d'aide ? Notre \xE9quipe est l\xE0 pour vous accompagner." }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 113,
            columnNumber: 9
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 111,
          columnNumber: 7
        }),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: [
                /* @__PURE__ */ jsxDEV(User, { size: 16, className: "inline mr-2" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 122,
                  columnNumber: 15
                }),
                "Nom complet *"
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 121,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  name: "name",
                  value: formData.name,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
                  placeholder: "Votre nom"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 125,
                  columnNumber: 13
                }
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 120,
              columnNumber: 11
            }),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: [
                /* @__PURE__ */ jsxDEV(Mail, { size: 16, className: "inline mr-2" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 138,
                  columnNumber: 15
                }),
                "Email *"
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 137,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
                  placeholder: "votre@email.com"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 141,
                  columnNumber: 13
                }
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 136,
              columnNumber: 11
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 119,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: [
                /* @__PURE__ */ jsxDEV(MessageSquare, { size: 16, className: "inline mr-2" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 156,
                  columnNumber: 15
                }),
                "Sujet *"
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 155,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  name: "subject",
                  value: formData.subject,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
                  placeholder: "R\xE9sum\xE9 de votre demande"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 159,
                  columnNumber: 13
                }
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 154,
              columnNumber: 11
            }),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: [
                /* @__PURE__ */ jsxDEV(AlertCircle, { size: 16, className: "inline mr-2" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 172,
                  columnNumber: 15
                }),
                "Priorit\xE9"
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 171,
                columnNumber: 13
              }),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  name: "priority",
                  value: formData.priority,
                  onChange: handleInputChange,
                  className: "w-full glass p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200",
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "low", className: "bg-gray-800", children: "Faible" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 181,
                      columnNumber: 15
                    }),
                    /* @__PURE__ */ jsxDEV("option", { value: "medium", className: "bg-gray-800", children: "Moyenne" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 182,
                      columnNumber: 15
                    }),
                    /* @__PURE__ */ jsxDEV("option", { value: "high", className: "bg-gray-800", children: "\xC9lev\xE9e" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 183,
                      columnNumber: 15
                    }),
                    /* @__PURE__ */ jsxDEV("option", { value: "urgent", className: "bg-gray-800", children: "Urgente" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 184,
                      columnNumber: 15
                    })
                  ]
                },
                void 0,
                true,
                {
                  fileName: "<stdin>",
                  lineNumber: 175,
                  columnNumber: 13
                }
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 170,
              columnNumber: 11
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 153,
            columnNumber: 9
          }),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Message *" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 190,
              columnNumber: 11
            }),
            /* @__PURE__ */ jsxDEV(
              "textarea",
              {
                name: "message",
                value: formData.message,
                onChange: handleInputChange,
                required: true,
                rows: 6,
                className: "w-full glass p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-discord-blurple transition-all duration-200 resize-none",
                placeholder: "D\xE9crivez votre demande en d\xE9tail..."
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 193,
                columnNumber: 11
              }
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 189,
            columnNumber: 9
          }),
          error && /* @__PURE__ */ jsxDEV("div", { className: "glass p-4 rounded-lg border-l-4 border-red-500", children: /* @__PURE__ */ jsxDEV("p", { className: "text-red-400", children: error }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 206,
            columnNumber: 13
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 205,
            columnNumber: 11
          }),
          /* @__PURE__ */ jsxDEV(
            motion.button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-discord-blurple hover:bg-opacity-80 disabled:bg-opacity-50 text-white p-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2",
              whileHover: { scale: isSubmitting ? 1 : 1.02 },
              whileTap: { scale: isSubmitting ? 1 : 0.98 },
              children: isSubmitting ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 219,
                  columnNumber: 15
                }),
                /* @__PURE__ */ jsxDEV("span", { children: "Envoi en cours..." }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 220,
                  columnNumber: 15
                })
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 218,
                columnNumber: 13
              }) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                /* @__PURE__ */ jsxDEV(Send, { size: 20 }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 224,
                  columnNumber: 15
                }),
                /* @__PURE__ */ jsxDEV("span", { children: "Envoyer le ticket" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 225,
                  columnNumber: 15
                })
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 223,
                columnNumber: 13
              })
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 210,
              columnNumber: 9
            }
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 118,
          columnNumber: 7
        }),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 p-4 glass rounded-lg", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-400 text-center", children: [
          "\u{1F4A1} ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Astuce :" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 233,
            columnNumber: 14
          }),
          " Pour une assistance plus rapide, rejoignez notre Discord et utilisez le canal #support"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 232,
          columnNumber: 9
        }) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 231,
          columnNumber: 7
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 104,
      columnNumber: 5
    }
  );
};
var stdin_default = SupportForm;
export {
  stdin_default as default
};
