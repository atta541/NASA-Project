import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Apod from "./pages/Apod/Apod";
import Neo from "./pages/Neo/Neo";
import Mars from "./pages/Mars/Mars";
import Tech from "./pages/Tech Transfer/Tech";

export default function App() {
  return (
    <>
      <Navbar /> 
      <main className=" ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/neo" element={<Neo />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="*" element={<h1 className="text-center text-2xl">Page not found</h1>} />
        </Routes>
      </main>

    </>
  );
}
