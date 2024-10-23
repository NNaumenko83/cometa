import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import { SharedLayout } from '../SharedLayout/SharedLayout'

const Home = lazy(() => import('../../pages/Home/Home'))
const About = lazy(() => import('../../pages/About/About'))
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'))

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
