import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Head/Header";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <div className="m-0 p-0">
      <Header />
      <Hero />
      <Aboutus />
      <Benefits />
      <Reviews/>
    </div>
  );
};

export default App;
