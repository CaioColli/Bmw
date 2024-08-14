import styled from 'styled-components'
import { PrincipalFilter } from './Inputs/principalFilter'
import { LineFilter } from './Inputs/lineFilter'
import { MoreFilter } from './Inputs/moreFilter'
import { Cars } from './Cars'
import { FilterProvider } from './FilterContext'
import { useContext, useState } from 'react'
import { ModalFilters } from './ModalFilters'
import { ModalContext } from '@/Modal/ModalContext'

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
    gap: 16px;
`

export const AllCarsModels = () => {
    const { open } = useContext(ModalContext)

    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    return (
        <FilterProvider>
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

                <LineFilter onFilterLineClick={handleCategoryClick} />

                <Cars onCategoryChange={selectedCategory} />

                {open && <ModalFilters />}
            </Container>
        </FilterProvider>
    )
}