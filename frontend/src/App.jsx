import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apod from "./pages/Apod/Apod";
import Asteroids from "./pages/Asteroids";
import Mars from "./pages/Mars";
import Tech from "./pages/Tech";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16 px-4 pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="*" element={<h1 className="text-center text-2xl">Page not found</h1>} />
        </Routes>
      </main>
      <Footer />

    </>
  );
}
