import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { SEO } from '../components/seo'
import { Link } from 'gatsby'
import { PageContent, LineBreak } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'
import { List, ListItem } from '../components/list'
import { Accordion } from '../components/accordion'
import { ExternalLink } from '../components/link'

const FRESHDESK_FAQS_CATEGORY_ID = '60000157358'

const options =  {
    headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.GATSBY_FRESHDESK_API_KEY,
    }
}

const FaqPage = () => {
    const [folders, setFolders] = useState()

    useEffect(() => {
        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }
        const fetchArticles = async () => {
            await axios.get(`${ process.env.GATSBY_FRESHDESK_API_ROOT }/solutions/categories/${ FRESHDESK_FAQS_CATEGORY_ID }/folders`, options)
                .then(response => {
                    const folders = response.data
                    const articlePromises = folders.map(folder => axios.get(`${ process.env.GATSBY_FRESHDESK_API_ROOT }/solutions/folders/${ folder.id }/articles`, options)
                        .then(response => {
                            folder.articles = response.data
                            return folder
                        })
                    )
                    Promise.all(articlePromises)
                        .then(responses => setFolders(responses))
                })
                .catch(error => console.error(error))
        }
        fetchArticles()
    }, [])

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="Frequently Asked Questions"
                description=""
                keywords=""
            />
        
            <Title>Frequently Asked Questions</Title>

            <Paragraph>
                This page includes collections of answers to our most Frequently Asked Questions. 
            </Paragraph>

            {
                folders && folders.map(folder => {
                    return (
                        <Card key={ folder.id }>
                            <CardHeader>{ folder.name }</CardHeader>
                            <CardBody>
                                <Paragraph noMargin>{ folder.description }</Paragraph>
                            </CardBody>
                            {
                                folder.articles ? (
                                    <CardBody style={{ padding: '1rem 0' }}>
                                        {
                                            folder.articles.map(article => (
                                                <Accordion key={ article.id } title={ article.title }>
                                                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                                                </Accordion>
                                            ))
                                        }
                                    </CardBody>
                                ) : <CardBody>Loading...</CardBody>
                            }
                        </Card>
                    )
                })
            }
            
            <Heading>Still have questions?</Heading>

            <Paragraph>
                If unanswered questions remain, view our complete <ExternalLink to="https://bdcatalyst.freshdesk.com/">Knowledge Base</ExternalLink> or submit a <Link to="/contact">help request</Link> to receive assistance.
            </Paragraph>

            <LineBreak count={ 2 } />
        </PageContent>
    )
}

export default FaqPage
