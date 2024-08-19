import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 48px 0;
`

const Title = styled.h3`
    font-size: 26px;
`

const Paragraph = styled.p``

export const CarNotFind = () => {
    return (
        <Container>
            <Title>
                Não foram encontrados veículos.
            </Title>

            <Paragraph>
                Não existem veículos que correspondam aos seus filtros. Por favor, faça a reposição dos filtros e tenta outra combinação.
            </Paragraph>
        </Container>
    )
}