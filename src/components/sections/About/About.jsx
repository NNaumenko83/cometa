import { memo } from 'react'
import AboutTitle from './About/AboutTitle/AboutTitle'

const About = () => {
    return (
        <div>
            <AboutTitle>
                About <br />
                Space
            </AboutTitle>
        </div>
    )
}

export default memo(About)
