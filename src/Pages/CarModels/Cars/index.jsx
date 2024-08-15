import { CardCar } from '@/CardCars'
import { useFetch } from '@/Hooks/useFetchCars'
import { currencyFormat } from '@/Utils/currencyFormat'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { useContext, useEffect, useRef, useState } from 'react'
import { FilterContext } from '../FilterContext'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;
`

const CarDetail = styled.details`
    pointer-events: none;
    scroll-margin-top: 96px;

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

export const Cars = ({ onCategoryChange }) => {
    const categoryRef = useRef({})
    const { filters } = useContext(FilterContext)

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
            acc[category] = []
        }

        // Adiciona car ao array correspondente a sua categoria 
        acc[category].push(car)

        return acc
    }, {})

    const filteredModelsByCategory = Object.keys(modelsByCategory).reduce((acc, category) => {
        const models = modelsByCategory[category].filter(car => {
            // Verifica se o carro corresponde a algum filtro selecionado para carroceria ou tipo de combustível
            const bodyworkMatch = filters.bodywork.length === 0 || filters.bodywork.includes(car.FiltroCarroçaria)
            const fuelTypeMatch = filters.fueltype.length === 0 || filters.fueltype.includes(car.FiltroCombustível)
            return bodyworkMatch && fuelTypeMatch
        })

        if (models.length > 0) {
            acc[category] = models
        }

        return acc
    }, {})

    const renderCategoryDetails = (category) => {
        let models = filteredModelsByCategory[category] || []

        return (
            models.length > 0 && (
                <CarDetail
                    open={isDetailOpen}
                    key={category}
                    ref={ref => (categoryRef.current[category] = ref)}
                >
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

    useEffect(() => {
        if (onCategoryChange) {
            const categoryRefElement = categoryRef.current[onCategoryChange];
            console.log('Scrolling to:', onCategoryChange, categoryRefElement);
            if (categoryRefElement) {
                categoryRefElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [onCategoryChange])

    return (
        <Container>
            {categories.map(category => renderCategoryDetails(category))}
        </Container>
    )
}