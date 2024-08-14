import { useContext, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { FilterContext } from '../FilterContext'

const Form = styled.form`
    display: flex;
    gap: 16px;
    position: relative;
    width: fit-content;
`

const List = styled.ul`
    
`

const Item = styled.li`
    all: unset;
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

const Input = styled.input`
    all: unset;
    cursor: pointer;
    height: 100%;
    position: absolute;
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
    const [selectedValue, setSelectedValue] = useState('')

    const { setFilter } = useContext(FilterContext)

    const filters = ['Gasolina', 'Elétrico']

    const handleChange = (event) => {
        const value = event.target.value

        if (selectedValue === value) {
            setSelectedValue('')
            setFilter('All')
        } else {
            setSelectedValue(value)
            setFilter(value)
        }
    }

    return (
        <Form>
            {filters && filters.map(filter => (
                <Item key={filter}>
                    <Input
                        type='checkbox'
                        name='fuelType'
                        value={filter}
                        checked={selectedValue === filter}
                        onChange={handleChange}
                    />
                    <Label>
                        <IoAddOutline />
                        {filter}
                    </Label>
                </Item>
            ))}
        </Form>
    )
}