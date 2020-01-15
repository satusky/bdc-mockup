import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { Toolbar, Header, Brand, Main, Footer, Container, StickyWrapper, LineBreak } from '../components/layout'
import { ExternalButtonLink } from '../components/buttons'
import { Paragraph } from '../components/typography'
import { Menu, MobileMenu } from '../components/menu'
import { menuItems } from '../data/menu'
import { List, ListItem } from '../components/list'
import { useScrollPosition, useWindowWidth } from '../hooks'
import githubLogo from '../images/icons/github-logo.png'
import hexBackgroundLeftSvg from '../images/hex-background-left.svg'
import hexBackgroundRightSvg from '../images/hex-background-right.svg'

import '../styles/normalize.css'
import '../styles/customize.css'

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

const LayoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    &::after {
        content: "";
        left: 0;
        top: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -2;
        ${
            props => props.compact
            ? `
                background-image: url(${ hexBackgroundLeftSvg });
                background-position: -4rem 0;
                background-size: 400px;
                background-repeat: repeat-y;
                background-attachment: fixed;
            `
            : `
                background-image: url(${ hexBackgroundLeftSvg }), url(${ hexBackgroundRightSvg });
                background-position: -4rem 0, calc(100% + 4rem) 0;
                background-size: 400px, 400px;
                background-repeat: repeat-y, repeat-y;
                background-attachment: fixed;
            `
        }
    }
`

const SocialLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SocialIcon = styled.img`
    margin: 0 0.5rem;
    padding: 0;
    transition: filter 250ms;
    filter: opacity(0.5);
    &:hover {
        filter: opacity(1.0);
    }
`

export const DefaultLayout = ({ children }) => {
    const data = useStaticQuery(nhlbiHhsLogoQuery)
    const nhlbiHhsLogo = data.logo.edges[0].node.childImageSharp.fluid
    const { isCompact } = useWindowWidth()
    const scrollPosition = useScrollPosition()
    const [stuckHeader, setStuckHeader] = useState(false)

    // useEffect(() => {
    //     setStuckHeader(scrollPosition > toolbarElement.current.getBoundingClientRect().height)
    // }, [scrollPosition])

    return (
        <LayoutWrapper compact={ isCompact }>
            <StickyWrapper stuck={ true }>
                <Header>
                    <Brand height="100%" />
                    <Visible xs sm md>
                        <MobileMenu items={ menuItems } />
                    </Visible>
                    <Visible lg xl>
                        <Menu items={ menuItems } />
                    </Visible>
                </Header>
            </StickyWrapper>
            <Main>
                { children }
            </Main>
            <Footer>
                <Container width="95%" maxWidth="1080px" center>
                    <Grid fluid>
                        <Row>
                            <Col xs={ 12 } md={ 5 } push={{ md: 7 }}>
                                <List center={ isCompact } right={ !isCompact }>
                                    <ListItem primary={ <Link to="/faq">FAQs</Link> } />
                                    <ListItem primary={ <Link to="/docs">Documents</Link> } />
                                    <ListItem primary={ <Link to="/support">Support</Link> } />
                                    <ListItem primary={ <Link to="/legal">Legal</Link> } />
                                </List>
                            </Col>
                            <Col xs={ 12 } md={ 7 } pull={{ md: 5 }}>
                                <Paragraph center={ isCompact } left={ !isCompact }>
                                    Supported by the National Heart, Lung, and Blood Institute of the National Institutes of Health.
                                    <LineBreak count={ 2 } />
                                    For general inquiries, contact <a href="mailto:bdc3@renci.org">bdc3@renci.org</a>.
                                    <LineBreak count={ 2 } />
                                    &copy; { new Date().getFullYear() }
                                </Paragraph>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={ 12 }>
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
