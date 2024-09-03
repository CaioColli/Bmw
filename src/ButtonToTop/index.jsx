import styled from 'styled-components'
import { FaArrowUpLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

const Container = styled.button`
    all: unset;
    background-color: var(--grayBorder);
    border-radius: 25%;
    bottom: 48px;
    //
    padding: 8px;
    position: fixed;
    right: 48px;
    transition: 0.2s ease-in;
    z-index: 998;

    &:hover {
        border-radius: 50%;
    }

    @media (max-width: 425px) {
        bottom: 16px;
        right: 16px;
    }
`

const Icone = styled(FaArrowUpLong)`
    color: var(--white);
    font-size: 32px;
`

export const ButtonToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        scrollPosition > 50 && (
            <Container onClick={handleClick}>
                <Icone />
            </Container>
        )
    )
}