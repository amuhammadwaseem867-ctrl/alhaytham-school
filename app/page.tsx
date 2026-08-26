import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Admissions from "@/components/Admissions";
import Campus from "@/components/Campus";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <Campus />
        <News />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}