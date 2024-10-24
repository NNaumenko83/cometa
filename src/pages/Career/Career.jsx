import { useParams } from 'react-router-dom'
import CareerPageWrapper from './CareerPageWrapper/CareerPageWrapper'
import { careerData } from '../../constants/careerData'
import VacancyInfo from './VacancyInfo/VacancyInfo'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const Career = () => {
    const params = useParams()
    const jobKey = params.job

    const job = careerData.find(career => career.readMoreLink === jobKey)

    if (!job) {
        return (
            <CareerPageWrapper>
                <div>Vacancy not found</div>
            </CareerPageWrapper>
        )
    }

    return (
        <>
            <ScrollToTop />
            <CareerPageWrapper>
                <VacancyInfo job={job} />
            </CareerPageWrapper>
        </>
    )
}

export default Career
