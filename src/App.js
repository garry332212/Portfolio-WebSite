import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
