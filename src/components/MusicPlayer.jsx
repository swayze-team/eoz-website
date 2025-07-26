import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat } from "lucide-react";
const MusicPlayer = ({ enabled = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const tracks = [
    {
      id: 1,
      title: "EOZ Gaming Anthem",
      artist: "EOZ Team",
      url: "https://audio.jukehost.co.uk/zgSQit0fonUX7zWtDtkTF74kbGtTymoq",
      thumbnail: "https://iili.io/Fk7k6AB.gif",
      genre: "Electronic"
    },
    {
      id: 2,
      title: "Victory Theme",
      artist: "EOZ Team",
      url: "https://audio.jukehost.co.uk/H2pR5qDNnnhVIxEFZ0I868j69uemoCRJ",
      thumbnail: "https://iili.io/Fk7k6AB.gif",
      genre: "Epic"
    }
  ];
  const currentTrack = tracks[currentTrackIndex];
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration * 100);
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const handleEnded = () => {
      if (isRepeating) {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextTrack();
      }
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, isRepeating]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);
  const togglePlay = () => {
    if (!enabled) return;
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const nextTrack = () => {
    const nextIndex = isShuffled ? Math.floor(Math.random() * tracks.length) : (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
  };
  const prevTrack = () => {
    const prevIndex = isShuffled ? Math.floor(Math.random() * tracks.length) : (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
  };
  const handleProgressClick = (e) => {
    if (!audioRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width * 100;
    const newTime = percentage / 100 * duration;
    audioRef.current.currentTime = newTime;
    setProgress(percentage);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  if (!enabled) return null;
  return React.createElement("div", {
    className: "fixed bottom-6 right-6 z-40",
    style: { zIndex: 9999 }
  }, [
    React.createElement("audio", {
      key: "audio-element",
      ref: audioRef,
      src: currentTrack.url,
      preload: "metadata"
    }),
    React.createElement(
      AnimatePresence,
      { key: "player-animation" },
      React.createElement(motion.div, {
        className: `glass-dark rounded-2xl border border-white/20 overflow-hidden shadow-2xl ${isExpanded ? "w-96" : "w-16"}`,
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, width: isExpanded ? 384 : 64 },
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }, [
        // Compact Player
        !isExpanded && React.createElement(motion.div, {
          key: "compact-player",
          className: "p-4 cursor-pointer",
          onClick: () => setIsExpanded(true),
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        }, [
          React.createElement("div", {
            key: "compact-thumbnail",
            className: "w-8 h-8 rounded-lg overflow-hidden relative"
          }, [
            React.createElement("img", {
              key: "compact-img",
              src: currentTrack.thumbnail,
              alt: currentTrack.title,
              className: "w-full h-full object-cover"
            }),
            React.createElement(
              "div",
              {
                key: "compact-overlay",
                className: "absolute inset-0 flex items-center justify-center bg-black/50"
              },
              isPlaying ? React.createElement(Pause, { size: 16, className: "text-white" }) : React.createElement(Play, { size: 16, className: "text-white" })
            )
          ])
        ]),
        // Expanded Player
        isExpanded && React.createElement(motion.div, {
          key: "expanded-player",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2 }
        }, [
          // Header with close button
          React.createElement("div", {
            key: "player-header",
            className: "flex items-center justify-between p-4 border-b border-white/10"
          }, [
            React.createElement("h3", {
              key: "player-title",
              className: "text-lg font-bold text-white"
            }, "EOZ Music Player"),
            React.createElement("button", {
              key: "close-btn",
              onClick: () => setIsExpanded(false),
              className: "text-gray-400 hover:text-white transition-colors"
            }, "\xD7")
          ]),
          // Track Info
          React.createElement("div", {
            key: "track-info",
            className: "p-4 flex items-center space-x-4"
          }, [
            React.createElement("div", {
              key: "track-thumbnail",
              className: "w-16 h-16 rounded-xl overflow-hidden relative"
            }, [
              React.createElement("img", {
                key: "track-img",
                src: currentTrack.thumbnail,
                alt: currentTrack.title,
                className: "w-full h-full object-cover"
              }),
              React.createElement(motion.div, {
                key: "thumbnail-glow",
                className: "absolute inset-0 bg-gradient-to-t from-discord-blurple/30 to-transparent",
                animate: isPlaying ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.3 },
                transition: { duration: 2, repeat: Infinity }
              })
            ]),
            React.createElement("div", {
              key: "track-details",
              className: "flex-1 min-w-0"
            }, [
              React.createElement("h4", {
                key: "track-title",
                className: "text-white font-semibold truncate"
              }, currentTrack.title),
              React.createElement("p", {
                key: "track-artist",
                className: "text-gray-400 text-sm truncate"
              }, currentTrack.artist),
              React.createElement("span", {
                key: "track-genre",
                className: "inline-block px-2 py-1 bg-discord-blurple/20 rounded-full text-xs text-discord-blurple mt-1"
              }, currentTrack.genre)
            ])
          ]),
          // Progress Bar
          React.createElement("div", {
            key: "progress-section",
            className: "px-4 pb-2"
          }, [
            React.createElement("div", {
              key: "progress-bar",
              ref: progressRef,
              className: "w-full h-2 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden",
              onClick: handleProgressClick
            }, [
              React.createElement(motion.div, {
                key: "progress-fill",
                className: "h-full bg-gradient-to-r from-discord-blurple to-purple-500 rounded-full",
                style: { width: `${progress}%` },
                transition: { duration: 0.1 }
              }),
              React.createElement(motion.div, {
                key: "progress-thumb",
                className: "absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg",
                style: { left: `${progress}%`, marginLeft: "-6px" },
                whileHover: { scale: 1.2 }
              })
            ]),
            React.createElement("div", {
              key: "time-display",
              className: "flex justify-between text-xs text-gray-400 mt-1"
            }, [
              React.createElement("span", { key: "current-time" }, formatTime(currentTime)),
              React.createElement("span", { key: "total-time" }, formatTime(duration))
            ])
          ]),
          // Controls
          React.createElement("div", {
            key: "player-controls",
            className: "flex items-center justify-center space-x-4 p-4"
          }, [
            React.createElement(motion.button, {
              key: "shuffle-btn",
              onClick: () => setIsShuffled(!isShuffled),
              className: `p-2 rounded-lg transition-colors ${isShuffled ? "text-discord-blurple bg-discord-blurple/20" : "text-gray-400 hover:text-white"}`,
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            }, React.createElement(Shuffle, { size: 18 })),
            React.createElement(motion.button, {
              key: "prev-btn",
              onClick: prevTrack,
              className: "p-2 text-gray-400 hover:text-white transition-colors rounded-lg",
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            }, React.createElement(SkipBack, { size: 20 })),
            React.createElement(
              motion.button,
              {
                key: "play-btn",
                onClick: togglePlay,
                className: "p-3 bg-discord-blurple hover:bg-discord-blurple/80 text-white rounded-full transition-colors",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 }
              },
              isPlaying ? React.createElement(Pause, { size: 24 }) : React.createElement(Play, { size: 24, style: { marginLeft: "2px" } })
            ),
            React.createElement(motion.button, {
              key: "next-btn",
              onClick: nextTrack,
              className: "p-2 text-gray-400 hover:text-white transition-colors rounded-lg",
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            }, React.createElement(SkipForward, { size: 20 })),
            React.createElement(motion.button, {
              key: "repeat-btn",
              onClick: () => setIsRepeating(!isRepeating),
              className: `p-2 rounded-lg transition-colors ${isRepeating ? "text-discord-blurple bg-discord-blurple/20" : "text-gray-400 hover:text-white"}`,
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 }
            }, React.createElement(Repeat, { size: 18 }))
          ]),
          // Volume Control
          React.createElement("div", {
            key: "volume-control",
            className: "flex items-center space-x-3 px-4 pb-4"
          }, [
            React.createElement(
              "button",
              {
                key: "volume-btn",
                onClick: () => setIsMuted(!isMuted),
                className: "text-gray-400 hover:text-white transition-colors"
              },
              isMuted ? React.createElement(VolumeX, { size: 18 }) : React.createElement(Volume2, { size: 18 })
            ),
            React.createElement("input", {
              key: "volume-slider",
              type: "range",
              min: "0",
              max: "1",
              step: "0.1",
              value: isMuted ? 0 : volume,
              onChange: (e) => {
                const newVolume = parseFloat(e.target.value);
                setVolume(newVolume);
                setIsMuted(newVolume === 0);
              },
              className: "flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            })
          ])
        ])
      ])
    )
  ]);
};
var stdin_default = MusicPlayer;
export {
  stdin_default as default
};
