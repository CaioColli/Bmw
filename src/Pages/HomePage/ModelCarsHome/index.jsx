import styled from 'styled-components'
import { useFetch } from '@/Hooks/useFetchCars'
import { SubTitle } from '@/SubTitle'
import { CardCar } from '@/CardCars'
import { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SelectedModelContext } from '@/SelectedModelContext'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 140px;
    margin-bottom: 48px;
    padding: 0 48px;

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

const StyledLink = styled(Link)`
    all: unset;
`

const Button = styled.button`
    all: unset;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    
`

export const Cars = () => {
    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')
    const container = useRef(null)
    const navigate = useNavigate()
    
    const cars = ['10', '25', '26', '3', '28', '29']
    const selectedCars = data.filter(car => cars.includes(car.ID_Carro))

    const { setSelectedModel } = useContext(SelectedModelContext)

    const handleClick = (carModel) => {
        setSelectedModel(carModel)
        navigate('modelos')
        window.scrollTo(0, 0)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

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
                                onClick={() => handleClick(car.Modelo)}
                                bigCard
                                bigDescription
                                bigImage
                                bigTitle
                                flex
                                large
                                wideCard
                            />
                        ))}
                    </ContentCards>
                )}

                <StyledLink to='modelos' onClick={scrollToTop}>
                    <Button>
                        TODOS MODELOS
                    </Button>
                </StyledLink>
            </Content>
        </Container>
    )
}