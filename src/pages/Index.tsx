import Hero from "@/components/Hero";
import About from "@/components/About";
import Playlists from "@/components/Playlists";
import HowToInstall from "@/components/HowToInstall";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Playlists />
      <HowToInstall />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
