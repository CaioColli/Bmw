import nextIcon from '/public/Icone Proximo.png'
import prevIcon from '/public/Icone Anterior.png'
import styled from 'styled-components'

export const LeftArrow = styled.button`
    all: unset;
    background-image: url(${prevIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: 48px;
    left: 48px;
    position: absolute;
    width: 48px;
    z-index: 999;
`

export const RightArrow = styled.button`
    all: unset;
    background-image: url(${nextIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: 48px;
    position: absolute;
    right: 48px;
    width: 48px;
    z-index: 999;
`

export const CustomLeftArrow = ({onClick}) => {
    return (
        <LeftArrow onClick={onClick} />
    )
}

export const CustomRightArrow = ({onClick}) => {
    return (
        <RightArrow onClick={onClick} />
    )
}