import AuthRedirect from "./components/Home/AuthRedirect";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import Features from "./components/Home/Features";
import Reviews from "./components/Home/Reviews";
import Numbers from "./components/Home/Numbers";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
      <AuthRedirect redirectTo="/for-you" />
      <Navbar />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
