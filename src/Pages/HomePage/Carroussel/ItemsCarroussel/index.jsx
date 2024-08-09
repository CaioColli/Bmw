import styled from 'styled-components'
import background from '/public/Background.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Carroussel = styled.div`
    background-color: var(--black);
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        height: 650px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 48px 0;
`

const Header = styled.div`
    align-items: top;
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    position: relative;
    width: 100%;
`

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Title = styled.h1`
    color: var(--white);
    font-size: 48px;
    font-weight: bold;
`

const SubTitle = styled.h2`
    color: var(--white);
    font-size: 36px;
    padding-left: 16px;
`

const SubSubTitle = styled.h3`
    color: var(--white);
    font-size: 30px;
    padding-left: 32px;
`

const Link = styled(FaExternalLinkAlt)`
    color: var(--white);
    cursor: pointer;
    font-size: 40px;

    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`

const Car = styled.img`
    max-width: 1200px;
    max-width: 80%;
`

export const ItemsCarroussel = ({ data, subTitleData, SubSubTitleData }) => {
    return (
        <Carroussel>
            {data && (
                <Container>
                    <Header>
                        <Titles>
                            <Title> {data.Modelo} </Title>
                            <SubTitle> {subTitleData} </SubTitle>
                            <SubSubTitle> {SubSubTitleData} </SubSubTitle>
                        </Titles>

                        <Link />
                    </Header>

                    <Car src={data.FotoFrontal} />
                </Container>
            )}
        </Carroussel>
    )
}