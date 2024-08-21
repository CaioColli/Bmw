import { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.button`
    all: unset;
    align-items: center;
    background-color: rgba(0,0,0, 60%);
    border-radius: 15px;
    bottom: 50%;
    color: var(--white);
    display: flex;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    justify-content: center;
    position: absolute;
    right: 50%;
    transform: translate(50%, 50%);
    width: 150px;
    z-index: 999;
`

export const Button = forwardRef ((props, ref) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('redize', handleResize)
    }, [])

    return (
        <Container ref={ref}>
            {windowWidth > 1024 ? 'Passe por cima' : 'Clique aqui'}
        </Container>
    )
})