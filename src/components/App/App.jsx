import Header from '../Header/Header'
import Main from '../Main/Main'
import About from '../sections/About/About'
import Blog from '../sections/Blog/Blog'
import Career from '../sections/Career/Career'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'
import Hero from '../sections/Hero/Hero'
import WorkSpace from '../sections/WorkSpace/WorkSpace'
import { AppWrapper } from './App.styled'

function App() {
    return (
        <AppWrapper>
            <Header />
            <Main>
                <Hero />
                <About />
                <WorkSpace />
                <Blog />
                <Career />
                <Contact />
            </Main>
            <Footer />
        </AppWrapper>
    )
}

export default App
