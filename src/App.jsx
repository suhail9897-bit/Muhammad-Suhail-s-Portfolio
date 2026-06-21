import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/schematicDetails" element={<SchematicDetails />} />
          <Route path="/secondProject" element={<SecondProject />} />
          <Route path="/thirdProject" element={<ThirdProject />} />
          <Route path="/fourthProject" element={<FourthProject />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;