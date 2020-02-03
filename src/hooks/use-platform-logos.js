import { graphql, useStaticQuery } from 'gatsby'

const logosQuery = graphql`
    query {
        platformLogos: allFile(filter: {relativeDirectory: {eq: "logos/platforms"}}) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 80) {
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

export const usePlatformLogos = () => {
    const { platformLogos } = useStaticQuery(logosQuery)
    return platformLogos.edges.map(({ node }) => node)
}
