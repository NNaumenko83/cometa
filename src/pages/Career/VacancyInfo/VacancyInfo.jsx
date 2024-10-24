/* eslint-disable react/prop-types */
import {
    JobTitle,
    VacancyInfoContainer,
    JobTitleSecondary,
    VacancyDescriptionWrapper,
    OfferList,
    CardLinkSendCV,
} from './VacancyInfo.styled'

const VacancyInfo = ({ job }) => {
    return (
        <VacancyInfoContainer>
            <JobTitle>{job.pageInfo.vacancy}</JobTitle>

            <JobTitleSecondary>{job.pageInfo.title}</JobTitleSecondary>
            <VacancyDescriptionWrapper>
                <p>{job.pageInfo.description}</p>
                <div>
                    <h3>{job.pageInfo.responsibilities.title}</h3>
                    <ul>
                        {job.pageInfo.responsibilities.list.map((responsibility, index) => (
                            <li key={index}>
                                <strong>{responsibility.title}</strong>
                                <p>{responsibility.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>{job.pageInfo.offer.title}</h3>
                    <OfferList>
                        {job.pageInfo.offer.list.map((offerItem, index) => (
                            <li key={index}>{offerItem}</li>
                        ))}
                    </OfferList>
                </div>

                <p>{job.pageInfo.callToAction}</p>
                <CardLinkSendCV href="https://t.me/hr_lissa" target="_blank" rel="noopener noreferrer nofollow">
                    send CV
                </CardLinkSendCV>
            </VacancyDescriptionWrapper>
        </VacancyInfoContainer>
    )
}

export default VacancyInfo
