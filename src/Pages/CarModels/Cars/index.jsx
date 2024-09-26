import { CardCar } from '@/CardCars'
import { useFetch } from '@/Hooks/useFetchCars'
import { currencyFormat } from '@/Utils/currencyFormat'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { useContext, useEffect, useRef, useState } from 'react'
import { FilterContext } from '../FilterContext'
import { CarNotFind } from './NotFind'
import { SearchContext } from '@/SearchContext'
import { SelectedModelContext } from '@/SelectedModelContext'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 48px;
`

const CarDetail = styled.details`
    cursor: pointer;
    pointer-events: none;
    scroll-margin-top: 96px;

    @media (max-width: 425px) {
        pointer-events: auto;
        margin-top: 48px;
    }
`

const Summary = styled.summary`
    align-items: center;
    
    display: flex;
    font-size: 32px;
    font-weight: 400;
    gap: 8px;
    list-style: none;
    width: fit-content;

    @media (max-width: 425px) {
        font-size: 24px;
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

        if (!acc[category]) {
            acc[category] = []
        }

        acc[category].push(car)

        return acc
    }, {})

    const { searchValue } = useContext(SearchContext)
    const { selectedModel } = useContext(SelectedModelContext)

    const filteredModelsByCategory = Object.keys(modelsByCategory).reduce((acc, category) => {
        const models = modelsByCategory[category].filter(car => {
            const bodyworkMatch = filters.bodywork.length === 0 || filters.bodywork.includes(car.FiltroCarroçaria)
            const fuelTypeMatch = filters.fueltype.length === 0 || filters.fueltype.includes(car.FiltroCombustível)
            const searchTermMatch = searchValue === '' || car.Modelo.toLowerCase().includes(searchValue.toLowerCase())
            const selectedModelMatch = selectedModel === '' || car.Modelo.toLowerCase().includes(selectedModel.toLowerCase())
            return bodyworkMatch && fuelTypeMatch && searchTermMatch && selectedModelMatch
        })

        if (models.length > 0) {
            acc[category] = models
        }

        return acc
    }, {})

    const hasCars = Object.keys(filteredModelsByCategory).length > 0

    useEffect(() => {
        if (onCategoryChange) {
            const categoryRefElement = categoryRef.current[onCategoryChange]
            if (categoryRefElement) {
                categoryRefElement.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [onCategoryChange])

    return (
        <Container>
            {hasCars ? (
                categories.map(category => {
                    const models = filteredModelsByCategory[category] || []

                    return models.length > 0 && (
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
                                        showValue
                                    />
                                ))}
                            </Content>
                        </CarDetail>
                    )
                })
            ) : (
                <CarNotFind />
            )}
        </Container>
    )
}