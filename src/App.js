import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomepageComponent } from "./components/home_page/HomepageComponent";
function App() {
  return (
    <>
      <div className="bg-blueish-gray">
        <div className="container mx-auto py-20">
          <Routes>
            <Route path="*" element={<HomepageComponent />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
