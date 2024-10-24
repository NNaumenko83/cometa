import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import { SharedLayout } from '../SharedLayout/SharedLayout'

const Home = lazy(() => import('../../pages/Home/Home'))
const About = lazy(() => import('../../pages/About/About'))
const Career = lazy(() => import('../../pages/Career/Career'))
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'))

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="career/:job" element={<Career />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
