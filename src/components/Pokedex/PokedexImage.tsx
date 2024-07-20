interface PokedexImageProps {
  src: string;
  alt: string;
}

export const PokedexImage = ({ src, alt }: PokedexImageProps) => {
  return (
    <div className="flex justify-center w-3/4 h-64 bg-green-200 rounded-xl border-4 border-black">
      <img src={src} alt={alt} className="h-full" />
    </div>
  );
};
