import Header from '../Header/Header'
import Main from '../Main/Main'
import About from '../sections/About/About'
import Career from '../sections/Career/Career'

import Footer from '../sections/Footer/Footer'
import Hero from '../sections/Hero/Hero'
import Team from '../sections/Team/Team'
import CogaInfo from '../sections/CogaInfo/CogaInfo'
import PoombInfo from '../sections/PoombInfo/PoombInfo'

import { AppWrapper } from './App.styled'
import SpaceBlog from '../sections/SpaceBlog/SpaceBlog'
import SpaceMedia from '../sections/SpaceMedia/SpaceMedia'
import ContactSpace from '../sections/ContactSpace/ContactSpace'
import WorkSpace from '../sections/WorkSpace/WorkSpace'

function App() {
    return (
        <AppWrapper>
            <Header />
            <Main>
                <Hero />
                <About />
                <WorkSpace />
                <Team />
                <CogaInfo />
                <PoombInfo />
                <SpaceBlog />
                <SpaceMedia />
                <Career />
                <ContactSpace />
            </Main>
            <Footer />
        </AppWrapper>
    )
}

export default App
