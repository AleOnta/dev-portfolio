import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomepageComponent } from "./components/home_page/HomepageComponent";
import FooterComponent from "./components/home_page/footer/FooterComponent";
import ScrollNavbarComponent from "./components/onscroll_navbar/ScrollNavbarComponent";

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
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
