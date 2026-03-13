import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWorks from "@/components/RecentWorks";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RecentWorks />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
