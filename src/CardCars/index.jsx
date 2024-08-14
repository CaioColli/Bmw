import { Button } from '@/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div.withConfig({
    // Utilizar shouldForwardProp para evitar que a prop cardWidth seja passada para o DOM
    shouldForwardProp: (prop) => !['cardWidth', 'cardHeight', 'cardCursor'].includes(prop),
})`
    align-items: end;
    border-radius: 20px;
    border: 2px solid var(--grayBorder);
    display: flex;
    height: auto;
    min-height: 240px;
    min-height: ${props => props.cardHeight || '150px'};
    overflow: visible;
    position: relative;
    width: ${props => props.cardWidth || '250px'};
    cursor: ${props => props.cardCursor || 'default'}; 
    cursor: pointer;

    @media (max-width: 768px) {
        max-width: 250px;
        min-height: 192px;
    }
`
const CarImage = styled.img.withConfig({
    shouldForwardProp: (prop) => !['carWidth'].includes(prop),
})`
    left: 50%;
    max-width: ${props => props.carWidth || '200px'};
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
    shouldForwardProp: (prop) => !['titleSize'].includes(prop),
})`
    font-family: var(--fontLato);
    font-size: ${props => props.titleSize || '18px'};
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
    shouldForwardProp: (prop) => !['engineFontSize'].includes(prop),
})`
    color: var(--gray);
    font-size: ${props => props.engineFontSize || '14px'};
    font-weight: 400;
`

const EngineIcon = styled.img`

`

const ValueCar = styled.span.withConfig({
    shouldForwardProp: (prop) => !['valueCarDisplay'].includes(prop),
})`
    display: ${props => props.valueCarDisplay || 'block'};
    font-size: 16px;
    font-weight: bold;
`
const StyledLink = styled(Link)`
    all: unset;
`

export const CardCar = ({ cardWidth, carWidth, cardHeight, cardCursor, carImage, titleSize, title, engineFontSize, engineType, icon, valueCarDisplay, valueCar, linkTo, onClick, buttonDisplay, buttonPadding }) => {
    return (
        <Card cardWidth={cardWidth} cardHeight={cardHeight} cardCursor={cardCursor} >
            <CarImage carWidth={carWidth} src={carImage} />
            <Container>

                <TitleContainer>
                    <Title titleSize={titleSize}> {title} </Title>
                    <EngineContainer>
                        <Engine engineFontSize={engineFontSize}> {engineType} </Engine>
                        <EngineIcon src={icon} />
                    </EngineContainer>
                </TitleContainer>

                <ValueCar valueCarDisplay={valueCarDisplay} > {`A partir de ${valueCar}`} </ValueCar>

                <StyledLink to={linkTo}>
                    <Button onClick={onClick}
                        buttonDisplay={buttonDisplay}
                        buttonPadding={buttonPadding}
                    >
                        DETALHES
                    </Button>
                </StyledLink>

            </Container>
        </Card>
    )
}