import { SubTitle } from '@/SubTitle'
import { Card, CardContainer, TextContainer } from '../../PrincipalCard'
import { Paragraph } from '@/Paragraph'
import bgCardM5 from '/public/Images/PicBancosM5Video.png'
import { useRef, useState } from 'react'
import { VideoCard } from '../../CardVideo'
import { IconPlay } from '../../ExteriorDesign/PrincipalCard'

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
                <SubTitle text='Um ajuste perfeito.' />
                <Paragraph text='Da largura individual do encosto ao aquecimento do banco. Tanto o banco multifuncional do motorista quanto o do passageiro M podem ser ajustados de várias maneiras para um suporte e conforto ótimos.' />
            </TextContainer>

            <CardContainer
                bgImage={bgCardM5}
                onMouseEnter={() => setIsVideo(true)}
                onClick={() => setIsVideo(true)}
            >

                {isVideo && (
                    <VideoCard
                        ref={videoRef}
                        source='/videos/VideoBancosCarro.mp4'
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