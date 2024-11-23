import { Cta } from "../components/Cta";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main>
      <Cta />
      <NavBar />
      <div className="border-b-2 border-para"></div>
      <HeroSection />
    </main>
  );
};

export default Home;
