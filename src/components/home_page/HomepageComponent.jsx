import { AboutMeComponent } from "./about_me/AboutMeComponent";
import { MyProjectsComponent } from "./my_projects/MyProjectsComponent";

export const HomepageComponent = () => {
  return (
    <div>
      <AboutMeComponent />
      <MyProjectsComponent />
    </div>
  );
};
