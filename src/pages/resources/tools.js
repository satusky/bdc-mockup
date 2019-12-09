import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { ResourceCard } from '../../components/card'

const ToolsPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Available Tools"
            description=""
            keywords=""
        />

        <Title>Tools & Analysis</Title>
        
        <Paragraph>
            Coming soon...
        </Paragraph>

        <Grid fluid>
            <Row>
                {
                    [...Array(6).keys()].map(i => {
                        const wordCount = Math.floor(Math.random() * 35) + 5
                        const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ab sequi obcaecati quasi doloremque nihil ea, esse non deserunt illo eligendi eius id sapiente quas aut molestiae, mollitia asperiores, inventore quaerat culpa omnis cupiditate expedita dicta natus. Facere, autem, accusamus.'.split(' ').slice(0, wordCount).join(' ')
                        return (
                            <Col key={ i } xs={ 12 } md={ 6 } lg={ 4 } style={{ marginBottom: '2rem' }}>
                                <ResourceCard title="Lorem ipsum dolor" icon={ 'ICON' }>
                                    { loremIpsum }
                                </ResourceCard>
                            </Col>
                        )
                    })
                }
            </Row>
        </Grid>

    </PageContent>
)

export default ToolsPage
