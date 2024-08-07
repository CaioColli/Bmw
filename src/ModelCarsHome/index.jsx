import styled from 'styled-components'
import { useFetch } from '../Hooks/useFetchCars'
import { SubTitle } from '../SubTitle'
import { CardCar } from '../CardCars'
import { useEffect, useRef } from 'react'
import { pageAnimation } from '../Animations'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 140px;
    margin-bottom: 48px;

    @media (max-width: 768px) {
        align-items: center;
        gap: 70px;
        margin: 24px 0;
    }
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media (max-width: 768px) {
        gap: 24px;
    }
`

const ContentCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: space-around;

    @media (max-width: 768px) {
        gap: 50px;
    }
`

const Text = styled.h5`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`

export const Cars = () => {
    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')
    const container = useRef(null)

    useEffect(() => {
        if(container.current) {
            pageAnimation(container.current, 150)
        }
    }, [data])

    const cars = ['10', '25', '26', '3', '28', '29']
    const selectedCars = data.filter(car => cars.includes(car.ID_Carro))

    return (
        <Container ref={container}>
            <SubTitle text='Conheça alguns carros BWM' />

            <Content>
                {selectedCars && (
                    <ContentCards>
                        {selectedCars.map(car => (
                            <CardCar
                                key={car.ID_Carro}
                                carImage={car.FotoFrontal}
                                title={car.Modelo}
                                engineType={car.FiltroCombustível}
                                //onClick={() => click(car)}
                                //
                                cardWidth='530px'
                                carWidth='450px'
                                titleSize='30px'
                                engineFontSize='16px'
                                valueCarDisplay='none'
                                buttonDisplay='flex'
                                buttonWidth='145px'
                                buttonHeight='43px'
                            />
                        ))}
                    </ContentCards>
                )}

                <Text>
                    TODOS MODELOS
                </Text>
            </Content>
        </Container>
    )
}