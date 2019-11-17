import React from 'react'
import { DefaultLayout as Layout } from '../layouts'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'

const AboutPage = () => (
    <Layout>
        <Container width="95%" maxWidth="1080px" center>

            <Title>About</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui alias, perspiciatis placeat enim repellendus. Ipsam, voluptates magnam provident et unde quis alias eaque!
            </Paragraph>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus, minima cumque autem ratione voluptate officia possimus tempore nisi, recusandae tenetur itaque eveniet qui! Ipsam facilis, et, ab error fugit libero consectetur vero eius ipsum, a corporis debitis hic dicta labore autem veniam, sed beatae! Atque numquam sit quis eligendi reiciendis velit magni corporis modi facere! Vero maiores veritatis beatae, aspernatur mollitia aperiam in odio non magnam cum possimus ipsa minus a nostrum dolorum, assumenda sit adipisci quo fuga perspiciatis praesentium quae voluptate sed molestias. Nulla molestiae quidem, assumenda. Nulla iste, omnis ab dolore mollitia quisquam accusantium voluptas magnam.
            </Paragraph>
        </Container>
    </Layout>
)

export default AboutPage
