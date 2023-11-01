import "./App.css";
import About from "./components/About";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;
