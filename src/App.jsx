import AboutPage from "./components/AboutPage"
import ClientsPage from "./components/ClientsPage"
import EyesPage from "./components/EyesPage"
import FeaturedPage from "./components/FeaturedPage"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import ProjectPage from "./components/ProjectPage"
import Navbar from "./components/navbar/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/bundled/locomotive-scroll.css'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-slate-50">
        <Navbar />
        <LandingPage />
        <Marquee />
        <AboutPage />
        <EyesPage />
        <FeaturedPage />
        <ClientsPage />
        <ProjectPage />
        <Footer />
      </div>
    </>
  )
}

export default App
