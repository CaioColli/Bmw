import styled from 'styled-components'
import bgCardM5 from '/public/PicM5Video.png'

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
    /* Adiciona quebra de linha em palavras longas */
    overflow-wrap: break-word; 
    /* Quebra palavras longas */
    word-break: break-word;

    @media (max-width: 1280px) {
        gap: 24px;
        flex-direction: column-reverse;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 500px;

    @media (max-width: 1440px) {
        max-width: 450px;
    }

    @media (max-width: 768px) {
        max-width: 400px;
    }

    @media (max-width: 425px) {
        max-width: 270px;
    }
`

export const CardContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['bgImage'].includes(prop)
})`
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 520px;
    position: relative;
    width: 780px;

    @media (max-width: 1440px) {
        max-width: 450px;
        max-height: 300px;
    }

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 270px;
    }

    @media (max-width: 425px) {
        max-width: 270px;
        max-height: 180px;
    }
`

export const Card = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}