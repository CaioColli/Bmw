import styled from 'styled-components'
import { CarPresentation } from './CarPresentation'
import { Informations } from './Informations'
import { Picture } from './TechnicalDetails'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    gap: 48px;

    @media (max-width: 425px) {
        margin-top: 24px;
    }
`

export const CarLaunch = () => {
    return (
        <Container>
            <CarPresentation />
            <Informations />
            <Picture />
        </Container>
    )
}