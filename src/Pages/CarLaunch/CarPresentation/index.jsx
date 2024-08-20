import styled from 'styled-components'
import Picture from '/public/PicPrincipalM5.png'
import { Card } from './Cards'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Container = styled.section`
    align-items: center;
    background-image: url(${Picture});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    filter: blur(10px);
    height: 100vh;
    justify-content: flex-start;
    position: relative;
    width: 100%;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        max-height: 500px;
    }

    @media (max-width: 425px) {
        max-height: 200px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 48px;

    @media (max-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 24px;
        justify-content: center;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

const Title = styled.h1`
    bottom: 48px;
    color: var(--white);
    font-size: 48px;
    font-weight: bold;
    left: 48px;
    opacity: 0;
    position: absolute;

    @media (max-width: 425px) {
        font-size: 24px;
        left: 24px;
        bottom: 24px;
    }
`

export const CarPresentation = () => {
    const containerRef = useRef(null)
    const cardRef = useRef([])
    const titleRef = useRef(null)
    
    useEffect(() => {
        const timeLine = gsap.timeline({ defaults: { duration: 0.8 }})

        timeLine.to(containerRef.current, {
            filter: 'blur(0px)',
            ease: 'expoScale(0.5,7,none)'
        })

        timeLine.to(titleRef.current, {
            opacity: 1
        })

        cardRef.current.forEach((card, index) => {
            timeLine.to(card,
                {
                    opacity: 1,
                    delay: index * 0.2
                }
            )
        })

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            markers: false,
            onEnter: () => timeLine.play()
        })
    }, [])


    const dataCards = [
        { title: 'M HYBRIDO', paragraph: 'PowerTrain para uma nova dimensão na característica de desempenho M.' },
        { title: '4,4 LITROS', paragraph: 'Motor V8 com o tradicional caráter de alta rotação.' },
        { title: '535 KW (727 hp)', paragraph: 'saída do sistema.' },
        { title: '1,000 Nm', paragraph: 'Torque' },
        { title: '305 km/h', paragraph: 'Velocidade máxima' }
    ]

    return (
        <Container ref={containerRef}>
            <Content>
                {dataCards && dataCards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        paragraph={card.paragraph}
                        ref={(el) => cardRef.current[index] = el}
                    />
                ))}
            </Content >

            <Title ref={titleRef}>
                BMW M5
            </Title>
        </Container>
    )
}
