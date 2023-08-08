import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="md:grid grid-cols-12 about-me-container">
        <AboutLeft />
        <span className="md:col-span-1 2xl:col-span-2 "></span>
        <AboutRight />
      </div>
    </>
  );
};
