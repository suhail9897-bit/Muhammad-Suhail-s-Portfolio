import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/Footer";
import SchematicDetails from "./components/projects folder/schematicDetails";

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
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;