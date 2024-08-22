import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
    justify-content: center;
`

export const Contain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 400px;

    @media (max-width: 425px) {
        max-width: 270px;
        gap: 16px;
    }
`

export const Card = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}