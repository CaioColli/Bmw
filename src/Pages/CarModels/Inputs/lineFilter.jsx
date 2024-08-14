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

const Button = styled.button`
    all: unset;
    cursor: pointer;
    color: var(--gray);
    font-size: 18px;
    font-weight: bold;
    transition: 0.2s ease-in;
    
    &:hover {
        color: var(--black);
        scale: 1.05;
    }
`

export const LineFilter = ({ onFilterLineClick }) => {
    const filters = ['BMW i', 'X', 'M', '5', '4', '3', '2', '1', 'PLUG-IN HÍBRIDO']

    return (
        <List>
            {filters && filters.map(filter => (
                <Item key={filter}>
                    <Button  onClick={() => onFilterLineClick(filter)} >
                        {filter}
                    </Button>
                </Item>
            ))}
        </List>
    )
}