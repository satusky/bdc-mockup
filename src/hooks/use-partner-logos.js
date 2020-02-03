import { graphql, useStaticQuery } from 'gatsby'

const logosQuery = graphql`
    query {
        partnerLogos: allFile(filter: {relativeDirectory: {eq: "logos/partners"}}) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        id
                        fixed(fit: CONTAIN, height: 60) {
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

export const usePartnerLogos = () => {
    const { partnerLogos } = useStaticQuery(logosQuery)
    return partnerLogos.edges.map(({ node }) => node)
}
