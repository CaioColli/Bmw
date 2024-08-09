import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    width: 1920px;

    @media (max-width: 1440px) {
        padding: 0 48px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
`

export const PageContainer = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}