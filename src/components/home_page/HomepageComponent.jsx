import { AboutMeComponent } from "./about_me/AboutMeComponent";
import ContactComponent from "./contact_me/ContactComponent";
import { MyProjectsComponent } from "./my_projects/MyProjectsComponent";

export const HomepageComponent = () => {
  return (
    <div>
      <AboutMeComponent />
      <hr className="mt-20 border-li-gray border-opacity-60" />
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
