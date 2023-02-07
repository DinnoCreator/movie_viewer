import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feed1 from "./pages/Feed1";
import Feed2 from "./pages/Feed2";
import Feed3 from "./pages/Feed3";
import Feed4 from "./pages/Feed4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/feed1" element={<Feed1/>} />
      <Route path="/feed2" element={<Feed2/>} />
      <Route path="/feed3" element={<Feed3/>} />
      <Route path="/feed4" element={<Feed4/>} />
    </Routes>
  );
}

export default App;
