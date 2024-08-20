import styled from 'styled-components'

const Btn = styled.button.withConfig({
    shouldForwardProp: (prop) => !['buttonDisplay', 'buttonPadding'].includes(prop)
})`
    all: unset;
    align-items: center;
    background-color: var(--black);
    border-radius: 15px;
    color: var(--white);
    cursor: pointer;
    display: ${props => props.buttonDisplay || 'none'};
    padding: ${props => props.buttonPadding || '8px 16px'};
    justify-content: center;
    transition: 0.2s ease-in-out;
    max-width: 145px;

    &:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
    }
`

export const Button = ({ onClick, children, buttonDisplay, buttonPadding }) => {
    return (
        <Btn onClick={onClick} buttonDisplay={buttonDisplay} buttonPadding={buttonPadding}>
            {children}
        </Btn>
    )
}