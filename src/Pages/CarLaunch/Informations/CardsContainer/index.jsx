import styled from 'styled-components'
import { Card } from '../Card'
import { SvgCar } from '../Svgs/car'
import { Paragraph, Texts, Title } from '..'
import { SvgEngine } from '../Svgs/engine'
import { SubTitle } from '@/SubTitle'

const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => !['column'].includes(prop)
})`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${props => props.column ? '8px' : '48px'};

    @media (max-width: 1024px) {
        gap: 24px;

        &:nth-of-type(2) {
            & > div:nth-of-type(1) {
                order: 2;
            }
            & > div:nth-of-type(2) {
                order: 1;
            }
        }
    }

    @media (max-width: 425px) {
        max-width: 272px;
    }
`

export const CardsContainer = () => {
    return (
        <>
            <Container>
                <Card>
                    <SvgCar />
                </Card>

                <Texts>
                    <Title>
                        ICÔNICA
                    </Title>

                    <SubTitle text='Brilho Icônico da BMW' />

                    <Paragraph>
                        A grade M finalizada em preto de alto brilho com Brilho Icônico da BMW e as luzes M Shadow Line conferem ao BMW M5 uma aparência inconfundível.
                    </Paragraph>
                </Texts>
            </Container>

            <Container>
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
            </Container>
        </>
    )
}