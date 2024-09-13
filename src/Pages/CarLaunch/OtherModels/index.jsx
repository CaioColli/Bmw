import styled from 'styled-components'
import { CardCar } from '@/CardCars'
import { useFetch } from '@/Hooks/useFetchCars'
import { SubTitle } from '@/SubTitle'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SelectedModelContext } from '@/SelectedModelContext'

const Container = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 144px;
    text-align: center;

    @media (max-width: 768px) {
        gap: 48px;
    }
`

const Contain = styled.div`
    display: flex;
    gap: 48px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 96px;
    }

    @media (max-width: 768px) {
        gap: 48px;
    }
`

export const OtherModels = () => {
    const { data } = useFetch('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')
    const { setSelectedModel } = useContext(SelectedModelContext)

    const navigate = useNavigate()

    const models = ['23', '34']

    const selectedModels = data.filter(car => models.includes(car.ID_Carro))

    const handleClick = (carModel) => {
        setSelectedModel(carModel)
        navigate('/modelos')
        window.scrollTo(0, 0)
    }

    return (
        <Container>
            <SubTitle text='Conheça outros modelos' />

            <Contain>
                {selectedModels.map(car => (
                    <CardCar
                        key={car.ID_Carro}
                        carImage={car.FotoFrontal}
                        title={car.Modelo}
                        engineType={car.FiltroCombustível}
                        onClick={() => handleClick(car.Modelo)}
                        flex
                        large
                        wideCard
                        bigImage
                        bigDescription
                        bigTitle
                        bigCard
                    />
                ))}
            </Contain>
        </Container>
    )
}