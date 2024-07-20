import { Button } from "@headlessui/react";
import { useAudio } from "../../hooks/useAudio";
import { SoundType } from "../../providers/AudioProvider";
import { useState } from "react";
import { Spinner } from "./Spinner";

interface ButtonWithSoundProps {
  enableClassName: string;
  disableClassName: string;
  soundToPlay: SoundType;
  onClick: () => void | Promise<void>;
  loadingText: string;
  children: React.ReactNode;
}

export const ButtonWithSound = ({
  enableClassName,
  disableClassName,
  soundToPlay,
  onClick,
  loadingText,
  children,
}: ButtonWithSoundProps) => {
  const { playSound } = useAudio();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  return (
    <Button
      className={`${buttonDisabled ? disableClassName : enableClassName}`}
      disabled={buttonDisabled}
      onClick={async () => {
        setButtonDisabled(true);
        await playSound(soundToPlay);
        await onClick();
        setButtonDisabled(false);
      }}
    >
      {buttonDisabled ? (
        <div className="size-full flex items-center justify-center px-0">
          <Spinner />
          <span className="ml-2 w-full grow">{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
