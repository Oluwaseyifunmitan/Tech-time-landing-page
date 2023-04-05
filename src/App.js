import Hero from "./components/Hero/Hero"
// import AboutUs from "./components/AboutUs/AboutUs"
// import Courses from "./components/Courses/Courses"
// import Testimonial from "./components/Testimonial/Testimonial"
// import Community from "./components/Community/Community"
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
   <div>
    <Hero />

    {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter> */}
   </div>
  );
}

export default App;
