import styled from 'styled-components'
import background from '/public/Background.png'
import { LinkLogo } from '../IconLink'
import { DescriptionCar, ModelCar, PriceCar } from '../Texts'
import { currencyFormat } from '@/Utils/currencyFormat'
import logoBmwBackground from '/public/BMWLogoBackground.png'

const PhotoCar = styled.img.withConfig({
    shouldForwardProp: (prop) => !['widthCar'].includes(prop),
})`
    left: 5%;
    max-width: 362px;
    max-width: ${props => props.widthCar || '362px'};
    position: absolute;
    top: 40%;

    @media (max-width: 1440px) {
        left: 20%;
        max-width: 362px;
    }

    @media (max-width: 768px) {
        left: 5%;
        max-width: 250px;
    }
`

const Card = styled.div.withConfig({
    shouldForwardProp: (prop) => !['cardHeight', 'cardWidth'].includes(prop),
})`
    background-color: var(--black);
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    height: ${props => props.cardHeight || '400px' };
    overflow: hidden;
    position: relative;
    width: ${props => props.cardWidth || '400px' };

    &:hover ${DescriptionCar} {
        opacity: 1;
    }

    @media (max-width: 1440px) {
        width: 600px;
        max-height: 400px;
    }

    @media (max-width: 768px) {
        max-width: 272px;
        max-height: 272px;
    }
`

const LogoBackground  = styled.div.withConfig({
    shouldForwardProp: (prop) => !['logoDisplay'].includes(prop),
})`
    background-image: url(${logoBmwBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: ${props => props.logoDisplay || 'none'};
    height: 200px;
    left: -20%;
    position: absolute;
    top: 25%;
    width: 605px;

    @media (max-width: 1440px) {
        display: none;
    }
`

export const CarCard = ({ data, cardWidth, cardHeight, onClick, widthCar, logoDisplay }) => {
    return (
        <>
            <Card cardWidth={cardWidth} cardHeight={cardHeight}>
                <LinkLogo onClick={onClick} />
                <LogoBackground logoDisplay={logoDisplay} />

                {data && (
                    <>
                        <PhotoCar src={data.FotoFrontal} alt={data.Modelo} widthCar={widthCar} />

                        <DescriptionCar>
                            <ModelCar> {data.Modelo} </ModelCar>
                            <PriceCar> {currencyFormat(data.Preço)} </PriceCar>
                        </DescriptionCar>
                    </>
                )}
            </Card>
        </>
    )
}