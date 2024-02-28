import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marques from "./components/Marques";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripe from "./components/Stripe";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
// import LocomotiveScroll from "locomotive-scroll";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  // const scroll = new LocomotiveScroll();
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-full bg-zinc-900 text-white   font-sans">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marques />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
