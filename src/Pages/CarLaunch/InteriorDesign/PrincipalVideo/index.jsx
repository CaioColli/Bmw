import styled from 'styled-components'
import bgM5 from '/public/Images/PicInteriorM5Video.png'
import { VideoCard } from '../../CardVideo'
import { useRef, useState } from 'react'
import { IconPlay } from '../../ExteriorDesign/PrincipalCard'


const Container = styled.div`
    background-image: url(${bgM5});
    height: 700px;
    position: relative;
    width: 1200px;

    @media (max-width: 1440px) {
        max-width: 800px;
        max-height: 400px;
    }

    @media (max-width: 1024px) {
        max-width: 600px;
        max-height: 300px;
    }

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 270px;
    }

    @media (max-width: 425px) {
        max-width: 300px;
        max-height: 200px;
    }
`

export const PrincipalVideo = () => {
    const [isVideo, setIsVideo] = useState(false)
    const [pausedVideo, setPausedVideo] = useState(false)


    const handleClickVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                setPausedVideo(false)
            } else {
                videoRef.current.pause()
                setPausedVideo(true)
            }
        }
    }

    const videoRef = useRef(null)

    return (
        <Container
            onMouseEnter={() => setIsVideo(true)}
            onClick={() => setIsVideo(true)}>

            {isVideo && (
                <VideoCard
                    ref={videoRef}
                    source='/videos/VideoInteriorCarro.mp4'
                    onClick={handleClickVideo}
                />
            )}

            {pausedVideo && (
                <IconPlay onClick={handleClickVideo} />
            )}
        </Container>
    )
}