import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
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

const nhlbiHhsLogoQuery = graphql`
    query {
        logo: allFile(filter: {relativePath: {eq: "nhlbi-hhs-logo.png"}}) {
            edges {
                node {
                    childImageSharp {
                        fixed {
                            base64
                            tracedSVG
                            aspectRatio
                            width
                            height
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`


export const DefaultLayout = ({ children }) => {
    const data = useStaticQuery(nhlbiHhsLogoQuery)
    const nhlbiHhsLogo = data.logo.edges[0].node.childImageSharp.fixed
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
                <Grid fluid>
                    <Row>
                        <Col xs={ 12 } md={ 6 }>
                            <Paragraph>
                                Supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health.
                            </Paragraph>
                            <Paragraph>
                                For general inquiries, contact <a href="mailto:bdc3@renci.org">bdc3@renci.org</a>.
                            </Paragraph>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Paragraph right>
                                <Img fixed={ nhlbiHhsLogo } />
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <Paragraph center>
                                &copy; { new Date().getFullYear() }
                            </Paragraph>
                        </Col>
                    </Row>
                </Grid>
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
