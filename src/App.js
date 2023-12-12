import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Benefits from "./components/Benefits/Benefits";
import FAQs from "./components/FAQs/FAQs";
import Features from "./components/Features/Features";
import Header from "./components/Head/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <div className="m-0 p-0">
      <Header />
      <Hero />
      <Aboutus />
      <Benefits />
      <Reviews/>
      <Features/>
      <Pricing/>
      <FAQs/>
    </div>
  );
};

export default App;
