import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    // min-width: 350px;
`

export const MenuLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #444;
    text-decoration: none;
    padding: 1.5rem 1rem;
    margin: 0;
    background-color: transparent;
    letter-spacing: 2px;
    position: relative;
    height: 100%;
    font-weight: 400;
    transition: color 500ms, background-color 150ms;
    &:hover {
        background-color: #ccc;
    }
    &.active {
        color: #fff;
        background-color: var(--color-crimson);
    }
`

export const Menu = ({ items, showBrand }) => {
    return (
        <MenuContainer>
            {
                items.map((item, currentIndex) => {
                    return <MenuLink to={ item.path } key={ item.path } activeClassName="active" partiallyActive={ false }>{ item.text }</MenuLink> 
                })
            }
        </MenuContainer>
    )
}