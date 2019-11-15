import React from 'react'
import { DefaultLayout as Layout } from '../layouts'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { Accordion } from '../components/accordion'

const FaqPage = () => {
    return (
        <Layout>
            <Container width="95%" maxWidth="1080px" center>
            
                <Title>Frequently Asked Questions</Title>
                
                <Accordion title="Who lorem ipsum?">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse harum quam, quod natus vel iure eum, consequuntur autem ut sapiente quas expedita eveniet aspernatur voluptas soluta, molestiae doloribus dolorum.
                    </Paragraph>
                </Accordion>
                
                <Accordion title="What lorem ipsum dolor?">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sit ipsum assumenda aspernatur similique, culpa, quae odio, necessitatibus fugit consequatur, accusantium! Aliquam in earum laboriosam, facilis? Itaque, perferendis nihil dicta, ducimus architecto cupiditate maiores.
                    </Paragraph>
                </Accordion>
                
                <Accordion title="Where lorem?">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio labore quae, incidunt rem accusantium minima ab provident odio ipsum sit pariatur, qui molestiae quaerat repudiandae ad eum itaque veniam doloribus, nemo magni dolore cupiditate. Reiciendis quasi, pariatur placeat, maiores asperiores quas esse possimus quae vitae reprehenderit, laudantium! Illum pariatur magnam fuga reprehenderit vel ea voluptatum veniam, reiciendis necessitatibus mollitia? Vitae, iure vero. Vel commodi sequi consequatur alias vitae est accusamus illo velit, et, at ab quam expedita nisi iusto. Architecto hic, earum sapiente magnam praesentium ab illo temporibus nemo. Vero quaerat quisquam explicabo, nostrum nam! Autem, fugit. Nulla sed, vero mollitia doloribus nesciunt. Ipsam, placeat eaque temporibus dolore repellendus, magnam eligendi hic nemo, optio rerum beatae debitis iusto. Culpa ipsa impedit distinctio perferendis ipsum recusandae doloremque? Nam numquam ipsa quod rerum commodi atque tenetur, cupiditate cumque veniam ipsam neque culpa expedita porro sint odit, obcaecati eligendi nulla facere id dolore ratione, aspernatur accusantium. Doloremque pariatur nihil quae harum error earum dolores, nesciunt, quas sint at modi expedita commodi suscipit fugit rerum a. Dolores asperiores doloribus cum pariatur unde iure eius, et nostrum dicta, amet, consequatur suscipit in ab, porro. Dolore dignissimos totam error esse deserunt perferendis ipsa numquam odit maxime doloremque odio aliquam quia, incidunt ad earum, veritatis! Labore voluptatibus enim similique, hic minima deleniti, libero in! Distinctio, magni.
                    </Paragraph>
                </Accordion>
                
                <Accordion title="Why lorem ipsum dolor sit?">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio labore quae, incidunt rem accusantium minima ab provident odio ipsum sit pariatur, qui molestiae quaerat repudiandae ad eum itaque veniam doloribus, nemo magni dolore cupiditate. Reiciendis quasi, pariatur placeat, maiores asperiores quas esse possimus quae vitae reprehenderit, laudantium! Illum pariatur magnam fuga reprehenderit vel ea voluptatum veniam, reiciendis necessitatibus mollitia? Vitae, iure vero. Vel commodi sequi consequatur alias vitae est accusamus illo velit, et, at ab quam expedita nisi iusto. Architecto hic, earum sapiente magnam praesentium ab illo temporibus nemo. Vero quaerat quisquam explicabo, nostrum nam! Autem, fugit. Nulla sed, vero mollitia doloribus nesciunt. Ipsam, placeat eaque temporibus dolore repellendus, magnam eligendi hic nemo, optio rerum beatae debitis iusto. Culpa ipsa impedit distinctio perferendis ipsum recusandae doloremque? Nam numquam ipsa quod rerum commodi atque tenetur, cupiditate cumque veniam ipsam neque culpa expedita porro sint odit, obcaecati eligendi nulla facere id dolore ratione, aspernatur accusantium. Doloremque pariatur nihil quae harum error earum dolores, nesciunt, quas sint at modi expedita commodi suscipit fugit rerum a. Dolores asperiores doloribus cum pariatur unde iure eius, et nostrum dicta, amet, consequatur suscipit in ab, porro. Dolore dignissimos totam error esse deserunt perferendis ipsa numquam odit maxime doloremque odio aliquam quia, incidunt ad earum, veritatis! Labore voluptatibus enim similique, hic minima deleniti, libero in! Distinctio, magni.
                    </Paragraph>
                </Accordion>

                <Accordion title="How lorem ipsum dolor?">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam asperiores dolore, magnam, atque necessitatibus quo aspernatur cupiditate dolorem deleniti autem iure facere molestias maxime itaque. Eius adipisci aut, eligendi ipsam!
                    </Paragraph>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nam odit aspernatur!
                    </Paragraph>
                </Accordion>

            </Container>
        </Layout>
    )
}

export default FaqPage
