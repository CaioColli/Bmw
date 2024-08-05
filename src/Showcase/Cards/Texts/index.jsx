import styled from 'styled-components'

export const DescriptionCar = styled.div`
    bottom: 10%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    left: 8%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.5s ease;

    @media (max-width: 1024px) {
        bottom: 5%;
        opacity: 1;
    }
`

export const ModelCar = styled.p`
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    font-family: 'Lato';
`

export const PriceCar = styled.span`
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    font-family: 'Lato';
`
