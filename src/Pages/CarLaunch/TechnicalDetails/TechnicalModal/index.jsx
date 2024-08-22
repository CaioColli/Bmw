import { Modal } from "@/Modal"
import { Overlay } from "@/Overlay"
import styled from 'styled-components'
import { TechnicalData } from "../Data"
import { SlArrowRightCircle } from 'react-icons/sl'
import { SlArrowLeftCircle } from "react-icons/sl"
import { useState } from "react"

const Container = styled.div``

const Content = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    padding: 48px;
    width: 100%;
`
const Image = styled.img`
    max-width: 500px;

    @media (max-width: 425px) {
        max-width: 250px;
    }
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 36px;
    }
`

const Span = styled.span`
    font-size: 14px;
    color: var(--gray);
`

const Paragraph = styled.p`
    font-size: 18px;
`

const Footer = styled.footer`
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 0 24px;
    gap: 24px;
`

const IconNext = styled(SlArrowRightCircle)`
    color: var(--gray);
    cursor: pointer;
    font-size: 24px;
`

const IconPrev = styled(SlArrowLeftCircle)`
    color: var(--gray);
    cursor: pointer;
    font-size: 24px;
`

export const TechnicalModal = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = TechnicalData

    const handleClickNextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    const handleClickPrevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % data.length)
    }

    const currentItem = data[currentIndex]

    return (
        <>
            <Overlay />
            <Modal>
                <Container>
                    <Content>
                        {currentItem && (
                            <>
                                <Image src={currentItem.picture} alt={currentItem.title} />
                                <Texts>
                                    <Title>{currentItem.title}</Title>
                                    <Paragraph>{currentItem.description}</Paragraph>
                                </Texts>
                            </>
                        )}
                    </Content>

                    <Footer>
                        {currentIndex > 0 && <IconPrev onClick={handleClickPrevItem} />}
                        <Span>
                            {`${currentIndex + 1} / ${data.length}`}
                        </Span>
                        <IconNext onClick={handleClickNextItem} />
                    </Footer>
                </Container>
            </Modal>
        </>
    )
}