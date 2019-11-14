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
            <Hero>
                <Container width="75%" maxWidth="450px">
                    <Heading center>
                        Biomedical Data <em>when</em> you need it and <em>how</em> you need it.
                    </Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet repudiandae maxime accusamus eos et, aliquid placeat sed iusto, veniam nesciunt temporibus, voluptate quisquam voluptatibus totam fuga. Tempore iusto, nesciunt.
                    </Paragraph>
                </Container>
            </Hero>
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
