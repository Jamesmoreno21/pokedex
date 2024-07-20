interface PokedexLayoutProps {
  children: React.ReactNode;
}

export const PokedexLayout = ({ children }: PokedexLayoutProps) => {
  return (
    <div className="relative my-5 flex flex-col items-center w-11/12 md:w-7/12 h-fit justify-between bg-red-700 border-8 border-black rounded-xl shadow-lg text-white">
      {children}
    </div>
  );
};
