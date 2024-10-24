import Person1 from '../assets/images/CareerImg/Photo1.png'
import Person2 from '../assets/images/CareerImg/Photo2.png'
import Person3 from '../assets/images/CareerImg/Photo3.png'
import { linkbuilderJob } from './careerJobs/linkbuilder'
import { unitidevJob } from './careerJobs/unitiDeveloper'
import { writerJob } from './careerJobs/writer'

export const careerData = [
    {
        role: 'writer',
        description:
            'Our company is looking for a modern, vibrant, and ambitious Writer ready to create thrilling and exciting texts about our gaming project.',
        imageUrl: Person1,
        readMoreLink: 'job-writer',
        pageInfo: writerJob,
    },
    {
        role: 'Unity Dev',
        description:
            'Our company is looking for a talent Unity Developer, who is ready to dive into a world of fantastic coding and fruitful work as a part of creative dev team.',
        imageUrl: Person2,
        readMoreLink: 'job-unity-developer',
        pageInfo: unitidevJob,
    },
    {
        role: 'link builder',
        description:
            'Our Space Team is looking for the best team-player - Link Builder specialist.  We need a real guru of Crowd Marketing.',
        imageUrl: Person3,
        readMoreLink: 'job-linkbuilder',
        pageInfo: linkbuilderJob,
    },
]
