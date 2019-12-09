import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent, LineBreak } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { HexBadge } from '../../components/badge'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody, CardFooter } from '../../components/card'
import { List, ListItem } from '../../components/list'

const SupportCard = ({ title, icon, children }) => {
    return (
        <Card>
            <CardHeader bgColor="#fff" fgColor="#444" style={{ borderBottom: '1px solid var(--color-crimson' }}/>
            <CardBody style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-3rem', left: '2rem' }}>
                    <HexBadge>{ icon }</HexBadge>
                </div>
                <LineBreak count={ 2 } />
                <h3 style={{ color: 'var(--color-crimson)' }}>{ title }</h3>
                { children }
            </CardBody>
        </Card>
    )
}

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
                            <SupportCard title="Lorem ipsum dolor" icon={ 'ICON' }>
                                <List>
                                    {
                                        [...Array(Math.floor(Math.random() * 3 ) + 1).keys()].map(j => {
                                            const count = Math.floor(Math.random() * 5) + 2
                                            const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(' ').slice(0, count).join(' ')
                                            return <ListItem key={ j } primary={ <a href="#">{ loremIpsum }</a> } />
                                        })
                                    }
                                </List>
                            </SupportCard>
                        </Col>
                    ))
                }
            </Row>
        </Grid>

    </PageContent>
)

export default TrainingPage
