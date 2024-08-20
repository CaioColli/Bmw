import styled from 'styled-components'
import backgroundImage from '/public/ApresentaçãoM5.png'
import { Button } from '@/Button'
import { useEffect, useRef } from 'react'
import { pageAnimation } from '@/Animations'

const Container = styled.section`
    width: 100%;
    height: 80vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Contain = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;

    @media (max-width: 425px) {
        padding: 24px;
    }
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 24px;
    }
`

export const M5Presentation = () => {
    const container = useRef(null)

    useEffect(() => {
        if (container.current) {
            pageAnimation(container.current, '150')
        }
    }, [])

    return (
        <Container ref={container}>
            <Contain>
                <Title>
                    M5 COMPETITION
                </Title>

                <Button
                    buttonDisplay='flex'
                    buttonPadding='16px 32px'
                >
                    DETALHES
                </Button>
            </Contain>
        </Container>
    )
}