import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Subscription from "./pages/Subscription";
import Assignment from "./pages/Assignment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/assignment" element={<Assignment />} />
    </Routes>
  );
}

export default App;
