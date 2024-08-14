import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    min-width: 150px;
`

const Label = styled.label`
    font-size: 18px;
    font-weight: var(--fontLato);
    color: var(--lightGray);
`

const Content = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
`
const Icon = styled.div.withConfig({
    shouldForwardProp: (prop) => !['bgImage'].includes(prop)
})`
    -webkit-mask: url(${props => props.bgImage}) no-repeat center / contain;
    background-color: var(--lightGray);
    height: 32px;
    mask: url(${props => props.bgImage}) no-repeat center / contain;
    width: 32px;
`

const Input = styled.input`
    all: unset;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: 1px solid var(--lightGray);
    position: relative;

    &:checked {
        background-color: var(--gray);
    }

    &:checked ~ ${Content} ${Label} {
        color: var(--gray);
    }

    &:checked ~ ${Content} ${Icon} {
        background-color: var(--gray);
    }
    
    &:checked::after {
        content: '✓';  /* Vzinho de selecionado */
        color: white;  /* Cor do checkmark */
        font-size: 14px;  /* Tamanho do checkmark */
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`


export const InputModal = ({ valueinput, icon, label }) => {
    return (
        <Container>
            <Input
                type='checkbox'
                name='BodyworkType'
                value={valueinput} />

            <Content>
                <Icon bgImage={icon} />
                <Label>
                    {label}
                </Label>

            </Content>
        </Container>
    )
}