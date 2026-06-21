import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/Footer";
import SchematicDetails from "./components/projects folder/schematicDetails";
import SecondProject from "./components/projects folder/secondProject";
import ThirdProject from "./components/projects folder/ThirdProject";
import FourthProject from "./components/projects folder/FourthProject";
import FifthProject from "./components/projects folder/fifthProject";
import SixthProject from "./components/projects folder/sixthProject";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Hero />
      <Projects variant="preview" />
      <AboutUs />
      <ContactUs />
    </>
  );
}

function ProjectsPage() {
  return <Projects variant="full" />;
}

function AboutPage() {
  return <AboutUs isPage />;
}

function ContactPage() {
  return <ContactUs isPage />;
}

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/schematicDetails" element={<SchematicDetails />} />
          <Route path="/secondProject" element={<SecondProject />} />
          <Route path="/thirdProject" element={<ThirdProject />} />
          <Route path="/fourthProject" element={<FourthProject />} />
          <Route path="/fifthProject" element={<FifthProject />} />
          <Route path="/sixthProject" element={<SixthProject />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;