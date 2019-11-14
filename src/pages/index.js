import React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { DefaultLayoutWithHero as Layout } from '../layouts'
import { Heading, Paragraph } from '../components/typography'
import { Card, CardBox } from '../components/card'
import { Container } from '../components/layout'
import { SearchInput, ButtonCta } from '../components/form'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { HexagonGroup, Hexagon } from '../components/hexagon'

const IndexPage = () => (
    <Layout>
        <Container width="90%" maxWidth="900px" center>
            <HexagonGroup>
                <Hexagon color="#ccc">
                    TEST
                </Hexagon>
                <Hexagon color="var(--color-crimson)">
                    TEST
                </Hexagon>
                <Hexagon color="#ccc">
                    TEST
                </Hexagon>
            </HexagonGroup>
            
            <Paragraph center>
                <SearchInput />
            </Paragraph>
        </Container>

        <br/>
        <br/>
        <br/>

        <Container width="90%" maxWidth="900px" center>

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

                <Row>
                    <Col xs={ 12 }>
                        <br/><br/><br/>
                    </Col>
                </Row>
    
                <Row>
                    <Col xs={ 12 }>
                        <Card offsetTitle title="Available Data" bgColor="var(--color-crimson)" fgColor="#fff">
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quaerat consequuntur ratione.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 }>
                        <Heading center>
                            Have and idea for BioData Catalyst?<br/>
                            We want to hear from you!
                        </Heading>
                        <Paragraph center>
                            <ButtonCta>Submit your idea here</ButtonCta>
                        </Paragraph>
                    </Col>
                </Row>
            </Grid>
        </Container>
        
        <br/>

    </Layout>
)

export default IndexPage
