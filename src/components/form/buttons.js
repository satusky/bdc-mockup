import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled.button`
    background-color: var(--color-crimson);
    border-radius: 1rem;
    border: 0;
    color: #fff;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    // display: flex;
    // justify-content: center;
    // align-items: center;
`

export const ButtonLink = styled(Button).attrs({ as: Link })`
    cursor: pointer;
    transition: filter 250ms;
    &:hover {
        filter: brightness(1.25);
    }
`

export const ExternalButtonLink = styled(Button).attrs({ as: 'a', target: '_blank', rel: 'noopener noreferrer' })`
    cursor: pointer;
    transition: filter 250ms;
    text-decoration: none;
    &:hover {
        filter: brightness(1.25);
    }
`

export const ButtonCta = styled(Button).attrs({ as: Link })`
    background-color: var(--color-crimson);
    border-radius: 1rem;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-size: 120%;
    text-decoration: none;
    transition: filter 250ms;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)) brightness(1.0);
    &:hover {
        filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)) brightness(1.25);
    }
`