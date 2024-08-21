import styled from 'styled-components'

const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => !['large', 'bg'].includes(prop),
})`
    width: ${props => props.large ? '650px' : '500px'};
    height: 350px;
    max-width: 650px;
    display: block;  
    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 768px) {
        width: 450px;
        max-height: 300px;
    }

    @media (max-width: 425px) {
        max-width: 272px;
        max-height: 180px;
    }
`

export const Image = ({ bg, large }) => {
    return (
        <Container bg={bg} large={large} />
    )
}