import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomepageComponent } from "./components/home_page/HomepageComponent";
import FooterComponent from "./components/footer/FooterComponent.jsx";
import ScrollNavbarComponent from "./components/onscroll_navbar/ScrollNavbarComponent";
import BackToTopComponent from "./components/back_to_top_btn/BackToTopComponent";

function App() {
  return (
    <>
      <div className="bg-custom-charcoal bg-opacity-90">
        <ScrollNavbarComponent />
        <div className="container mx-auto py-10 md:py-14">
          <Routes>
            <Route path="*" element={<HomepageComponent />} />
          </Routes>
        </div>
        <BackToTopComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
