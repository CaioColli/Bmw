import styled from 'styled-components'
import arrow from '../../../public/Seta.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 580px;

    @media (max-width: 1440px) {
        text-align: center;
    }
`

const Title = styled.h1`
    font-weight: 600px;
    font-size: 48px;
    color: var(--black);
`
const Arrow = styled.img`
    height: 40px;
    margin-left: 24px;
    width: auto;

    @media (max-width: 1440px) {
        display: none;
    }
`

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 24px;
`

export const Message = () => {
    return (
        <Container>
            <Title>
                PRINCIPAL SHOWCASE DA BMW
                <Arrow src={ arrow }/>
            </Title>
            <Paragraph>
                BMW são sinônimos de luxo, desempenho e inovação, oferecendo uma experiência de condução excepcional combinada com design elegante e tecnologia de ponta.
            </Paragraph>
        </Container>
    )
}