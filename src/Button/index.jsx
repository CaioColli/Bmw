import styled from 'styled-components'

const Btn = styled.button.withConfig({
    shouldForwardProp: (prop) => !['flex', 'large', 'whitebg', 'blackcolor'].includes(prop)
})`
    all: unset;
    align-items: center;
    background-color: ${props => props.whitebg ? '#ffffff' : '#000000'};
    border-radius: 15px;
    color: ${props => props.blackcolor ? '#000000' : '#ffffff'};
    cursor: pointer;
    display: ${props => props.flex ? 'flex' : 'none'};
    font-weight: bold;
    justify-content: center;
    max-width: 145px;
    padding: ${props => props.large ? '16px 32px' : '8px 16px'};
    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
    }
`

export const Button = ({ onClick, children, flex, large, whitebg, blackcolor }) => {
    return (
        <Btn
            onClick={onClick}
            flex={flex}
            large={large}
            whitebg={whitebg}
            blackcolor={blackcolor}
        >
            {children}
        </Btn>
    )
}