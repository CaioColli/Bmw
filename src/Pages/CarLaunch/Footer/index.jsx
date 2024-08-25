import styled from 'styled-components'
import BgImage from '/public/Images/PicRodapeM5.png'

const Container = styled.footer`
    align-items: center;
    background-color: var(--grayBg);
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding: 48px;
`

const Contain = styled.div`
    background-image: url(${BgImage});
    background-position: center;
    background-size: cover;
    width: 1200px;
    height: 700px;

    @media (max-width: 1440px) {
        max-width: 900px;
        max-height: 500px;
    }

    @media (max-width: 1024px) {
        max-width: 600px;
        max-height: 330px;
    }

    @media (max-width: 767px) {
        max-width: 300px;
        max-height: 170px;
    }
`
const Description = styled.p`
    width: 1200px;
    font-size: 14px;
    color: var(--gray);
    
    @media (max-width: 1440px) {
        max-width: 900px;
    }

    @media (max-width: 1024px) {
        max-width: 600px;
    }

    @media (max-width: 767px) {
        max-width: 300px;
    }
`

export const Footer = () => {
    return (
        <Container>
            <Contain />
            <Description>
                BMW M5 Sedan*: Consumo de combustível combinado ponderado em l/100km: 1.7; com bateria descarregada: 10.3 Emissões de CO2 combinadas ponderadas em g/km: 39 Consumo de energia combinado ponderado em kWh/100 km: 25.5 Classe de emissões de CO2: B; com bateria descarregada: G Autonomia elétrica em km: 67
            </Description>
        </Container>
    )
}