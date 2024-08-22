import styled from 'styled-components'
import { PrincipalCard } from './PrincipalCard'
import { Cards } from './Cards'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media (max-width: 425px) {
        gap: 24px;
    }
`

export const ExteriorDesign = () => {

    return (
        <Container>
            <PrincipalCard />
            <Cards />
        </Container>
    )
}