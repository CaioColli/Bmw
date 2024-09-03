import { FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'

export const LinkLogo = styled(FaExternalLinkAlt)`
    color: var(--white);
    
    font-size: 30px;
    position: absolute;
    right: 5%;
    top: 5%;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`