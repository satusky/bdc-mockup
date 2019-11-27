import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from '../components/seo'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'

const ccQuery = graphql`{
    coordinatingCenter: allCoordinatingCenterJson {
        edges {
            node {
                name
                title
                email
            }
        }
    }
    projectTeams: allProjectTeamsJson {
        edges {
            node {
                name
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
                name
                url
            }
        }
    }
}`

const AboutPage = () => {
    const data = useStaticQuery(ccQuery)
    const contacts = data.coordinatingCenter.edges.map(({ node }) => ({ ...node }))
    const projectTeams = data.projectTeams.edges.map(({ node }) => ({ ...node }))
    const dataStewards = data.dataStewards.edges.map(({ node }) => ({ ...node }))

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="About BioData Catalyst"
                description=""
                keywords=""
            />

            <Title>About</Title>
            
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
           
            <Heading>Coordinating Center</Heading>
            
            <pre style={{ fontSize: '75%' }}>{ JSON.stringify(contacts, null, 1) }</pre>

            <Heading>Project Teams</Heading>

            <Paragraph>
                The following projects were awarded using a special type of funding mechanism called Other Transactions (OT). The OT mechanism gives NHLBI considerable flexibility in making and managing awards. This will be particularly important for the DataSTAGE to stay nimble as it approaches the complex task involved in the development of the DataSTAGE under the ever-changing conditions of data science and biomedical science.
            </Paragraph>

            <pre style={{ fontSize: '75%' }}>{ JSON.stringify(projectTeams, null, 1) }</pre>


            <Heading>Data Stewards</Heading>

            <Paragraph>
                The stewards for each of the following data sets received supplemental funding to existing grants to participate as members of the DataSTAGE. These data sets will serve as test cases to develop the capabilities of the DataSTAGE.
            </Paragraph>

            <pre style={{ fontSize: '75%' }}>{ JSON.stringify(dataStewards, null, 1) }</pre>

        </PageContent>
    )
}

export default AboutPage
