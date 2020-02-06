import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { Card, CardHeader, CardBody } from '../../components/card'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { ExternalLink } from '../../components/link'

const tools = [
    {
        title: 'Explore Available Data',
        items: [
            {
                description: 'Use BioData Catalyst powered by Gen3 to discover and learn more about variables in TOPMed projects and to apply for access through dbGaP. Gen3 also allows for search through hosted data and for creating synthetic cohorts of interest and exporting the data to an analysis environment.',
                links: {
                    launch: 'https://gen3.datastage.io/',
                    documentation: '',
                    learnMore: '/platforms/gen3',
                },
            },
            {
                description: 'Explore available data through BioData Catalyst powered by PIC-SURE with interactive search and visualizations for feasibility assessment. Use query results to create a cohort, with the ability to choose specific variables of interest to export into an analysis environment. ',
                links: {
                    launch: 'https://biodatacatalyst.integration.hms.harvard.edu/psamaui/login/?redirection_url=/picsureui/',
                    documentation: '',
                    learnMore: '/platforms/pic-sure',
                },
            },
        ]
    },
    {
        title: 'Analyze Data in Cloud-based Shared Workspaces',
        items: [
            {
                description: 'BioData Catalyst powered by Seven Bridges offers collaborative workspaces for analyzing genomics data at scale. Access hosted datasets along with Common Workflow Language pipelines for analysis. This platform also  enables users to bring their own data for analysis and work in RStudio and Jupyterlab Notebooks for interactive analysis.',
                links: {
                    launch: 'https://f4c-accounts.sbgenomics.com/auth/login?next=https%3A%2F%2Ff4c-accounts.sbgenomics.com%2Foauth2%2Fauthorization%3Fresponse_type%3Dcode%26client_id%3D74735b722c33498cb981b6b6e24f659f%26redirect_uri%3Dhttps%253A%252F%252Ff4c.sbgenomics.com%252Foauth2%252Fredirect%26scope%3Dopenid%26state%3DD9lNrFc8pMySUALiuvewZkO0LGl8oc%26nonce%3D111038105642055197041580917835',
                    documentation: '',
                    learnMore: '/platforms/seven-bridges',
                },
            },
            {
                description: 'BioData Catalyst powered by Terra is a scalable cloud-based platform for democratizing genomic data access and for sharing and computing across large genomic and genomic-related data sets. Terra offers a stand-alone computational workspace model that provides a secure collaborative place to organize data, run and monitor analysis pipelines, and perform interactive analysis using applications such as Jupyter Notebooks.',
                links: {
                    launch: 'https://datastage.terra.bio/',
                    documentation: '',
                    learnMore: '/platforms/terra',
                },
            },
        ]
    },
    {
        title: 'Use Community Tools on Controlled-access Datasets',
        items: [
            {
                description: 'Via Dockstore, search from a catalogue of high-quality Docker-based workflows that easily export to platforms such as Terra or Seven Bridges. Explore organization pages to find collections of workflows from labs, institutions, and consortiums or create a page to share your work with the wider bioinformatics community.',
                links: {
                    launch: 'https://dockstore.org/',
                    documentation: '',
                    learnMore: '/platforms/dockstore',
                },
            },
            {
                description: 'BioData Catalyst powered by HeLx is a web-based platform for collaborative open science. It provides metadata aware data management capabilities with extensive support for sharing and access control. The AppStore also presents tools that can be dynamically launched for each user.',
                links: {
                    launch: 'https://helx.commonsshare.org/',
                    documentation: '',
                    learnMore: '/platforms/helx',
                },
            },
        ]
    },
]

const ToolLinks = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 2rem 0;
`

const InternalToolLink = styled(Link)`
    margin: 0 0.5rem;
`

const ExternalToolLink = styled(ExternalLink)`
    margin: 0 0.5rem;
`

const Separator = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    ${ props => props.horizontal && `margin: 1rem 0;` }
    &::after {
        content: "";
        position: absolute;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        ${ props => props.horizontal && `top: 0%;` }
        ${ props => props.vertical && `top: 50%;` }
        left: 50%;
        transform: translate(-50%, -50%);
        ${
            props => props.horizontal && `
                height: 1px;
                width: 80%;
            `
        }
        ${
            props => props.vertical && `
                height: 80%;
                width: 1px;
            `
        }
    }
`

const ToolsPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Available Tools"
            description=""
            keywords=""
        />

        <Title>Tools & Analysis</Title>

        <Heading>Explore the BioData Catalyst Ecosystem</Heading>
        
        <Paragraph>
            For academic heart, lung, blood, and sleep researchers (with access to TOPMed data and capacity to analyze it),
            the BioData Catalyst ecosystem provides researchers with several platforms and services
            for exploring and analyzing both private and publicly hosted datasets in the cloud using pre-built and custom workflows.
        </Paragraph>

        <Heading>What do you want to do today?</Heading>

        {
            tools.map(tool => (
                <Card key={ tool.title }>
                    <CardHeader>{ tool.title }</CardHeader>
                    <CardBody>
                        <Grid fluid>
                            <Row gutterWidth={ 0 }>
                                {
                                    tool.items.map((item, i) => (
                                        <Fragment key={ i }>
                                            <Col xs={ 12 } md={ 5 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <Paragraph firstLineStyle="font-style: italic; font-size: 120%;">
                                                    { item.description }
                                                </Paragraph>
                                                <ToolLinks>
                                                    <ExternalToolLink to={ item.links.launch }>Launch</ExternalToolLink>
                                                    | 
                                                    <ExternalToolLink to={ item.links.documentation }>Documentation</ExternalToolLink>
                                                    | 
                                                    <InternalToolLink to={ item.links.learnMore }>Learn More</InternalToolLink>
                                                </ToolLinks>
                                            </Col>
                                            {
                                                i + 1 < tool.items.length&& (
                                                    <Fragment>
                                                        <Visible md lg xl>
                                                            <Col md={ 2 }>
                                                                <Separator vertical />
                                                            </Col>
                                                        </Visible>
                                                        <Visible xs sm>
                                                            <Col xs={ 12 }>
                                                                <Separator horizontal />
                                                            </Col>
                                                        </Visible>                                                
                                                    </Fragment>
                                                )
                                            }
                                        </Fragment>
                                    ))
                                }
                            </Row>
                        </Grid>
                    </CardBody>
                </Card>
            ))
        }

    </PageContent>
)

export default ToolsPage
