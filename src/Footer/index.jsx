import styled from 'styled-components'
import { RiCopyrightLine } from 'react-icons/ri'
import logo from '/public/Icone BMW.svg'
import { IoLogoGithub } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Container = styled.footer`
    align-items: center;
    background-color: var(--grayBg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px;
    margin-top: 48px;

    @media (max-width: 425px) {
        margin-top: 24px;
    }
`
const ContainIcon = styled.div`
    align-items: center;
    border-bottom: 1px solid var(--white);
    display: flex;
    justify-content: center;
    width: 100%;
`

const StylizedLink = styled(Link)`
    all: unset;
    cursor: pointer;
`

const PageIcon = styled.img`
    padding-bottom: 20px;
`

const ContainParagraphs = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 210px;
    padding-top: 16px;
`

const Paragraphs = styled.p`
    align-items: center;
    color: var(--white);
    display: flex;
    font-size: 14px;
`

const Copyright = styled(RiCopyrightLine)`
    margin-right: 8px;
`

const ContainAnchors = styled.div`
    display: flex;
    gap: 8px;
    padding-top: 8px;
`

const Anchor = styled.a`
    all: unset;
    cursor: pointer;
`
const AnchorIcon = styled.span`
    font-size: 18px;
    color: var(--white);
`

export const Footer = () => {

    const scrollToTop = () => {
        window.screenTop(0, 0)
    }

    return (
        <Container>
            <ContainIcon>
                <StylizedLink to='/' onClick={scrollToTop}>
                    <PageIcon src={logo} alt="Logo Bmw" />
                </StylizedLink>
            </ContainIcon>

            <ContainParagraphs>
                <Paragraphs>
                    Projeto sem fins lucrativos
                </Paragraphs>
                <Paragraphs>
                    <Copyright />
                    Desenvolvido por CaioColli
                </Paragraphs>
            </ContainParagraphs>

            <ContainAnchors>
                <Anchor href='https://github.com/CaioColli' target='_blank'>
                    <AnchorIcon>
                        <FaLinkedin />
                    </AnchorIcon>
                </Anchor>
                <Anchor href='https://github.com/CaioColli' target='_blank'>
                    <AnchorIcon>
                        <IoLogoGithub />
                    </AnchorIcon>
                </Anchor>
            </ContainAnchors>
        </Container>
    )
}