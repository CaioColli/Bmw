import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ModalContext } from './ModalContext'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Container = styled.dialog`
    all: unset;
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 800px;
    z-index: 999;
    background-color: var(--white);
    
    @media (max-width: 1024px) {
        max-width: 672px;
    }

    @media (max-width: 768px) {
        height: 90%;
        max-width: 300px;
        overflow: scroll;
    }
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    background-color: var(--grayBg);
`

const IconClose = styled(IoIosCloseCircleOutline)`
    cursor: pointer;
    font-size: 32px;
    color: var(--white);
`

export const Modal = ({ children }) => {
    const { setOpen } = useContext(ModalContext)

    const modalRef = useRef()

    const handleClickCloseModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [setOpen])

    return (
        <Container ref={modalRef} open>
            <Header>
                <IconClose onClick={handleClickCloseModal} />
            </Header>

            {children}
        </Container>
    )
}