import styled from 'styled-components'
import background from '../../../../public/Background.png'
import { LinkLogo } from '../IconLink'
import { DescriptionCar, ModelCar, PriceCar } from '../Texts'
import { currencyFormat } from '../../../Utils/currencyFormat'
import logoBmwBackground from '../../../../public/BMW Logo Background.svg'

const PhotoCar = styled.img`
    left: 5%;
    max-width: 362px;
    max-width: ${props => props.car || '362px'};
    position: absolute;
    top: 40%;

    @media (max-width: 1440px) {
        left: 20%;
    }

    @media (max-width: 768px) {
        left: 5%;
        max-width: 250px;
    }
`

const Card = styled.div`
    background-color: var(--black);
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    height: ${props => props.height || '400px' };
    position: relative;
    width: ${props => props.width || '400px' };

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

const LogoBackground  = styled.div`
    background-image: url(${logoBmwBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: ${props => props.display || 'none'};
    height: 200px;
    position: absolute;
    top: 25%;
    width: 605px;

    @media (max-width: 1440px) {
        display: none;
    }
`

export const CarCard = ({ data, width, height, car, display }) => {
    return (
        <>
            <Card width={width} height={height}>
                <LinkLogo />
                <LogoBackground display={display} />

                {data && (
                    <>
                        <PhotoCar src={data.FotoFrontal} alt='Foto' car={car} />

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