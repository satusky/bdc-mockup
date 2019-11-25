import React from 'react'
import { PageContent } from '../../components/layout'
import { Title, Heading } from '../../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Card } from '../../components/card'

const ToolsPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>

        <Title>Tools & Analysis</Title>
        
        <Heading>Image Analysis</Heading>

        <Grid fluid>
            <Row>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Picture Cohort Explorer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste exercitationem, totam deserunt!
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Ashok's Image Analysis">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae non ea commodi.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Jupyter Notebook 1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit deleniti nihil.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Jupyter Notebook 2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit deleniti nihil.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Pipeline Builder">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus assumenda? Debitis.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="DocServer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minima soluta temporibus.
                    </Card>
                </Col>

            </Row>
        </Grid>

        <Heading>GWAS Pipelines</Heading>

        <Grid fluid>
            <Row>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="GWAS Analysis Pipeline 1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo saepe consequatur, animi?
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="GWAS Analysis Pipeline 2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo saepe consequatur, animi?
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="GWAS Analysis Pipeline 3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo saepe consequatur, animi?
                    </Card>
                </Col>

            </Row>
        </Grid>

        <Heading>Jupyter Notebooks</Heading>

        <Grid fluid>
            <Row>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Jupyter Notebook 1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit deleniti nihil.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Jupyter Notebook 2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit deleniti nihil.
                    </Card>
                </Col>

            </Row>
        </Grid>

        <Heading>Miscellaneous</Heading>

        <Grid fluid>
            <Row>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="Pipeline Builder">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, temporibus assumenda? Debitis.
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={{ marginBottom: '2rem' }}>
                    <Card title="DocServer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minima soluta temporibus.
                    </Card>
                </Col>

            </Row>
        </Grid>



    </PageContent>
)

export default ToolsPage
