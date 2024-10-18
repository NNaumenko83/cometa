import Header from '../Header/Header'
import Main from '../Main/Main'
import About from '../sections/About/About'
import Career from '../sections/Career/Career'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'
import Hero from '../sections/Hero/Hero'
import Team from '../sections/Team/Team'
import CogaInfo from '../sections/CogaInfo/CogaInfo'
import PoombInfo from '../sections/PoombInfo/PoombInfo'

import { AppWrapper } from './App.styled'
import SpaceBlog from '../sections/SpaceBlog/SpaceBlog'
import SpaceMedia from '../sections/SpaceMedia/SpaceMedia'

function App() {
    return (
        <AppWrapper>
            <Header />
            <Main>
                <Hero />
                <About />
                <Team />
                <CogaInfo />
                <PoombInfo />
                <SpaceBlog />
                <SpaceMedia />
                <Career />
                <Contact />
            </Main>
            <Footer />
        </AppWrapper>
    )
}

export default App
