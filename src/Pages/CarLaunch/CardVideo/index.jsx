import { forwardRef } from 'react'
import styled from 'styled-components'


const Video = styled.video`
    
    height: 100%;
    left: 0;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
`

export const VideoCard = forwardRef(({ onClick, source }, ref) => {
    return (
        <Video
            autoPlay
            loop
            muted
            onClick={onClick}
            ref={ref}
        >
            <source src={source}/>
        </Video>
    )
})