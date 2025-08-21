import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  );
}
