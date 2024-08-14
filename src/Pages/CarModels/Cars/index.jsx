import { CardCar } from '@/CardCars'
import { useFetch } from '@/Hooks/useFetchCars'
import { currencyFormat } from '@/Utils/currencyFormat'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { useEffect, useState } from 'react'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;
`

const CarDetail = styled.details`
    pointer-events: none;

    @media (max-width: 425px) {
        pointer-events: auto;
    }
`

const Summary = styled.summary`
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 32px;
    font-weight: 400;
    gap: 8px;
    list-style: none;
    width: fit-content;

    @media (max-width: 425px) {
        list-style: block;
    }
`

const IconWrapper = styled(IoIosArrowForward)`
    font-size: 20px;
    display: none;

    @media (max-width: 425px) {
        display: block;
    }

    details[open] & {
        transform: rotate(90deg);
    }
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 80px 16px;
    margin-top: 80px;
    pointer-events: auto;
`

export const Cars = () => {
    const categories = ['BMW i', 'X', 'M', '5', '4', '3', '2', '1', 'PLUG-IN HÍBRIDO']

    const [isDetailOpen, setIsDetailOpen] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsDetailOpen(window.innerWidth > 425)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')

    const modelsByCategory = data.reduce((acc, car) => {
        const category = car.FiltroLinha

        // Se category não tiver no objeto, é adicionado como um array vazio
        if (!acc[category]) {
            acc[category] = [];
        }

        // Adiciona car ao array correspondente a sua categoria 
        acc[category].push(car);

        return acc;
    }, {});

    const renderCategoryDetails = (category) => {
        const models = modelsByCategory[category] || []
        return (
            models.length > 0 && (
                <CarDetail open={isDetailOpen} key={category}>
                    <Summary>
                        {category}
                        <IconWrapper />
                    </Summary>
                    <Content>
                        {models.map(car => (
                            <CardCar
                                key={car.ID_Carro}
                                carImage={car.FotoFrontal}
                                title={car.Modelo}
                                engineType={car.FiltroCombustível}
                                valueCar={currencyFormat(car.Preço)}
                                cardCursor='pointer'
                            />
                        ))}
                    </Content>
                </CarDetail>
            )
        )
    }

    return (
        <Container>
            {categories.map(category => renderCategoryDetails(category))}
        </Container>
    )
}