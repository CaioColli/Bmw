import styled from 'styled-components'
import { Image } from '../ImageComponent'
import exhaustPic from '/public/PicEscapamentoM5.png'
import brakePic from '/public/PicDiscoFreioM5.png'
import { Paragraph, Title } from '..'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 48px;
`

const Contain = styled.div.withConfig({
    shouldForwardProp: (prop) => !['large'].includes(prop)
})`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.large ? '650px' : '500px'};
    gap: 8px;

    @media (max-width: 768px) {
        max-width: 450px;
    }

    @media (max-width: 425px) {
        max-width: 272px;
    }
`

export const ImagesContainer = () => {
    return (
        <Container>
            <Contain>
                <Image bg={exhaustPic} />

                <Title>
                    SOM IMERSIVO
                </Title>

                <Paragraph>
                    No exterior, quatro tubos de escape com controle de válvulas proporcionam o que se espera de um M. No interior, o som M adapta-se ao modo de construção selecionado.
                </Paragraph>
            </Contain>

            <Contain large>
                <Image bg={brakePic} large />

                <Title>
                    MAIS LEVE E MAIS DIRETO
                </Title>

                <Paragraph>
                    O opcional freio M de carbono cerâmica oferece desempenho superior em termos de capacidade de carga térmica e durabilidade e mais leve em comparação ao freio composto.
                </Paragraph>
            </Contain>
        </Container>
    )
}