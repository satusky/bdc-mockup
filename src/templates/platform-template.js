import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { PageContent, LineBreak } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { ExternalLink } from '../components/link'

const KeyFeaturesList = styled.div`
    & p {
        margin: 0;
    }
    & li {
        margin: 0;
        padding: 0;
        line-height: 2;
    }
`

const LinkList = styled(Paragraph).attrs({ center: true })`
    & ${ ExternalLink } {
        margin: 0 1rem;
    }
`

export default ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <div>
                <Title>{ frontmatter.title }</Title>

                <LinkList>
                    <ExternalLink to={ frontmatter.links.homepage }>Website</ExternalLink>
                    | 
                    <ExternalLink to={ frontmatter.links.documentation }>Documentation</ExternalLink>
                </LinkList>
                
                <Paragraph>
                    { frontmatter.teaser }
                </Paragraph>

                <Heading>Key Features</Heading>
                
                <KeyFeaturesList dangerouslySetInnerHTML={{ __html: html }} />
                
            </div>
        </PageContent>
    )
}

export const platformQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                title
                links {
                    homepage
                    documentation
                }
                teaser
            }
            html
        }
    }
`