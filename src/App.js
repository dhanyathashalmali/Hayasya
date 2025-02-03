import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Trustees from "./Components/Trustees";
import Footer from "./Components/Footer";
import ApplicationForm from "./Components/ApplicationForm"; // Import the Application Form

function App() {
  return (
    <div className="App">
      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
     
      
      <div id="trustees">
        <Trustees />
      </div>
      <div id="application-form">
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
