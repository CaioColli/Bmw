import styled from 'styled-components'
import { PiEngineBold } from 'react-icons/pi'
import { forwardRef } from 'react'

const Container = styled.div`
    max-width: 300px;
    background-color: rgba(255, 255, 255, 20%);
    border-radius: 15px;
    opacity: 0;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
`
const IconContainer = styled.div`
    min-width: 50px;
`

const Icon = styled(PiEngineBold)`
    font-size: 40px;
    color: var(--white);
`

const Texts = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Title = styled.h4`
    font-size: 24px;
    font-weight: bold;
`

const Paragraph = styled.p`

`

export const Card = forwardRef (({ title, paragraph }, ref) => {
    return (
        <Container ref={ref}>
            <Content>
                <IconContainer>
                    <Icon />
                </IconContainer>
                <Texts>
                    <Title>
                        {title}
                    </Title>
                    <Paragraph>
                        {paragraph}
                    </Paragraph>
                </Texts>
            </Content>
        </Container>
    )
})