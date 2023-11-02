import "./App.css";
import About from "./components/About";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
    </>
  );
}

export default App;
