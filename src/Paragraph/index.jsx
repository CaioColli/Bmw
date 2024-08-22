import styled from 'styled-components'


const Text = styled.p`
    color: var(--black);
    font-size: 18px;
`

export const Paragraph = ({ text }) => {
    return (
        <Text>
            {text}
        </Text>
    )
}