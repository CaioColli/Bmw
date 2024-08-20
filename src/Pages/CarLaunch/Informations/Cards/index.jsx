import styled from 'styled-components'
import { SiBmw } from "react-icons/si"

const Container = styled.div`
    background-color: var(--grayBg);
    border-radius: 15px;
    height: auto;
    padding: 32px;
    position: relative;
    width: fit-content;
`

const Icon = styled(SiBmw)`
    color: rgba(255, 255, 255, 20%);
    font-size: 40px;
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 999;
`

export const Card = ({ children }) => {
    return (
        <Container>
            <Icon />
            {children}
        </Container>
    )
}