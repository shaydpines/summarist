import Footer from "./components/Footer";
import Features from "./components/Home/Features";
import Landing from "./components/Home/Landing";
import Numbers from "./components/Home/Numbers";
import Reviews from "./components/Home/Reviews";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
