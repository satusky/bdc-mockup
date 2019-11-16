import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Toolbar, Header, Brand, Main, Footer, Container, StickyWrapper } from '../components/layout'
import { Button } from '../components/form'
import { Paragraph } from '../components/typography'
import { Menu } from '../components/menu'
import { menuItems } from '../data/menu'
import { useScrollPosition, useWindowWidth } from '../hooks'

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
                        fluid(maxWidth: 353, maxHeight: 100) {
                            base64
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    }
`

export const DefaultLayout = ({ marginTop = false, marginBottom = false, children }) => {
    const data = useStaticQuery(nhlbiHhsLogoQuery)
    const nhlbiHhsLogo = data.logo.edges[0].node.childImageSharp.fluid
    const { isCompact } = useWindowWidth()
    const toolbarElement = useRef(null)
    const scrollPosition = useScrollPosition()
    const [stuckHeader, setStuckHeader] = useState(false)

    useEffect(() => {
        setStuckHeader(scrollPosition > toolbarElement.current.getBoundingClientRect().height)
    }, [scrollPosition])

    return (
        <LayoutWrapper>
            <Toolbar ref={ toolbarElement }>
                <Button>Members Area</Button>
            </Toolbar>
            <StickyWrapper stuck={ stuckHeader }>
                <Header>
                    <Brand />
                    <Menu items={ menuItems } />
                </Header>
            </StickyWrapper>
            <Main
                style={{
                    marginTop: marginTop ? '3rem' : '0',
                    marginBottom: marginBottom ? '4rem' : '0',
                }}
            >
                { children }
            </Main>
            <Footer>
                <Container width="95%" maxWidth="1080px" center>
                    <Grid fluid>
                        <Row>
                            <Col xs={ 12 } lg={ 7 }>
                                <Paragraph center={ isCompact } left={ !isCompact }>
                                    Supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health.
                                    <br/><br/>
                                    For general inquiries, contact <a href="mailto:bdc3@renci.org">bdc3@renci.org</a>.
                                </Paragraph>
                            </Col>
                            <Col xs={ 12 } lg={ 5 }>
                                <Img fluid={ nhlbiHhsLogo } style={{ maxWidth: '353px', height: 'auto', margin: 'auto' }}/>
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
                </Container>
            </Footer>
        </LayoutWrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
