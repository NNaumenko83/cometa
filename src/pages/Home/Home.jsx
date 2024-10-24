import About from '../../components/sections/About/About'
import Career from '../../components/sections/Career/Career'
import CogaInfo from '../../components/sections/CogaInfo/CogaInfo'
import ContactSpace from '../../components/sections/ContactSpace/ContactSpace'
import Hero from '../../components/sections/Hero/Hero'
import PoombInfo from '../../components/sections/PoombInfo/PoombInfo'
import SpaceBlog from '../../components/sections/SpaceBlog/SpaceBlog'
import SpaceMedia from '../../components/sections/SpaceMedia/SpaceMedia'
import Team from '../../components/sections/Team/Team'
import WorkSpace from '../../components/sections/WorkSpace/WorkSpace'
import ScrollToSection from '../../components/ScrollToSection/ScrollToSection'
import ProjectShowcase from '../../components/sections/ProjectShowcase/ProjectShowcase'

const Home = () => {
    return (
        <>
            <ScrollToSection />
            <Hero />
            <About />
            <ProjectShowcase />
            <WorkSpace />
            <Team />
            <CogaInfo />
            <PoombInfo />
            <SpaceBlog />
            <SpaceMedia />
            <Career />
            <ContactSpace />
        </>
    )
}

export default Home
