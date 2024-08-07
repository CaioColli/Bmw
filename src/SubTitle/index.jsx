import styled from 'styled-components'

const Text = styled.h2`
    font-size: 36px;
    color: var(--black);
    font-weight: 500;

    @media (max-width: 768px) {
        max-width: 270px;
    }
`

export const SubTitle = ({ text }) => {
    return (
        <Text>
            { text }
        </Text>
    )
}