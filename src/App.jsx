import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./containers/Landing/Landing";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import ContactMe from './containers/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
