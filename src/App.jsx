import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./containers/Landing/Landing";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import ContactMe from './containers/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
