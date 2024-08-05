import styled from 'styled-components'
import logo from '../../public/Icone BMW.svg'
import { IoSearchOutline } from 'react-icons/io5'
import { FiAlignLeft } from 'react-icons/fi'
import { Input } from '../Input'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Container = styled.header`
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
    display: none;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`

const IconAndNavContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const PageIcon = styled.span`
    cursor: pointer;
`

const NavList = styled.ul`
    display: flex;
    gap: 16px;
    margin-left: 24px;

    @media (max-width: 768px) {
        display: none;
    }
`

const NavItem = styled.li`
    all: unset;
    color: var(--gray);
    transition: color 0.5s;

    &:hover {
        color: var(--black);
    }
`

const NavLink = styled.a`
    cursor: pointer;
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

    const inputRef = useRef()
    const timeLine = gsap.timeline({ defaults: { duration: 0.7 }})

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
        if(inputRef.current && !inputRef.current.contains(event.target)) {
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

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 768) {
                setResizeTriggered(true)
            } else {
                setResizeTriggered(false)
            }
        } 

        handleResize()
        
        document.addEventListener('mousedown', handleClickOutsideInput)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideInput)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Container $isCentered={isCentered}>
            {iconMenuBurguerVisibility && <BurguerIcon />}

            <IconAndNavContainer>
                {iconLogoPageVisibility && <PageIcon> <img src={logo} alt="Logo Bmw"></img> </PageIcon>}

                <NavList>
                    <NavItem><NavLink>Modelos</NavLink></NavItem>
                    <NavItem><NavLink>Lançamento</NavLink></NavItem>
                    <NavItem><NavLink>Descubra a BMW</NavLink></NavItem>
                </NavList>
            </IconAndNavContainer>

            {iconSearchVisibility && <SearchIcon onClick={handleClick} data-id='searchIcon' />}
            {inputVisibility && <Input ref={inputRef} />}
        </Container>
    )
}