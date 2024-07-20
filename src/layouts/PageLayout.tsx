import { Navbar } from "../components/Navbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
    <div className="flex flex-col items-center w-full min-h-screen h-fit justify-between">
      <Navbar />
      {children}
    </div>
    </>
  );
};

