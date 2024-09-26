import styled from 'styled-components'
import logo from '/public/Icone BMW.svg'
import { IoSearchOutline } from 'react-icons/io5'
import { FiAlignLeft } from 'react-icons/fi'
import { Input } from './Input'
import { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from '@/SearchContext'
import { SideMenu } from './SideMenu'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Container = styled.header`
    padding: 0 48px;
    position: ${props => props.$fixed ? 'fixed' : 'static'};
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: ${props => props.$fixed ? '#ffffff' : 'transparent'};

    @media (max-width: 1440px) {
        padding: 0 24px;
    }
`

const Content = styled.div`
    align-items: center;
    border-bottom: 1px solid var(--black);
    display: flex;
    height: 85px;
    justify-content: space-between;
    justify-content: ${props => (props.$isCentered ? 'center' : 'space-between')};
    padding: 0 16px;
    width: 100%;

    @media (max-width: 768px) {
        border-bottom: none;
    }
`

const BurguerIcon = styled(FiAlignLeft)`
    color: var(--gray);
    //
    display: none;
    font-size: 24px;

    @media (max-width: 768px) {
        display: block;
    }
`

const CloseSideIcon = styled(IoIosCloseCircleOutline)`
    color: var(--gray);
    //
    display: none;
    font-size: 24px;

    @media (max-width: 768px) {
        display: block;
    }
`

const IconAndNavContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const PageIcon = styled.img`
    //
`

const NavList = styled.ul`
    display: flex;
    gap: 16px;
    margin-left: 24px;

    @media (max-width: 768px) {
        display: none;
    }
`

const StyledLink = styled(Link)`
    all: unset;
    cursor: pointer;
`

const NavItem = styled.li`
    all: unset;
    cursor: pointer;
    color: var(--gray);
    transition: color 0.5s;

    &:hover {
        color: var(--black);
    }
`

const NavLink = styled.a`
    
`

const SearchIcon = styled(IoSearchOutline)`
    cursor: pointer;
    font-size: 18px;
    color: var(--gray);
    transition: color 0.5s;

    &:hover {
        color: var(--black);
    }
`

export const Header = () => {
    const [isCentered, setIsCentered] = useState(false)
    const [inputVisibility, setInputVisibility] = useState(false)
    const [iconSearchVisibility, setIconSearchVisibility] = useState(true)
    const [iconMenuBurguerVisibility, setIconMenuBurguerVisibility] = useState(true)
    const [iconLogoPageVisibility, setIconLogoPageVisibility] = useState(true)
    const [resizeTriggered, setResizeTriggered] = useState(false)
    const [sideMenu, setSideMenu] = useState(false)

    const inputRef = useRef()
    const sideMenuRef = useRef(null)
    const timeLine = gsap.timeline({ defaults: { duration: 0.7 } })

    const { searchValue, setSearchValue } = useContext(SearchContext)

    const navigate = useNavigate()

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
        navigate('modelos')
    }

    const handleClick = () => {
        timeLine.to('[data-id="searchIcon"]', {
            opacity: 0,
            y: -10,
            onComplete: () => {
                setIconSearchVisibility(false)
                setInputVisibility(true)

                if (resizeTriggered) {
                    setIconMenuBurguerVisibility(false)
                    setIconLogoPageVisibility(false)
                    setIsCentered(true)
                }
            }
        })
    }

    const handleClickOutsideInput = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            timeLine.to(inputRef.current, {
                opacity: 0,
                y: -10,
                onComplete: () => {
                    setInputVisibility(false)
                    setIconSearchVisibility(true)

                    if (!resizeTriggered) {
                        setIconMenuBurguerVisibility(true)
                        setIconLogoPageVisibility(true)
                        setIsCentered(false)
                    }
                }
            })
        }
    }

    const handleClickOutsideSideMenu = (event) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
            setSideMenu(false)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setResizeTriggered(true)
            } else {
                setResizeTriggered(false)
            }
        }

        handleResize()

        if (inputRef.current) {
            inputRef.current.value = searchValue
        }

        if (searchValue.length <= 0) {
            document.addEventListener('mousedown', handleClickOutsideInput)
        }
        document.addEventListener('mousedown', handleClickOutsideSideMenu)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideInput)
            document.removeEventListener('mousedown', handleClickOutsideInput)
            window.removeEventListener('resize', handleResize)
        }
    }, [searchValue])

    const handleClickOpenSideMenu = () => {
        setSideMenu(true)
    }

    const handleClickCloseSideMenu = () => {
        setSideMenu(false)
        window.scrollTo(0, 0)
    }

    return (
        <Container $fixed={sideMenu}>
            <Content $isCentered={isCentered}>
                {iconMenuBurguerVisibility && !sideMenu &&
                    <BurguerIcon onClick={handleClickOpenSideMenu} />
                }

                {sideMenu && (
                    <CloseSideIcon onClick={handleClickCloseSideMenu} />
                )}

                <IconAndNavContainer>

                    <StyledLink to='/'>
                        {iconLogoPageVisibility && <PageIcon src={logo} alt="Logo Bmw" />}
                    </StyledLink>

                    <NavList>
                        <StyledLink to='modelos'>
                            <NavItem>
                                Modelos
                            </NavItem>
                        </StyledLink>
                        <StyledLink to='lançamento'>
                            <NavItem>
                                Lançamento
                            </NavItem>
                        </StyledLink>
                        <NavItem><NavLink>Descubra a BMW</NavLink></NavItem>
                    </NavList>
                </IconAndNavContainer>

                {iconSearchVisibility && <SearchIcon onClick={handleClick} data-id='searchIcon' />}
                {inputVisibility && <Input ref={inputRef} onChange={handleSearch} />}
            </Content>

            {sideMenu &&
                <SideMenu
                    onClick={handleClickCloseSideMenu}
                    ref={sideMenuRef}
                />
            }
        </Container>

    )
}