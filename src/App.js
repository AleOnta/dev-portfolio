import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AboutMeComponent } from "./components/home_page/about_me/AboutMeComponent";
function App() {
  return (
    <>
      <div className="bg-blueish-gray">
        <div className="container mx-auto py-20">
          <Routes>
            <Route path="*" element={<AboutMeComponent />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
