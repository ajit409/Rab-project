import "./App.css";
import Card from "./components/Card/Card.js";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Lassen from './components/Lassen/Lassen';
import SliderCard from './components/Slider/SliderCard' ;

// import Service from './components/Service/Service';




function App() {
  return (
    <div className="App">
      <Header/>
      <Card />
      <Project />
      <SliderCard/>
      {/* <Service/> */}
<Lassen />
      <Footer />
    </div>
  );
}

export default App;
