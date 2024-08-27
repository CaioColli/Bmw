import { useContext, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { FilterContext } from '../FilterContext'
import { SelectedModelContext } from '@/SelectedModelContext'

const Container = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`
const Form = styled.form``

const List = styled.ul`
    display: flex;
    gap: 16px;
    position: relative;
    width: fit-content;
`

const Item = styled.li`
    all: unset;
    position: relative;
`

const Label = styled.label`
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

const Button = styled.button`
    all: unset;
    align-items: center;
    border: 1px solid var(--gray);
    color: var(--gray);
    cursor: pointer;
    display: flex;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: bold;
    gap: 8px;
    padding: 8px 16px;
    transition: 0.2s ease-in;

    &:hover {
        border-color: var(--black);
        color: var(--black);
    }

    &:active {
        scale: 0.98;
    }
`

const Input = styled.input`
    all: unset;
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    &:checked + ${Label} {
        border-color: var(--black);
        color: var(--black);
        box-shadow: 5px 5px var(--black);
    }

    &:hover + ${Label} {
        border-color: var(--black);
        color: var(--black);
    }
`

export const PrincipalFilter = () => {
    const { filters, setFilters } = useContext(FilterContext)
    const { selectedModel, setSelectedModel } = useContext(SelectedModelContext)

    const handleChange = (event) => {
        const value = event.target.value

        setFilters(prevFilters => ({
            ...prevFilters,
            fueltype: prevFilters.fueltype.includes(value)
                ? prevFilters.fueltype.filter(item => item !== value)
                : [...prevFilters.fueltype, value]
        }))
    }

    const handleClick = (event) => {
        setSelectedModel('')
    }

    return (
        <Container>
            <Form>
                <List>
                    {['Gasolina', 'Elétrico'].map(filter => (
                        <Item key={filter}>
                            <Input
                                type='checkbox'
                                name='fuelType'
                                value={filter}
                                checked={filters.fueltype.includes(filter)}
                                onChange={handleChange}
                            />
                            <Label>
                                {filter}
                            </Label>
                        </Item>
                    ))}
                </List>
            </Form>

            {selectedModel !== '' && (
                <Button onClick={handleClick}>
                    Todos modelos
                </Button>
            )}
        </Container>
    )
}