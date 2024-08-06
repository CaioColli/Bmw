import { useEffect, useState } from 'react'
import { dataApi } from '../Utils/request'
import { CarCard } from './Cards/Card'
import { Message } from './ShowCaseMessage'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 48px;
    justify-content: space-between;

    @media (max-width: 1440px) {
        justify-content: center;
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
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dataApi()
                setData(data)
            } catch (error) {
                console.error('Erro ao buscar os dados', error)
            }
        }

        fetchData()
    }, [])

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
            <Container>
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
                    width='500px'
                    height='720px'
                    car='610px'
                    display='block'
                />}
            </Container>
        </>
    )

}
