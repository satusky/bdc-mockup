import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { DefaultLayout as Layout } from '../layouts'
import { Heading, Paragraph } from '../components/typography'
import { Card, CardBox } from '../components/card'
import { Container, Hero, LineBreak } from '../components/layout'
import { SearchInput, ButtonCta } from '../components/form'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { HexagonContainer, Hexagon } from '../components/hexagon'
import { DataBoltIcon, EducationIcon, MicroscopeIcon } from '../components/icons'

const Carousel = () => {
    const [index, setIndex] = useState(1)

    const handleHover = newIndex => event =>{
        console.log(newIndex)
        setIndex(newIndex)
    }
    
    const carouselImages = [
        'http://picsum.photos/600/300',
        'http://picsum.photos/600/301',
        'http://picsum.photos/600/302',
    ]

    return (
        <Fragment>
            <Hero image={ carouselImages[index] }>
                <Container width="75%" maxWidth="666px">
                    <Heading center style={{ fontSize: '220%' }}>
                        Biomedical Data <em>when</em> you need it and <em>how</em> you need it.
                    </Heading>
                    <Paragraph style={{ lineHeight: 1.25 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sed qui consequatur, voluptatem laudantium odio rerum minima culpa fuga ipsam nobis accusantium tempora non voluptatibus voluptas quibusdam, quia cupiditate. Laborum harum minus, dolorum, dolores maiores iste? Eaque unde veniam quidem molestiae.
                    </Paragraph>
                </Container>
            </Hero>

            <HexagonContainer>
                <Hexagon active={ index === 0 } color="#ccc" icon={ MicroscopeIcon } text="Analysis" hoverHandler={ handleHover(0) } />
                <Hexagon active={ index === 1 } color="var(--color-crimson)" icon={ DataBoltIcon } text="Data" hoverHandler={ handleHover(1) } />
                <Hexagon active={ index === 2 } color="#ccc" icon={ EducationIcon } text="Training" hoverHandler={ handleHover(2) } />
            </HexagonContainer>
        </Fragment>
    )
}

const IndexPage = () => (
    <Layout>
        <Carousel />
        
        <LineBreak count={ 4 } />

        <Container center>
            <SearchInput />
        </Container>
    
        <LineBreak count={ 3 } />

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
