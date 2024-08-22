import styled from 'styled-components'

const Text = styled.h2`
    font-size: 36px;
    color: var(--black);
    font-weight: 500;
`

export const SubTitle = ({ text }) => {
    return (
        <Text>
            { text }
        </Text>
    )
}