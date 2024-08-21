import styled from 'styled-components'
import bg from '/public/PicInterativaM5.png'
import { Card } from './Card'
import { useContext } from 'react'
import { ModalContext } from '@/Modal/ModalContext'
import { TechnicalModal } from './TechnicalModal'

const Container = styled.div`
    align-items: flex-end;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 90vh;
    padding: 48px;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        height: 50vh;
    }

    @media (max-width: 425px) {
        height: 35vh;
        padding: 24px;
    }
`

export const Picture = () => {
    const { open, setOpen } = useContext(ModalContext)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Container>
            <Card
                onClick={handleClick}
            />

            {open && <TechnicalModal />}
        </Container>
    )
}