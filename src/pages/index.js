import React from 'react'
import { DefaultLayout as Layout } from '../layouts'
import { Heading, Paragraph } from '../components/typography'
import { Card } from '../components/card'
import { Container, BandedContainer, BackgroundImageContainer, LineBreak } from '../components/layout'
import { SearchInput, ButtonCta } from '../components/form'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { Carousel, DataContainer } from '../components/modules'

const IndexPage = () => (
    <Layout noMargins>
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
                            <Card title="What is BioData Catalyst?">
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam natus, ratione sunt enim, quos deleniti veritatis accusamus delectus fugiat, alias fugit quae iusto omnis repellendus at veniam! Vero fugit incidunt sapiente in cum impedit magni autem adipisci commodi quia quam ipsam, iure perferendis sed quidem facilis obcaecati laboriosam distinctio. Sed illo sit reprehenderit eveniet at, temporibus aut soluta dolorem, assumenda repellat veniam amet. Beatae maxime, qui blanditiis modi expedita cum, dolore ut alias harum exercitationem, ab dolor suscipit quo, nemo quae? Accusantium hic, voluptate rerum aspernatur enim a amet itaque sequi esse voluptatem, illum nobis! Pariatur commodi omnis officiis. Harum!
                                </Paragraph>
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
                            <Card title="What can BioData Catalyst do for you?">
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vero soluta, voluptate voluptatibus officia voluptatem. Quibusdam aliquam vitae ea perferendis ab cum eligendi nihil officiis, sed et, possimus consequuntur illo. Ad libero recusandae nihil, nobis dignissimos atque earum nostrum nisi dolores tempore quaerat amet deserunt.
                                </Paragraph>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque est doloribus dignissimos minus id dolores molestias ipsa, cupiditate doloremque exercitationem dicta quidem aperiam repudiandae qui corporis libero, quod vitae?
                                </Paragraph>
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
                            <Card offsetTitle title="Available Data" bgColor="var(--color-crimson)" fgColor="#fff">
                                <LineBreak count={ 2 } />
                                <DataContainer />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={ 12 }>
                            <LineBreak count={ 3 } />
                            <Heading center>
                                Have and idea for BioData Catalyst?<br/>
                                We want to hear from you!
                            </Heading>
                            <Paragraph center>
                                <ButtonCta>Submit your idea here</ButtonCta>
                            </Paragraph>
                            <LineBreak count={ 3 } />
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </BackgroundImageContainer>
        
    </Layout>
)

export default IndexPage
