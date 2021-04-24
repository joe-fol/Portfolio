import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./containers/Landing/Landing";
import AboutMe from "./containers/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
    </>
  );
}

export default App;
