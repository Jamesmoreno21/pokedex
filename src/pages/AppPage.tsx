import { useNavigate } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import blueCircle from "../assets/images/blue-circle.png";
import { ButtonWithSound } from "../components/UI/ButtonWithSound";

function App() {
  const navigation = useNavigate();

  const redirectTo = async (path: string) => {
    navigation(path);
  };

  return (
    <LandingLayout>
      <div className="flex flex-col items-center justify-center grow ">
        <div className="relative flex flex-col bg-red-700 items-center justify-between w-3/4 md:w-5/12 p-4 py-20 h-full rounded-xl border-4 border-black">
          <img
            src={blueCircle}
            alt="blue-circle"
            className="absolute object-cover size-10 md:size-20 left-4 top-4 animate-pulse pokemon-image"
          />

          <div className="absolute w-full h-1 bg-black rounded-md mt-6"></div>
          <div className="absolute w-full bottom-10 h-1 bg-black rounded-md mt-6"></div>
          <div className="w-0 h-0 absolute left-4 top-56 md:top-64  border-t-[10px] border-l-[15px] border-b-[10px] md:border-t-[15px] border-t-transparent md:border-l-[20px] border-l-yellow-500  md:border-b-[15px] border-b-transparent"></div>

          <h1 className="text-4xl md:text-6xl font-bold  text-yellow-500 mt-14">
            Pokedex
          </h1>
          <p className="text-white w-3/4 text-lg md:text-2xl">
            This is a simple Pokedex app built with React and Tailwind CSS
          </p>

          <ButtonWithSound
            soundToPlay={{ id: "in" }}
            enableClassName="btn-warning btn mt-4"
            disableClassName="mt-4 text-white"
            onClick={() => redirectTo("/pokedex")}
            loadingText="LOADING"
          >
            START
          </ButtonWithSound>
        </div>
      </div>
    </LandingLayout>
  );
}

export default App;
