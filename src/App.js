import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Header from "./components/Head/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="m-0 p-0">
      <Header />
      <Hero />
      <Aboutus />
    </div>
  );
};

export default App;
