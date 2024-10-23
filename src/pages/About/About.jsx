import AboutSection from './sections/AboutSection/AboutSection'
import FutureVision from './sections/FutureVision/FutureVision'
import Hero from './sections/Hero/Hero'
import HowWeWork from './sections/HowWeWork/HowWeWork'
import KeyRolesTeam from './sections/KeyRolesTeam/KeyRolesTeam'
import OurMission from './sections/Mission/OurMission'

const About = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <OurMission />
            <FutureVision />
            <HowWeWork />
            <KeyRolesTeam />
        </>
    )
}

export default About
