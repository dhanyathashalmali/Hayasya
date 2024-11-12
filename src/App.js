import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* Sections */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="work"><Work /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </div>
  );
}

export default App;
