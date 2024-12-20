import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { StyledAboutPage } from './About.styled'
import AboutSection from './sections/AboutSection/AboutSection'
import ChooseUs from './sections/ChooseUs/ChooseUs'
import FutureVision from './sections/FutureVision/FutureVision'
import Hero from './sections/Hero/Hero'
import HowWeWork from './sections/HowWeWork/HowWeWork'
import KeyRolesTeam from './sections/KeyRolesTeam/KeyRolesTeam'
import OurMission from './sections/Mission/OurMission'

const About = () => {
    return (
        <StyledAboutPage>
            <ScrollToTop />
            <Hero />
            <AboutSection />
            <OurMission />
            <FutureVision />
            <HowWeWork />
            <KeyRolesTeam />
            <ChooseUs />
        </StyledAboutPage>
    )
}

export default About
