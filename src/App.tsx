import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Header } from "./components/header/Header"
import { links } from "./utils/links"
import { MobileMenu } from "./components/mobile-menu/Mobile.Menu"
import { useState } from "react"
import { Footer } from "./components/footer/Footer"
import { ConditionsWeTreat } from "./pages/conditions"
import { TreatmentModalities } from "./pages/treatment-modalities"
import { Team } from "./pages/about/team"
import { WhoWeAre } from "./pages/about"
import { Contacts } from "./pages/contacts"

type TLink = {
  name: string;
  url: string;
}

const App = () => {

  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false)
  const [step, setStep] = useState(0)
  const [submenu, setSubmenu] = useState<TLink[] | undefined>(undefined)

  const handleToggleMobileMenu = () => {
    setStep(0)
    setIsMobileMenuOut(prev => !prev)
  }

  const handleChooseStep = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, submenu: { name: string, url: string }[] | undefined) => {
    setStep(1)
    setSubmenu(submenu)
  }

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOut(false)
  }

  return (
    <Router>
      <Header isMobileMenuOut={isMobileMenuOut} handleToggleMobileMenu={handleToggleMobileMenu} links={links} />
      <MobileMenu submenu={submenu} handleChooseStep={handleChooseStep} step={step} isMobileMenuOut={isMobileMenuOut} links={links} handleCloseMobileMenu={handleCloseMobileMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions-we-treat" element={<ConditionsWeTreat />} />
        <Route path="/treatment-modalities" element={<TreatmentModalities />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/practitioners" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
