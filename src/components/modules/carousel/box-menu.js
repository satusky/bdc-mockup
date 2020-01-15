import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const BoxMenu = styled.div`
    // border: 1px solid #f99; * { border: 1px solid #99f; }
    background-color: transparent;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 2rem;
`

const BoxMenuItemWrapper = styled(Link)`
    background-color: var(--color-grey);
    color: #fff;
    font-weight: bold;
    font-size: 150%;
    text-decoration: none;
    transition: background-color 250ms;
    &:hover {
        background-color: var(--color-crimson);
    }
    min-width: calc(100% - 2rem);
    @media (min-width: 600px) {
        min-width: calc(50% - 2rem);
        // padding: 1rem 10vw;
    }
    flex: 1;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 5vw;
`

const BoxMenuItemIcon = styled.span`
    background-color: #fff;
    border-radius: 50%;
    min-width: 4rem;
    min-height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 0;
    @media (min-width: 768px) {
        margin: 0 1.5rem;
    }
    &:hover svg {
        fill: var(--color-crimson);
    }
`

const BoxMenuItemText = styled.span`
    text-transform: uppercase;
`

export const BoxMenuItem = ({ path, icon, text }) => {
    const Icon = icon
    return (
        <BoxMenuItemWrapper to={ path }>
            <BoxMenuItemIcon><Icon size="36" fill="var(--color-grey)"/></BoxMenuItemIcon>
            <BoxMenuItemText>{ text }</BoxMenuItemText>
        </BoxMenuItemWrapper>
    )
}

