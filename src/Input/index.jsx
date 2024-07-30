import styled from 'styled-components'
import { forwardRef, useEffect, useState } from 'react'

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

export const Input = forwardRef(( props, ref ) => {
    return (
        <Container>
            <InputStyled ref={ref} placeholder='Pesquisar'/>
        </Container>
    )
})
