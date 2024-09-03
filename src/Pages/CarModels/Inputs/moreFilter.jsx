import { ModalContext } from '@/Modal/ModalContext'
import { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components'


const Container = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    position: relative;
    width: fit-content;
`

const ArrowIcon = styled(IoIosArrowForward)`
    transition: 0.2s ease-in;
    font-size: 18px;
`

const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
`

const Input = styled.input`
    all: unset;
    
    height: 100%;
    position: absolute;
    width: 100%;

    &:checked + ${ArrowIcon} {
        rotate: 90deg;
    }
`

export const MoreFilter = () => {
    const { open, setOpen } = useContext(ModalContext)
    const [isChecked, setIsChecked] = useState(open) 

    const handleCLick = () => {
        setOpen(!open)
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        if (!open) {
            setIsChecked(false)
        }
    }, [open])

    return (
        <Container>
                <Input type='checkbox' checked={isChecked} onChange={handleCLick} />
            <ArrowIcon />
                <Label>
                    Mais filtros
                </Label>
        </Container>
    )
}