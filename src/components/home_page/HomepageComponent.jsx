import { AboutMeComponent } from "./about_me/AboutMeComponent";
import ContactComponent from "./contact_me/ContactComponent";
import { MyProjectsComponent } from "./my_projects/MyProjectsComponent";

export const HomepageComponent = () => {
  return (
    <div>
      <AboutMeComponent />
      <hr className="mt-20 border-li-gray border-opacity-60" />
      <MyProjectsComponent />
      <hr className="mt-8 border-li-gray border-opacity-60" />
      <ContactComponent />
    </div>
  );
};
