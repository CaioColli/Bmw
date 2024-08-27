import styled from 'styled-components'
import { forwardRef } from 'react'

const Container = styled.div`
    position: relative;
    width: 250px;
    height: 45px;
`

const InputStyled = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    border: 1px solid var(--gray);
    padding-left: 14px;

    &:focus {
        border-color: var(--black);
    }
`
// Usei o forwardRef para ser possivel usar o hook useRef, e para isso é preciso passar dois parametros, sendo eles "props" e "ref"
export const Input = forwardRef(({ onChange, ...props }, ref ) => {
    return (
        <Container>
            <InputStyled 
            ref={ref} 
            placeholder='Pesquisar'
            onChange={onChange}
            />
        </Container>
    )
})
