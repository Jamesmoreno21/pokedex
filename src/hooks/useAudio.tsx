import { useContext } from "react";
import { AudioContext } from "../providers/AudioProvider";

export const useAudio = () => {
  const audioContext = useContext(AudioContext);

  if (!audioContext) {
    throw new Error("useAudio must be used within an AudioProvider");
  }

  return audioContext;
};
