import styled from 'styled-components'
import { PrincipalFilter } from './Inputs/principalFilter'
import { useFetch } from '@/Hooks/useFetchCars'
import { LineFilter } from './Inputs/lineFilter'
import { MoreFilter } from './Inputs/moreFilter'

const Container = styled.section`
    padding: 48px;
`

const Title = styled.h1`
    color: var(--black);
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 24px;
`

const SubTitle = styled.h2`
    color: var(--black);
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 16px;
`

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`


export const AllCarsModels = () => {
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
    
    const modelsBMWi = modelsByCategory['BMW i'] || []
    const modelsX = modelsByCategory['X'] || []
    const modelsM = modelsByCategory['M'] || []
    const models5 = modelsByCategory['5'] || []
    const models4 = modelsByCategory['4'] || []
    const models3 = modelsByCategory['3'] || []
    const models2 = modelsByCategory['2'] || []
    const models1 = modelsByCategory['1'] || []
    const modelsPlugIn = modelsByCategory['PLUG-IN HÍBRIDO'] || []

    return (
        <Container>
            <Title>
                Modelos e Preços
            </Title>

            <SubTitle>
                Filtro
            </SubTitle>

            <FiltersContainer>
                <PrincipalFilter />
                <MoreFilter />
            </FiltersContainer>

            <LineFilter />

        </Container>
    )
}