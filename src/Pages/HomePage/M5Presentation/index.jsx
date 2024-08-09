import styled from 'styled-components'
import backgroundImage from '/public/ApresentaçãoM5.png'
import { Button } from '@/Button'
import { useEffect, useRef } from 'react'
import { pageAnimation } from '@/Animations'

const Container = styled.section`
    position: relative;

`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Contain = styled.div`
    position: absolute;
    bottom: 48px;
    left: 48px;

    @media (max-width: 425px) {
        bottom: 16px;
        left: 16px;
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
            <Image src={backgroundImage} />

            <Contain>
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