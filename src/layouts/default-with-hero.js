import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Toolbar, Header, Brand, Hero, Main, Footer, Container } from '../components/layout'
import { Button } from '../components/form'
import { Heading, Paragraph } from '../components/typography'
import { Menu } from '../components/menu'
import { menuItems } from '../data/menu'

import '../styles/normalize.css'
import '../styles/customize.css'

const LayoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const DefaultLayoutWithHero = ({ children }) => {
    return (
        <LayoutWrapper>
            <Toolbar>
                <Button>Members Area</Button>
            </Toolbar>
            <Header>
                <Brand />
                <Menu items={ menuItems } />
            </Header>
            <Main style={{ flex: 1 }}>
                { children }
            </Main>
            <Footer>
                &copy; { new Date().getFullYear() }
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayoutWithHero.propTypes = {
    children: PropTypes.node.isRequired,
}
