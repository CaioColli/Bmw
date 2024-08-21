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
    gap: 24px;
    width: 100%;
    padding: 48px;
`
const Image = styled.img`
    max-width: 500px;
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
`

const Paragraph = styled.p`
    font-size: 18px;
`

const Footer = styled.footer.withConfig({
    shouldForwardProp: (prop) => !['hasPrev'].includes(prop)
})`
    align-items: center;
    display: flex;
    height: 48px;
    justify-content: ${props => props.hasPrev ? 'space-between' : 'flex-end'};
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

                    <Footer hasPrev={currentIndex > 0}>
                        {currentIndex > 0 && <IconPrev onClick={handleClickPrevItem} />}
                        <IconNext onClick={handleClickNextItem} />
                    </Footer>
                </Container>
            </Modal>
        </>
    )
}