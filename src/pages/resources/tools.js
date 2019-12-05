import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Button } from '../../components/buttons'
import { Card, CardHeader, CardBody } from '../../components/card'

const ToolsPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Available Tools"
            description=""
            keywords=""
        />

        <Title>Tools & Analysis</Title>
        
        <Paragraph>
            Coming soon...
        </Paragraph>

    </PageContent>
)

export default ToolsPage
