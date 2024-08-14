import styled from 'styled-components'
import { PrincipalFilter } from './Inputs/principalFilter'
import { LineFilter } from './Inputs/lineFilter'
import { MoreFilter } from './Inputs/moreFilter'
import { Cars } from './Cars'

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

            <Cars />

        </Container>
    )
}