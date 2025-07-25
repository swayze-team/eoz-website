import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DiscordWidget from "./components/DiscordWidget";
import SupportForm from "./components/SupportForm";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import TeamRoster from "./components/TeamRoster";
import GameCarousel from "./components/GameCarousel";
function App() {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-black text-white relative", children: [
    /* @__PURE__ */ jsxDEV(VideoBackground, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("main", { children: [
        /* @__PURE__ */ jsxDEV(HeroSection, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          motion.section,
          {
            id: "games",
            className: "py-20 px-4",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxDEV(GameCarousel, {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 31,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.section,
          {
            id: "team",
            className: "py-20 px-4",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxDEV(TeamRoster, {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.section,
          {
            id: "discord",
            className: "py-20 px-4",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV(DiscordWidget, {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 54,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 53,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 45,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.section,
          {
            id: "support",
            className: "py-20 px-4",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(SupportForm, {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 67,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 66,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 58,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var stdin_default = App;
export {
  stdin_default as default
};
