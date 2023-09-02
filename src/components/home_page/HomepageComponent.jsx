import { AboutMeComponent } from "./about_me/AboutMeComponent";
import ContactComponent from "./contact_me/ContactComponent";
import { MyProjectsComponent } from "./my_projects/MyProjectsComponent";

export const HomepageComponent = () => {
  return (
    <div>
      <AboutMeComponent />
      <MyProjectsComponent />
      <ContactComponent />
    </div>
  );
};
