"use client";

import { useState } from "react";

const tracks = [
  {
    id: 1,
    title: "Echoes of the Void",
    artist: "Spectral Flow",
    artwork: "https://placehold.co/300x300.png",
    url: "/music/sample1.mp3",
  },
  {
    id: 2,
    title: "Subterranean Drift",
    artist: "Spectral Flow",
    artwork: "https://placehold.co/300x300.png",
    url: "/music/sample2.mp3",
  },
  {
    id: 3,
    title: "Cryo-sleep Chamber",
    artist: "Spectral Flow",
    artwork: "https://placehold.co/300x300.png",
    url: "/music/sample3.mp3",
  },
  {
    id: 4,
    title: "Lost Signal",
    artist: "Spectral Flow",
    artwork: "https://placehold.co/300x300.png",
    url: "/music/sample4.mp3",
  },
];

export function useMusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30); // Dummy progress

  const currentTrack = tracks[currentTrackIndex];

  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const playNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
    setIsPlaying(true);
  };

  const handleSetVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return {
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    progress,
    playTrack,
    togglePlay,
    playNext,
    playPrevious,
    setVolume: handleSetVolume,
    toggleMute,
    tracks,
  };
}
