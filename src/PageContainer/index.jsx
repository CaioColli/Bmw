import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    width: 1440px;
    padding: 0 48px;

    @media (min-width: 1440px) {
        padding: 0;
    }
`

export const PageContainer = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}