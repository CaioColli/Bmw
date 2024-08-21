import { Button } from '@/Button'
import styled from 'styled-components'


const Container = styled.div`
    background-color: rgba(0,0,0,50%);
    border-radius: 15px;
    width: fit-content;
`

const Contain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 48px;

    @media (max-width: 425px) {
        padding: 24px;
    }
`

const Paragraph = styled.p`
    font-size: 24px;
    color: var(--white);
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 16px;
    }
`


export const Card = ({ onClick }) => {
    const handleTest = () => {
        console.log('Click')
    }

    return (
        <Container>
            <Contain>
                <Paragraph>
                    Veja os detalhes técnicos da M5
                </Paragraph>

                <Button
                    flex
                    whitebg
                    large
                    blackcolor
                    onClick={onClick}
                >
                    Detalhes
                </Button>
            </Contain>
        </Container>
    )
}