import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { motion } from "framer-motion";
const VideoBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 w-full h-full z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        className: "absolute inset-0 opacity-10",
        style: {
          backgroundImage: `radial-gradient(circle at 25% 25%, #5865F2 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #7289DA 0%, transparent 50%)`
        },
        animate: {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 9
      }
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      "video",
      {
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: `w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-15" : "opacity-0"} blur-sm scale-105`,
        onLoadedData: () => setIsLoaded(true),
        poster: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23000000'/%3E%3C/svg%3E",
        children: /* @__PURE__ */ jsxDEV(
          "source",
          {
            src: "https://pouch.jumpshare.com/preview/VTjduFF_jd1nDvt1u4t4lUntf3hZbF3mk1AN7i-3UHlFle_5ubvUUYbp51d5afVZlcK6zf3uNCsn-hWVt8sWY54Jyi4p0x5vZAxR6uvpWX4zAY3-SDMxqnxq0h0vY_H1jaNi2gqhYy_jwRRUNJ6fVG6yjbN-I2pg_cnoHs_AmgI.mp4",
            type: "video/mp4"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 42,
            columnNumber: 9
          }
        )
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 49,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "absolute inset-0 opacity-5 mix-blend-overlay",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 7
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 8,
    columnNumber: 5
  });
};
var stdin_default = VideoBackground;
export {
  stdin_default as default
};
