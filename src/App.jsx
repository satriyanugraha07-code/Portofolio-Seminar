import EdgeScrollbar from './components/EdgeScrollbar'
import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import GallerySection from './sections/GallerySection'
import HeroSection from './sections/HeroSection'
import ProgramSection from './sections/ProgramSection'
import RegistrationCTA from './sections/RegistrationCTA'
import ScrollWelcome from './sections/ScrollWelcome'
import ValuesSection from './sections/ValuesSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollWelcome />
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ProgramSection />
        <GallerySection />
        <RegistrationCTA />
        <ContactSection />
      </main>
      <EdgeScrollbar />
    </>
  )
}

export default App
