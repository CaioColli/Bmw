import { IoAddOutline } from 'react-icons/io5'
import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    gap: 16px;
    position: relative;
    width: fit-content;
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
    }

    &:hover + ${Label} {
        border-color: var(--black);
        color: var(--black);
    }
`

export const PrincipalFilter = ({ onCLick }) => {
    const filters = ['Gasolina', 'Elétrico']

    return (
        <List>
            {filters && filters.map(filter => (
                <Item key={filter}>
                    <Input type='checkbox' />
                    <Label>
                        <IoAddOutline />
                        {filter}
                    </Label>
                </Item>
            ))}
        </List>
    )
}