import { Button } from '@/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div.withConfig({
    // Utilizar shouldForwardProp para evitar que a prop cardWidth seja passada para o DOM
    shouldForwardProp: (prop) => !['wideCard', 'bigCard', 'pointer'].includes(prop),
})`
    align-items: end;
    border-radius: 20px;
    border: 2px solid var(--grayBorder);
    display: flex;
    height: auto;
    min-height: ${props => props.bigCard  ? '250px' : '150px'};
    overflow: visible;
    position: relative;
    width: ${props => props.wideCard ? '530px' : '250px'};
    cursor: ${props => props.pointer ? 'pointer' : 'default'};
    transition: 0.2s ease-in;

    &:hover {
        scale: 1.02;
    }

    @media (max-width: 768px) {
        max-width: 250px;
        min-height: 192px;
    }
`
const CarImage = styled.img.withConfig({
    shouldForwardProp: (prop) => !['bigImage'].includes(prop),
})`
    left: 50%;
    max-width: ${props => props.bigImage ? '450px' : '200px'};
    position: absolute;
    top: -40%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        max-width: 200px;
        top: -20%;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Title = styled.h4.withConfig({
    shouldForwardProp: (prop) => !['bigTitle'].includes(prop),
})`
    font-family: var(--fontLato);
    //font-size: ${props => props.titleSize || '18px'};
    font-size: ${props => props.bigTitle ? '30px' : '18px'};
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const EngineContainer = styled.div`
    display: flex;
    gap: 8px;
`

const Engine = styled.p.withConfig({
    shouldForwardProp: (prop) => !['bigDescription'].includes(prop),
})`
    color: var(--gray);
    font-size: ${props => props.bigDescription ? '16px' : '14px'};
    font-weight: 400;
`

const EngineIcon = styled.img``

const ValueCar = styled.span.withConfig({
    shouldForwardProp: (prop) => !['showValueCar'].includes(prop),
})`
    display: ${props => props.showValueCar ? 'block' : 'none'};
    font-size: 16px;
    font-weight: 500;
`

export const CardCar = ({ wideCard, bigImage, bigCard, pointer, carImage, bigTitle, title, bigDescription, engineType, icon, showValue, valueCar, onClick, flex, large }) => {
    return (
        <Card wideCard={wideCard} bigCard={bigCard} pointer={pointer} >
            <CarImage bigImage={bigImage} src={carImage} />
            <Container>

                <TitleContainer>
                    <Title bigTitle={bigTitle}> {title} </Title>
                    <EngineContainer>
                        <Engine bigDescription={bigDescription}> {engineType} </Engine>
                        <EngineIcon src={icon} />
                    </EngineContainer>
                </TitleContainer>

                <ValueCar showValueCar={showValue} > {`A partir de ${valueCar}`} </ValueCar>

                <Button onClick={onClick}
                    flex={flex}
                    large={large}
                >
                    DETALHES
                </Button>

            </Container>
        </Card>
    )
}