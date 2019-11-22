import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CloseIcon, ExpandDownIcon, HamburgerIcon } from '../icons'
import { Brand } from '../layout'
import githubLogo from '../../images/icons/github-logo.png'
import twitterLogo from '../../images/icons/twitter-logo.png'
import { Rotator } from '../anim'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #000000;
    transition: filter 250ms;
    filter: opacity(${ props => props.shaded ? '0.75' : '0' });
    pointer-events: ${ props => props.shaded ? 'auto' : 'none' };
`

const Wrapper = styled.div`
`

const Toggler = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    z-index: 3;
`

const MobileNavDrawer = styled.div`
    // & * { border: 2px solid #f99; }
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20rem;
    max-width: 90%;
    background: linear-gradient(to bottom, crimson, var(--color-crimson));
    clip-path: polygon(0 0, calc(100% - 4rem) 0, 100% 80%, calc(100% - 4rem) 100%, 0 100%);
    transition: transform 500ms;
    transform: ${ props => props.active ? 'translateX(0)' : 'translateX(-100vw)'};
    padding: 2rem 0 0 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MobileNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    flex: 1;
`

export const MobileSubmenuHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-white);
    border: 0;
    padding: 0.5rem 1rem;
    margin: 0;
    letter-spacing: 2px;
    position: relative;
    cursor: pointer;
    font-weight: 400;
    transition: color 500ms, background-color 250ms;
    background-color: var(--color-primary);
    position: relative;
    &:hover {
        background-color: var(--color-primary-dark);
        & svg {
            fill: var(--color-light);
        }
    }
    &.active {
        color: var(--color-real-black);
        background-color: var(--color-primary-dark);
        &:hover {
            color: var(--color-real-black);
            background-color: var(--color-primary-dark);
        }
    }
`

export const MobileMenuItem = styled.div`
    // border: 1px solid #f99;
`

const MobileMenuLink = styled(Link)`
    padding: 1rem 2rem;
    width: 100%;
    color: #eef;
    letter-spacing: 2px;
    font-size: 125%;
    font-weight: bold;
    text-decoration: none;
    transform: translateX(0);
    transition: color 250ms, background-color 250ms;
    text-transform: uppercase;
    &.active {
        background-color: #ffffff33;
        color: #eee;
    }
    &:hover {
        color: #eee;
        background-color: #ffffff22;
    }
`

export const MobileSubmenu = styled.nav.attrs({ className: 'submenu' })`
    font-size: 80%;
    min-width: 100%;
    border: solid var(--color-primary-dark);
    border-width: 1px;
    background-color: var(--color-primary);
    transition: transform 150ms, opacity 250ms;
`

const SocialLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0;
    padding-left: 2rem;:
`

const SocialIcon = styled.img`
    margin: 0 1rem;
    padding: 0;
    transition: filter 250ms;
    filter: opacity(0.5);
    &:hover {
        filter: opacity(1.0);
    }
`

export const MobileMenu = ({ items }) => {
    const [visible, setVisible] = useState()
    const [activeSubmenus, setActiveSubmenus] = useState([])

    const handleToggleSubmenu = index => event => {
        let newActiveSubmenus = []
        if (activeSubmenus.includes(index)) {
            newActiveSubmenus = newActiveSubmenus.filter(i => i !== index)
        } else {
            newActiveSubmenus = activeSubmenus.concat([index])
        }
        setActiveSubmenus(newActiveSubmenus)
    }
    const closeAllSubmenus = () => setActiveSubmenus([])
    
    const handleToggleMenu = () => setVisible(!visible)
    const handleCloseMenu = () => setVisible(false)

    useEffect(() => {
        const escapeHatch = e => {
            if (e.keyCode === 27) {
                handleCloseMenu()
            }
        }
        if (visible) {
            document.addEventListener('keydown', escapeHatch)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => document.removeEventListener('keydown', escapeHatch)
    }, [visible])

    return (
        <Wrapper>
            <Toggler onClick={ handleToggleMenu }>
                { visible ? <CloseIcon size="56" fill="var(--color-crimson)" /> : <HamburgerIcon size="56" fill="var(--color-crimson)"  /> }
            </Toggler>
            <MobileNavDrawer active={ visible } onKeyDown={ e => console.log(e) }>
                <div style={{ marginLeft: '2rem' }}>
                    <Brand white/>
                </div>
                <MobileNav>
                {
                    items.map((item, currentIndex) => (
                        <MobileMenuItem key={ item.path } onClick={ item.submenu && handleToggleSubmenu(currentIndex) }>
                            {
                                item.submenu
                                ? (
                                    <Fragment>
                                        <MobileSubmenuHeader key={ item.path } to={ item.path } active={ activeSubmenus.includes(currentIndex) }>
                                            { item.text }
                                            <Rotator style={{ position: 'absolute', right: '1rem' }} rotated={ activeSubmenus.includes(currentIndex) }>
                                                <ExpandDownIcon color="var(--color-primary-dark)" />
                                            </Rotator>
                                        </MobileSubmenuHeader>
                                            <MobileSubmenu active={ activeSubmenus.includes(currentIndex) } onClick={ handleCloseMenu }>
                                                { item.submenu.map(subitem => <MobileMenuLink key={ subitem.path } to={ subitem.path } activeClassName="active" partiallyActive={ true }>{ subitem.text }</MobileMenuLink>) }
                                            </MobileSubmenu>
                                    </Fragment>
                                ) : (
                                    <MobileMenuLink onClick={ handleCloseMenu } key={ item.path } to={ item.path } activeClassName="active" partiallyActive={ true }>
                                        { item.text }
                                    </MobileMenuLink>
                                )
                            }
                        </MobileMenuItem>
                    ))
                }
                </MobileNav>
                <SocialLinks>
                    <a href="tbd" target="_blank" rel="noopener noreferrer"><SocialIcon src={ twitterLogo } alt="Twitter Logo" /></a> &nbsp;&nbsp;
                    <a href="tbd" target="_blank" rel="noopener noreferrer"><SocialIcon src={ githubLogo } alt="GitHub Octocat Logo" /></a> &nbsp;&nbsp;
                </SocialLinks>
            </MobileNavDrawer>
            <Overlay shaded={ visible } onClick={ handleCloseMenu } />
        </Wrapper>
    )
}
