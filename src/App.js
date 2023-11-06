import "./App.css";
import About from "./components/About";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
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
      <div id="contact">
        <Footer />
      </div>
      <form name="contact" netlify>
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <Copyright />
    </>
  );
}

export default App;
