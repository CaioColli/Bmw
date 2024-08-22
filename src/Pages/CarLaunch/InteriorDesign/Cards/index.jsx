import styled from 'styled-components'
import { CardsData } from './Data'
import { Card, Contain } from '../../Cards'
import { SubTitle } from '@/SubTitle'
import { Paragraph } from '@/Paragraph'


const Image = styled.div.withConfig({
    shouldForwardProp: (prop) => !['backgroundImage'].includes(prop)
})`
    background-image: url(${props => props.backgroundImage});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 120%;
    height: 270px;
    width: 400px;
    transition: 1s ease;
    
    &:hover {
        background-size: 140%;
    }

    @media (max-width: 425px) {
        max-width: 270px;
        max-height: 180px;
    }
`

export const Cards = () => {
    const data = CardsData

    return (
        <Card>
            {data && data.map(item => (
                <Contain key={item.id}>
                    <Image backgroundImage={item.picture} />
                    <SubTitle text={item.title} />
                    <Paragraph text={item.description} />
                </Contain>
            ))}
        </Card>
    )
}