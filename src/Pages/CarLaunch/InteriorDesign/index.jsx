import styled from 'styled-components'
import { PrincipalVideo } from './PrincipalVideo'
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

export const InteriorDesign = () => {
    return (
        <Container>
            <PrincipalVideo />
            <PrincipalCard />
            <Cards />
        </Container>
    )
}