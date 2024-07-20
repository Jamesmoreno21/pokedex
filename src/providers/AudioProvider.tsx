import React, { createContext, useEffect, useState } from "react";
import opening from "../assets/sounds/opening.mp3";
import inSound from "../assets/sounds/in.mp3";
import out from "../assets/sounds/out.mp3";
export interface SoundType {
  id: "opening" | "in" | "out";
}

export interface AudioContextProps {
  playSound: ({ id }: SoundType) => Promise<void>;
  setSound: (active: boolean) => void;
  isSoundAllowed: boolean;
}

export const AudioContext = createContext<AudioContextProps | undefined>(
  undefined
);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [audios] = useState({
    opening: new Audio(opening),
    in: new Audio(inSound),
    out: new Audio(out),
  });
  const [isSoundAllowed, setIsSoundAllowed] = useState(true);

  useEffect(() => {
    if (!isSoundAllowed) {
      audios.opening.pause();
    } else {
      audios.opening.play();
    }
  }, [isSoundAllowed, audios]);

  useEffect(() => {
    audios.opening.volume = 0.1;
    audios.opening.loop = true;
    audios.opening.play();
  }, [audios]);

  const playSound = async ({ id }: SoundType) => {
    if (!isSoundAllowed) return;
    await audios[id]?.play();
    await new Promise((resolve) => setTimeout(resolve, 400));
  };

  const setSound = (active: boolean) => {
    setIsSoundAllowed(active);
  };

  return (
    <AudioContext.Provider value={{ playSound, setSound, isSoundAllowed }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioProvider };