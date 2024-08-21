import styled from 'styled-components'
import { Image } from './ImageComponent'
import { CardsContainer } from './CardsContainer'
import { ImagesContainer } from './ImagesContainer'

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 96px;

    @media (max-width: 768px) {
        gap: 48px;
    }

    @media (max-width: 425px) {
        gap: 24px;
    }
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;

    @media (max-width: 1024px) {
        max-width: 400px;
    }
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
`

export const SubTitle = styled.h2`
    font-size: 36px;
    font-weight: 500;
`

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 500;
`

export const Informations = () => {
    return (
        <Container>
            <CardsContainer />
            <ImagesContainer />
        </Container>
    )
}
