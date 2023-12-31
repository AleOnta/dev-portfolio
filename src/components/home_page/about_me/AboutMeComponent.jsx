import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="md:grid grid-cols-12 about-me-container xxs:mb-20 md:mb-56 lg:mb-96">
        <AboutLeft />
        <span className="md:col-span-1 2xl:col-span-2 "></span>
        <AboutRight />
      </div>
    </>
  );
};
