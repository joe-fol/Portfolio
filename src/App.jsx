import './App.css';
import Navbar from './components/Navbar';
import Landing from './containers/Landing/Landing';
import HeadingBar from './components/HeadingBar';
import AboutMe from './containers/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <HeadingBar />
      <AboutMe />
    </>
  );
}

export default App;
