import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <AboutStats />
            <Testimonial />
            <Team />
            <Contact />
            <Footer />
        </main>
    );
}
