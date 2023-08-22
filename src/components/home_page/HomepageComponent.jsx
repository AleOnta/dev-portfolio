import { AboutMeComponent } from "./about_me/AboutMeComponent";
import ContactComponent from "./contact_me/ContactComponent";
import { MyProjectsComponent } from "./my_projects/MyProjectsComponent";

export const HomepageComponent = () => {
  return (
    <div>
      <AboutMeComponent />
      <div className="w-full h-[150px] mt-14 sm:mt-24 md:mt-36 sm:mb-10 md:mb-14 lg:mb-20 flex justify-center items-center bg-gun-metal bg-opacity-75 shadow-md">
        <h3 className="text-white text-4xl font-bold font-titles uppercase">
          My Projects
        </h3>
      </div>
      <MyProjectsComponent />
      <div className="w-full h-[150px] mt-14 sm:mt-24 lg:mt-48 mb-10 lg:mb-32 flex justify-center items-center bg-gun-metal bg-opacity-75 shadow-md">
        <h2 className="text-white text-4xl font-bold font-titles uppercase">
          CONTACT ME
        </h2>
      </div>
      <ContactComponent />
    </div>
  );
};
