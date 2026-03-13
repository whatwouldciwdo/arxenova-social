import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
    return (
        <main>
            <Navbar />

            
            <div style={{ paddingTop: "120px" }}>
                <CaseStudies />
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
