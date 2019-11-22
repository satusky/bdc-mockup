import React from 'react'
import { Link } from 'gatsby'
import { PageContent } from '../../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../../components/typography'

const TrainingPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>

        <Title>Training</Title>

        <Heading>Documentation</Heading>

        <Paragraph>
            Find step by step instructions on how to use BioData Catalyst services and tools.
        </Paragraph>

        <Subheading>Team-Specific Support</Subheading>

        <ul>
            <li>Gen3</li>
            <li>Terra</li>
            <li>Etc.</li>
        </ul>

        <Heading>Services & Tools</Heading>

        <Paragraph>
            Learn about the different services and tools in BioData Catalyst and what you can do with them.
        </Paragraph>

        <div>Possibly render matrix of Tools &times; Abilities</div>

        <Heading>FAQs</Heading>
        <Paragraph>
            Browse our answers to <Link to="/faq">frequently asked questions</Link> from BioData Catalyst users.
        </Paragraph>

        <Heading>Videos</Heading>
        <Paragraph>
            View BioData Catalyst team webinars, workshops, and how-to videos.
        </Paragraph>

        <Heading>Blog Posts & Tutorials</Heading>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cum dolorum officia minus consequuntur rem odit adipisci assumenda doloremque in repellat dicta nesciunt facere deleniti omnis, quibusdam, voluptate ullam, cumque.
        </Paragraph>
        
        <Title>Get Assistance</Title>

        <Heading>Help Desk</Heading>
        <Paragraph>
            Are you seeking help on working with BioData Catalyst? <Link to="/">Connect with our Support Team now</Link>!
        </Paragraph>

        <Heading>Follow Us</Heading>
        <Paragraph>
            Tweet at us @bcd_help or twwet with hashtag bcdhelp or something
        </Paragraph>
    </PageContent>
)

export default TrainingPage
