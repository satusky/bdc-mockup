import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from '../components/seo'
import { PageContent, Container, LineBreak } from '../components/layout'
import { Title, DecoratedTitle, Heading, Paragraph } from '../components/typography'
import { Hero } from '../components/hero'
import { Card, CardHeader, CardBody } from '../components/card'
import { Accordion } from '../components/accordion'
import { Badge } from '../components/badge'
import AboutBioDataCatalystSvg from '../images/about-hero.svg'

const ccQuery = graphql`{
    coordinatingCenter: allCoordinatingCenterJson {
        edges {
            node {
                id
                name
                title
                email
            }
        }
    }
    projectTeams: allProjectTeamsJson {
        edges {
            node {
                id
                name
                symbol
                members {
                    Institution
                    Principal_Investigator
                    Institution_Lead
                    Department
                }
            }
        }
    }
    dataStewards: allDataStewardsJson {
        edges {
            node {
                id
                name
                url
            }
        }
    }
}`

const AboutPage = () => {
    const data = useStaticQuery(ccQuery)
    const cc = data.coordinatingCenter.edges.map(({ node }) => ({ ...node }))
    const projectTeams = data.projectTeams.edges.map(({ node }) => ({ ...node }))
    const dataStewards = data.dataStewards.edges.map(({ node }) => ({ ...node }))

    return (
        <PageContent>
            <SEO
                title="About BioData Catalyst"
                description=""
                keywords=""
            />
            
            <Hero
                title="About BioDataCatalyst"
                backgroundColor="var(--color-eggplant)"
                backgroundImage="http://picsum.photos/800/400"
                overlay={ <img src={ AboutBioDataCatalystSvg } alt="" style={{ width: '95%', maxWidth: '1000px', marginBottom: '2rem' }}/> }
            />
            
            <Container width="90%" maxWidth="1080px" center>

                <LineBreak />

                <Paragraph>
                    For NHLBI research investigators who need to find, access, share, store, cross-link, and compute on large scale data sets,
                    NHLBI BioData Catalyst serves as a cloud-based platform providing tools, applications, and workflows to enable these capabilities in secure workspaces. 
                </Paragraph>

                <Paragraph>
                    BioData Catalyst is a rationally organized digital environment that accelerates efficient biomedical research and
                    maximizes community engagement and productivity through increased access to NHLBI data sets and innovative data analysis capabilities.
                    By making these data sets accessible and usable, BioData Catalyst drives discovery and scientific advancement,
                    leading to novel diagnostic tools, therapeutic options, and prevention strategies for heart, lung, blood, and sleep disorders.
                </Paragraph>

                <Paragraph>
                    BioData Catalyst is a dynamic resource that will be continually developed and refined.
                    The BioData Catalyst Consortium solicits feedback from members and NHLBI
                    on the development of significant processes, emerging standards, and decisions using an RFC process.
                    This process endorses transparency and openness during the evolution of BioData Catalyst as a groundbreaking platform
                    providing unparalleled data access and capabilities to researchers across the globe.
                </Paragraph>
               
                <LineBreak count={ 2 } />
                
                <Card>
                    <CardHeader>Coordinating Center</CardHeader>
                    <CardBody>
                        {
                            cc.map(member => (
                                <div key={ member.id }>
                                    <strong>{ member.title }:</strong> { member.name } - { member.email }
                                    <br/><br/>
                                </div>
                            ))
                        }
                    </CardBody>
                </Card>

                <LineBreak count={ 2 } />
                
                <Card>
                    <CardHeader>Project Teams</CardHeader>
                    <CardBody>
                        <Paragraph>
                            The following projects were awarded using a special type of funding mechanism called Other Transactions (OT).
                            The OT mechanism gives NHLBI considerable flexibility in making and managing awards.
                            This will be particularly important for the BioData Catalyst to stay nimble as it approaches the complex task involved
                            in the development of the BioData Catalyst under the ever-changing conditions of data science and biomedical science.
                        </Paragraph>
                    </CardBody>
                    <CardBody style={{ padding: '0 0 3rem 0' }}>
                        {
                            projectTeams.map(team => (
                                <Accordion
                                    key={ team.id }
                                    title={
                                        <div>
                                            <Badge margin="0 1rem 0 0">{ team.symbol }</Badge>
                                            <span>{ `${ team.name }` }</span>
                                        </div>
                                    }
                                >
                                    {
                                        team.members.map(member => (
                                            <Fragment key={ `${ member.Institution } - ${ member.Principal_Investigator }` }>
                                                <h3>◦ { member.Institution }</h3>
                                                <div style={{ color: '#544', padding: '0 0 0 1.2rem' }}>
                                                    <strong>PI:</strong> { member.Principal_Investigator } <br/>
                                                    <strong>Insitution Lead:</strong> { member.Insitution_Lead } <br/>
                                                    <strong>Department:</strong> { member.Department } <br/>
                                                </div>
                                            </Fragment>
                                        ))
                                    }
                                </Accordion>
                            ))
                        }
                    </CardBody>
                </Card>
                
                <LineBreak count={ 2 } />
                
                <Card>
                    <CardHeader>Data Stewards</CardHeader>
                    <CardBody>
                        <Paragraph>
                            The stewards for each of the following data sets received supplemental funding to existing grants to participate as members of the BioData Catalyst. These data sets will serve as test cases to develop the capabilities of the BioData Catalyst.
                        </Paragraph>

                        {
                            dataStewards.map(steward => (
                                <div key={ steward.id }>
                                    <strong>{ steward.name }:</strong> <a href={ steward.url } target="_blank" rel="noopener noreferrer">{ steward.url }</a>
                                    <br/><br/>
                                </div>
                            ))
                        }

                    </CardBody>
                </Card>

                <LineBreak count={ 2 } />
                
            </Container>

        </PageContent>
    )
}

export default AboutPage
