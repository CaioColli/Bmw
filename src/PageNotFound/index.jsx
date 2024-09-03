import styled from 'styled-components'
import Illustration from '/Images/404Animation.gif'
import { Link } from 'react-router-dom'

const Container = styled.section`
    min-height: 100vh;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Title = styled.h1`
    font-size: 90px;
    color: #fc96e2;
    font-family: 'Nerko One', cursive;
`

const Gif = styled.div`
    display: block;
    background-image: url(${Illustration});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 900px;
    height: 450px;
    
    @media (max-width: 1024px) {
        max-width: 700px;
        max-height: 350px;
    }
    
    @media (max-width: 700px) {
        max-width: 300px;
        max-height: 150px;
    }
`

const Descriptions = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const SubTitle = styled.h2`
        font-size: 32px;
        color: var(--black);
        font-weight: 500;
        font-family: 'Nerko One', cursive;
    `

const Paragraph = styled.p``

const StylizedLink = styled(Link)`
    all: unset;
`

const Button = styled.button`
    all: unset;
    background-color: #fc96e2;
    padding: 16px 32px;
    border-radius: 20px;
    color: var(--white);
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
`

export const PageNotFound = () => {
    return (
        <Container>
            <Content>
                <Title>
                    404
                </Title>
                <Gif />

                <Descriptions>
                    <SubTitle>
                        Parece que você está perdido
                    </SubTitle>

                    <Paragraph>
                        A página que você está procurando não está disponível
                    </Paragraph>

                    <StylizedLink to='/'>
                        <Button>
                            Voltar ao início
                        </Button>
                    </StylizedLink>
                </Descriptions>
            </Content>
        </Container>
    )
}