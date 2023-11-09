import "./App.css";
import About from "./components/About";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Cursor from "./components/Cursor";

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
      <div id="contact">
        <Footer />
      </div>
      <Copyright />
      <Cursor />
    </>
  );
}

export default App;
