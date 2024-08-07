import { useEffect, useRef, useState } from 'react'
import { CarCard } from './Cards/Card'
import { Message } from './ShowCaseMessage'
import styled from 'styled-components'
import { pageAnimation } from '../Animations'
import { useFetch } from '../Hooks/useFetchCars'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 48px;
    justify-content: space-between;

    @media (max-width: 1440px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        margin-top: 24px;
    }
`
const MessageAndCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1440px) {
        align-items: center;
        margin-bottom: 20px;
        gap: 89px;
    }

    @media (max-width: 768px) {
        margin-bottom: 24px;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 1440px) {
        justify-content: center;
    }
`

export const Showcase = () => {
    const container = useRef(null)

    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')

    useEffect(() => {
        if (container.current) {
            pageAnimation(container.current, 50 )
        }
    }, [data])

    const i7Data = () => {
        return data.find(car => car.ID_Carro === '3')
    }

    const m3Data = () => {
        return data.find(car => car.ID_Carro == '25')
    }

    const x6Data = () => {
        return data.find(car => car.ID_Carro === '10')
    }

    return (
        <>
            <Container ref={container} >
                <MessageAndCards>
                    <Message />
                    <Cards>
                        {m3Data && <CarCard key={m3Data.ID_Carro} data={m3Data()} />}
                        {x6Data && <CarCard key={x6Data.ID_Carro} data={x6Data()} />}
                    </Cards>
                </MessageAndCards>
                {i7Data && <CarCard
                    key={i7Data.ID_Carro}
                    data={i7Data()}
                    cardWidth='500px'
                    cardHeight='720px'
                    widthCar='610px'
                    logoDisplay='block'
                />}
            </Container>
        </>
    )
}
