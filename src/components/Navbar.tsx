import { Button } from "@headlessui/react";
import {
  ArrowLeftIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../hooks/useAudio";
import { ButtonWithSound } from "./UI/ButtonWithSound";

export const Navbar = () => {
  const navigate = useNavigate();

  const currentPath = window.location.pathname;
  const isInPokedexPage = currentPath === "/pokedex";
  const isInLandingPage = currentPath === "/";
  const { setSound, isSoundAllowed } = useAudio();

  const onBackClick = () => {
    if (isInPokedexPage) {
      navigate("/");
    } else {
      navigate("/pokedex");
    }
  };

  return (
    <nav className="bg-red-700 p-4 flex justify-between items-center w-full sticky z-20 text-white">
      <h1 className="text-2xl font-bold w-full">Pokedex</h1>
      <div className="flex items-center">
        {!isInLandingPage && (
          <ButtonWithSound
            loadingText=""
            soundToPlay={{ id: "out" }}
            onClick={onBackClick}
            enableClassName="text-xl flex items-center hover:text-gray-200 text-white"
            disableClassName="text-xl flex items-center hover:text-gray-200 text-gray-400"
          >
            <ArrowLeftIcon className="size-8" />
            <span>Back</span>
          </ButtonWithSound>
        )}
        <Button
          className="px-4 py-2 rounded-md hover:bg-red-800 ml-2"
          onClick={() => setSound(!isSoundAllowed)}
        >
          {isSoundAllowed ? (
            <SpeakerWaveIcon className="size-8" />
          ) : (
            <SpeakerXMarkIcon className="size-8" />
          )}
        </Button>
      </div>
    </nav>
  );
};
