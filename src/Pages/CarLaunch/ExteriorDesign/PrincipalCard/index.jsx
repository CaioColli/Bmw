import bgCardM5 from '/public/PicM5Video.png'
import styled from 'styled-components'
import { CiPlay1 } from 'react-icons/ci'
import { Paragraph } from '@/Paragraph'
import { SubTitle } from '@/SubTitle'
import { useRef, useState } from 'react'
import { VideoCard } from '../../CardVideo'
import { CardContainer, Card, TextContainer } from '../../PrincipalCard'

export const IconPlay = styled(CiPlay1)`
    color: var(--white);
    
    font-size: 96px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`

export const PrincipalCard = () => {
    const [isVideo, setIsVideo] = useState(false)
    const [pausedVideo, setPausedVideo] = useState(false)

    const videoRef = useRef(null)

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

    return (
        <Card>
            <TextContainer>
                <SubTitle text='Inconfundivelmente M. Mesmo no escuro.' />
                <Paragraph text='Os principais destaques incluem o design completamente reinterpretado da grade em forma de rim com iluminação de contorno BMW Iconic Glow, a nova assinatura dupla das luzes dianteiras e o dinâmico tapete de boas-vindas específico M.' />
            </TextContainer>

            <CardContainer
                bgImage={bgCardM5}
                onMouseEnter={() => setIsVideo(true)}
                onClick={() => setIsVideo(true)}
            >
                {isVideo && (
                    <VideoCard
                        ref={videoRef}
                        source='/videos/VideoExteriorCarro.mp4'
                        onClick={handleClickVideo}
                    />
                )}

                {pausedVideo && (
                    <IconPlay onClick={handleClickVideo} />
                )}
            </CardContainer>
        </Card>
    )
}