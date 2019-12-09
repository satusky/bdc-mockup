import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent, LineBreak } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { HexBadge } from '../../components/badge'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody, CardFooter, ResourceCard } from '../../components/card'
import { List, ListItem } from '../../components/list'

const TrainingPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Learn and Support"
            description=""
            keywords=""
        />

        <Title>Learn and Support</Title>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quasi fuga. Quis voluptate aut aliquid perferendis tempora alias similique eum accusantium velit consequuntur illum sed nobis, placeat autem inventore vel a iste veritatis, nemo.
        </Paragraph>

        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.
        </Paragraph>

        <Grid fluid>
            <Row>
                {
                    [...Array(9).keys()].map(i => (
                        <Col key={ i } xs={ 12 } md={ 6 } lg={ 4 } style={{ marginBottom: '2rem' }}>
                            <ResourceCard title="Lorem ipsum dolor" icon={ 'ICON' }>
                                <List>
                                    {
                                        [...Array(Math.floor(Math.random() * 3 ) + 1).keys()].map(j => {
                                            const count = Math.floor(Math.random() * 5) + 2
                                            const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(' ').slice(0, count).join(' ')
                                            return <ListItem key={ j } primary={ <a href="#">{ loremIpsum }</a> } />
                                        })
                                    }
                                </List>
                            </ResourceCard>
                        </Col>
                    ))
                }
            </Row>
        </Grid>

    </PageContent>
)

export default TrainingPage
