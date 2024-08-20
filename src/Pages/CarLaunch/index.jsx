import styled from 'styled-components'
import { CarPresentation } from './CarPresentation'
import { Informations } from './Informations'

const Container = styled.div`
    margin-top: 48px;

    @media (max-width: 425px) {
        margin-top: 24px;
    }
`

export const CarLaunch = () => {
    return (
        <Container>
            <CarPresentation />
            <Informations />
        </Container>
    )
}