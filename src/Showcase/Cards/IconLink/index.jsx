import { FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'

export const LinkLogo = styled(FaExternalLinkAlt)`
    font-size: 30px;
    color: var(--white);
    position: absolute;
    top: 5%;
    right: 5%;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`