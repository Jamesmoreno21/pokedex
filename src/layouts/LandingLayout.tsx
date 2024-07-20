import background from "../assets/images/background.gif";
import { PageLayout } from "./PageLayout";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <img
        src={background}
        alt="background"
        className="absolute object-cover w-full h-full"
      />

      {children}
    </PageLayout>
  );
};
