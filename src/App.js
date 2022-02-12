import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
// import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Medication from "./components/medication/Medication";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medication" element={<Medication />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
