import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
// import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
// import Login from "./components/Login";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Medication from "./components/Medication";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
