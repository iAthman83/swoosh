import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarComponent from "./components/NavBarComponent";
import Homepage from "./pages/Homepage";
import CatalogPage from "./pages/CatalogPage";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <div>
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
