import { forwardRef } from 'react'
import styled from 'styled-components'
import logo from '/public/Icone BMW.svg'
import bgImage from '/public/BMWLogoBackground.png'
import { Link } from 'react-router-dom'
import { Paragraph } from '@/Paragraph'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--white);
    position: fixed;
    z-index: 999;
    left: 0;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    display: flex;
    flex-direction: column;
`

const Contain = styled.div`
    padding: 48px;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const NavItem = styled.li`
    all: unset;
    font-size: 32px;
    font-weight: bold;
`

const StyledLink = styled(Link)`
    all: unset;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const IconLogo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
`

export const SideMenu = forwardRef(({onClick}, ref) => {
    return (
        <Container ref={ref}>
            <Contain>
                <NavList>
                    <StyledLink onClick={onClick} to='modelos'>
                        <NavItem>
                            Modelos
                        </NavItem>
                    </StyledLink>

                    <StyledLink onClick={onClick} to='lançamento'>
                        <NavItem>
                            Lançamento
                        </NavItem>
                    </StyledLink>

                    <StyledLink onClick={onClick}>
                        <NavItem>
                            Descubra a BMW
                        </NavItem>
                    </StyledLink>

                    <LogoContainer>
                        <IconLogo />
                        <Paragraph text='Puro Prazer de Dirigir' />
                    </LogoContainer>
                </NavList>
            </Contain>
        </Container>
    )
})