import "./App.css";
import AboutUs from "./components/about-us/AboutUs.js";
import Benefits from "./components/benefits/Benefits.js";
import FAQs from "./components/faqs/FAQs.js";
import Features from "./components/features/Features.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/head/Header.js";
import Hero from "./components/hero/Hero.js";
import Pricing from "./components/pricing/Pricing.js";
import Reviews from "./components/reviews/Reviews.js";

const App = () => {
  return (
    <div className="m-0 p-0">
      <Header />
      <Hero />
      <AboutUs />
      <Benefits />
      <Reviews/>
      <Features/>
      <Pricing/>
      <FAQs/>
      <Footer/>
    </div>
  );
};

export default App;
