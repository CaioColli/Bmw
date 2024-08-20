import styled from 'styled-components'
import { Card } from './Cards'
import { SvgCar } from './Svgs/car'
import { SvgEngine } from './Svgs/engine'



const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 48px 0;
    gap: 96px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
`

const SubTitle = styled.h2`
    font-size: 36px;
    font-weight: 500;
`

const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 500;
`

export const Informations = () => {
    return (
        <Container>
            <Content>
                <Card>
                    <SvgCar />
                </Card>
                <Texts>
                    <Title>
                        ICÔNICA
                    </Title>
                    <SubTitle>
                        Brilho Icônico da BMW
                    </SubTitle>
                    <Paragraph>
                        A grade M finalizada em preto de alto brilho com Brilho Icônico da BMW e as luzes M Shadow Line conferem ao BMW M5 uma aparência inconfundível.
                    </Paragraph>
                </Texts>
            </Content>

            <Content>
                <Texts>
                    <Title>
                        EMOÇÃO M HYBRID
                    </Title>
                    <SubTitle>
                        Pura emoção BMW
                    </SubTitle>
                    <Paragraph>
                        Seu PowerTrain híbrido com motor a gasolina M TwinPower Turbo V8 de alto desempenho e motor elétrico possui uma impressionante potência de 727hp (535 Kw). Seu torque de até 1000 Nm é distribuído pelo M xDrive para todas as quatro rodas.
                    </Paragraph>
                </Texts>
                <Card>
                    <SvgEngine />
                </Card>
            </Content>
        </Container>
    )
}