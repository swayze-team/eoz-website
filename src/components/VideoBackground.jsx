import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const VideoBackground = ({ performanceMode = "high" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  const [videoQuality, setVideoQuality] = useState("1080p");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  useEffect(() => {
    switch (performanceMode) {
      case "low":
        setVideoQuality("480p");
        setPlaybackSpeed(0.8);
        break;
      case "medium":
        setVideoQuality("720p");
        setPlaybackSpeed(0.9);
        break;
      default:
        setVideoQuality("1080p");
        setPlaybackSpeed(1);
    }
  }, [performanceMode]);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);
  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };
  const handleVideoError = () => {
    setHasError(true);
    setIsLoaded(false);
  };
  return React.createElement("div", {
    className: "fixed inset-0 w-full h-full z-0 overflow-hidden",
    "data-performance": performanceMode
  }, [
    // Simple fallback gradient background 
    React.createElement("div", {
      key: "fallback",
      className: "absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
    }),
    // Video element
    !hasError && React.createElement("video", {
      key: "bg-video",
      ref: videoRef,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      className: `w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-20" : "opacity-0"}`,
      onLoadedData: handleVideoLoad,
      onError: handleVideoError,
      poster: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23000000'/%3E%3C/svg%3E"
    }, [
      React.createElement("source", {
        key: "video-source",
        src: "https://pouch.jumpshare.com/preview/-FpZN7ACuwm_R4lNMk5hoWSNQKWCbtmXqRwDvyOYlLS3Sz_9IA4lnRxzi4Tq3gUE-wJJFFugpLXM5CJXgXzJPJ4Jyi4p0x5vZAxR6uvpWX4zAY3-SDMxqnxq0h0vY_H1gvudgOm0i-ryJH6d1fATSW6yjbN-I2pg_cnoHs_AmgI.mp4",
        type: "video/mp4"
      })
    ]),
    // Simple dark overlay
    React.createElement("div", {
      key: "overlay",
      className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/80"
    }),
    // Performance indicator
    performanceMode !== "high" && React.createElement("div", {
      key: "performance-indicator",
      className: "absolute bottom-4 left-4 glass-dark px-3 py-1 rounded-full text-xs text-gray-400 z-10"
    }, `Mode: ${performanceMode}`)
  ]);
};
var stdin_default = VideoBackground;
export {
  stdin_default as default
};
