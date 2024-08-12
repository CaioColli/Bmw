import { useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
`

const ButtonContainer = styled.div`
    position: relative;
    width: fit-content;
`

const FilterLabel = styled.label`
    align-items: center;
    border: 1px solid var(--gray);
    color: var(--gray);
    display: flex;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: bold;
    gap: 8px;
    padding: 8px 16px;
    transition: 0.2s ease-in;
`

const FilterInput = styled.input`
    all: unset;
    cursor: pointer;
    height: 100%;
    position: absolute;
    width: 100%;

    &:checked + ${FilterLabel} {
        border-color: var(--black);
        color: var(--black);
    }

    &:hover + ${FilterLabel} {
        border-color: var(--black);
        color: var(--black);
    }
`

export const ButtonsFilter = () => {
    const [isGasolinaChecked, setIsGasolineChecked] = useState(false)
    const [isEletricChecked, setIsEletricChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsGasolineChecked(!isGasolinaChecked);
    }

    const handleCheckBoxEletric = () => {
        setIsEletricChecked(!isEletricChecked)
    }

    return (
        <ButtonsContainer>
            <ButtonContainer>
                <FilterInput
                    type='checkbox'
                    checked={isGasolinaChecked}
                    onChange={handleCheckboxChange}
                />
                <FilterLabel>
                    <IoAddOutline />
                    Gasolina
                </FilterLabel>
            </ButtonContainer>

            <ButtonContainer>
                <FilterInput
                    type='checkbox'
                    checked={isEletricChecked}
                    onChange={handleCheckBoxEletric}
                />
                <FilterLabel>
                    <IoAddOutline />
                    Elétrico
                </FilterLabel>
            </ButtonContainer>
        </ButtonsContainer>
    )
}