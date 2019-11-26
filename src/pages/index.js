import React from 'react'
import { Heading, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'
import { PageContent, Container, BandedContainer, BackgroundImageContainer, LineBreak } from '../components/layout'
import { SearchInput } from '../components/form'
import { ButtonCta } from '../components/buttons'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { Carousel, DataContainer } from '../components/modules'

const IndexPage = () => (
    <PageContent>
        <Carousel />
        
        <LineBreak count={ 4 } />

        <Container center>
            <SearchInput />
        </Container>
    
        <LineBreak count={ 3 } />

        <BandedContainer width="100%">
            <Container width="90%" maxWidth="1080px" center>

                <Grid fluid>
                    <Row gutterWidth={ 40 }>
                        <Col xs={ 12 } lg={ 6 }>
                            <Card>
                                <CardHeader>What is BioData Catalyst?</CardHeader>
                                <CardBody>
                                    <Paragraph>
                                        For NHLBI research investigators who need to find, access, share, store, cross-link, and compute on large scale data sets,
                                        NHLBI DataSTAGE will serve as a cloud-based platform providing tools, applications, and workflows
                                        to enable these capabilities in secure workspaces.
                                        DataSTAGE is a rationally organized digital environment that will
                                        accelerate efficient biomedical research and maximize community engagement and productivity
                                        through increased access to NHLBI data sets and innovative data analysis capabilities.
                                        By making these data sets accessible and usable to varied users,
                                        DataSTAGE will drive discovery and scientific advancement,
                                        leading to novel diagnostic tools, therapeutic options, and prevention strategies for heart, lung, blood, and sleep disorders.
                                    </Paragraph>
                                </CardBody>
                            </Card>
                        </Col>
                        <Visible xs sm md>
                            <Row>
                                <Col xs={ 12 }>
                                    <br/><br/><br/>
                                </Col>
                            </Row>
                        </Visible>
                        <Col xs={ 12 } lg={ 6 }>
                            <Card>
                                <CardHeader>
                                    What can BioData Catalyst do for you?
                                </CardHeader>
                                <CardBody>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vero soluta, voluptate voluptatibus officia voluptatem. Quibusdam aliquam vitae ea perferendis ab cum eligendi nihil officiis, sed et, possimus consequuntur illo. Ad libero recusandae nihil, nobis dignissimos atque earum nostrum nisi dolores tempore quaerat amet deserunt.
                                    </Paragraph>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque est doloribus dignissimos minus id dolores molestias ipsa, cupiditate doloremque exercitationem dicta quidem aperiam repudiandae qui corporis libero, quod vitae?
                                    </Paragraph>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Grid>
            </Container>
        </BandedContainer>
        
        <LineBreak count={ 5 } />

        <BackgroundImageContainer width="100%" image="https://picsum.photos/900/500">
            <Container width="90%" maxWidth="1080px" center>
                <Grid fluid>
                    <Row>
                        <Col xs={ 12 }>
                            <Card title="" bgColor="var(--color-crimson)" fgColor="#fff">
                                <CardHeader bgColor="var(--color-crimson)">Available Data</CardHeader>
                                <CardBody bgColor="var(--color-crimson)">
                                    <DataContainer />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <LineBreak count={ 3 } />
                            <Heading center light>
                                Have and idea for BioData Catalyst?<br/>
                                We want to hear from you!
                            </Heading>
                            <Paragraph center>
                                <ButtonCta to ="/contact">Submit your idea here</ButtonCta>
                            </Paragraph>
                            <LineBreak count={ 3 } />
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </BackgroundImageContainer>
        
    </PageContent>
)

export default IndexPage
