import styled from 'styled-components'

const Card = styled.div.withConfig({
    // Utilizar shouldForwardProp para evitar que a prop cardWidth seja passada para o DOM
    shouldForwardProp: (prop) => !['cardWidth'].includes(prop),
})`
    align-items: end;
    border-radius: 20px;
    border: 2px solid var(--grayBorder);
    display: flex;
    height: auto;
    min-height: 240px;
    overflow: visible;
    position: relative;
    width: ${props => props.cardWidth || '250px'};

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

const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => !['buttonDisplay', 'buttonHeight', 'buttonWidth'].includes(prop),
})`
    all: unset;
    align-items: center;
    background-color: var(--black);
    border-radius: 15px;
    color: var(--white);
    cursor: pointer;
    display: ${props => props.buttonDisplay || 'none'};
    height: ${props => props.buttonHeight || '33px'};
    justify-content: center;
    transition: 0.2s ease-in-out;
    width: ${props => props.buttonWidth || '110px'};

    &:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }
`

const ValueCar = styled.span.withConfig({
    shouldForwardProp: (prop) => !['valueCarDisplay'].includes(prop),
})`
    display: ${props => props.valueCarDisplay || 'block'};
    font-size: 16px;
`


export const CardCar = ({ carImage, title, engineType, icon, onClick, valueCar, cardWidth, carWidth, titleSize, engineFontSize, valueCarDisplay, buttonDisplay, buttonWidth, buttonHeight }) => {
    return (
        <Card cardWidth={cardWidth}>
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

                <Button onClick={onClick} buttonDisplay={buttonDisplay} buttonWidth={buttonWidth} buttonHeight={buttonHeight}>
                    Detalhes
                </Button>

            </Container>
        </Card>
    )
}