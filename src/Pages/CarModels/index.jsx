import styled from 'styled-components'
import { ButtonsFilter } from './ButtonsFilter'

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

export const AllCarsModels = () => {
    return (
        <Container>
            <Title>
                Modelos e Preços
            </Title>

            <SubTitle>
                Filtro
            </SubTitle>

            <ButtonsFilter />
        </Container>
    )
}