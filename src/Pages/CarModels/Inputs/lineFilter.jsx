import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    gap: 24px;
    margin: 24px 0 48px 0;
    position: relative;
    width: fit-content;
`

const Item = styled.li`
    all: unset;
`

const Label = styled.label`
    cursor: pointer;
    color: var(--gray);
    font-size: 18px;
    font-weight: bold;
    transition: 0.2s ease-in;
`

const Input = styled.input`
    all: unset;
    cursor: pointer;
    height: 100%;
    position: absolute;
    width: 100%;

    &:checked + ${Label} {
        color: var(--black);
        font-size: 20px;
    }

    &:hover + ${Label} {
        color: var(--black);
    }
`

export const LineFilter = () => {
    const filters = ['BMW i', 'X', 'M', '5', '4', '3', '2', '1', 'Plug-in Híbrido']

    return (
        <List>
            {filters && filters.map(filter => (
                <Item key={filter}>
                    <Input type='checkbox' />
                    <Label>
                        {filter}
                    </Label>
                </Item>
            ))}
        </List>
    )
}