import styled from 'styled-components'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
`

export const Overlay = () => {
    return (
        <Container />
    )
}