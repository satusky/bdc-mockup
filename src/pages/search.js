import React, { Fragment, useState } from 'react'
//import axios from 'axios'
import { SEO } from '../components/seo'
import { PageContent } from '../components/layout'
import { DbGapSearch } from '../components/form'
import { SearchResultsTable } from '../components/form'
import { Title, Heading, Paragraph } from '../components/typography'
import { Container as Grid, Row, Col} from 'react-grid-system'
import { DeleteIcon } from '../components/icons'
import { ExternalLink } from '../components/link'

const initialQuery = {
    index: 'test',
    query: '',
}

const initialResponse = {
    status: '',
    hits: [],
    message: '',
}

const SearchPage = () => {
    const [query, setQuery] = useState(initialQuery)
    const [results, setResults] = useState(initialResponse)
    const [submitted, setSubmitted] = useState(false)
    const [returned, setReturned] = useState(false)

    const handleChangeQuery = e => setQuery({
        index: 'test',
        query: e.target.value,
    })

    const handleSubmit = e => {
        setResults(initialResponse)
        setSubmitted(true)
        setReturned(false)
        console.log(query)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(query)
        };
        const fetchResults = async () => await fetch("http://search.helx-dev.renci.org:5551/search", requestOptions)
            .then(response => response.json())
            .then(data => setResults({
                status: data.status,
                hits: data.result.hits.hits,
                message: data.message
            }))
            .catch(error => console.log(error));
        fetchResults()
    }

    const variablesReturned = (results) => {
        if (results.hits.length > 0) {
            for (let i = 0; i < results.hits.length; i++) {
                if (results.hits[i]._source.study) {
                    return true;
                    break
                } else {
                    return false;
                }
            }
        } 
    }


    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="Data Search"
                description=""
                keywords=""
            />

            <Title>Search</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea dolorem natus unde aspernatur, rerum excepturi maiores nobis in iusto adipisci, voluptate quod quas fugit voluptatum. Nostrum maiores dignissimos deleniti.
            </Paragraph>

            <DbGapSearch value={ query.query } onChange={ handleChangeQuery } onSubmit={ handleSubmit } />

            <Grid fluid>
                <Row>
                    <Col xs={ 12 } sm={ 10 }>
                        <Heading>
                            Results &nbsp;
                        </Heading>
                    </Col>
                    <Col xs={ 12 } sm={ 2 } style={{ textAlign: 'right' }}>
                        <br/>
                        <button onClick={ () => setResults({initialResponse}), () => setSubmitted(false) } aria-label="Search"><DeleteIcon size={ 32 } fill="var(--color-crimson)" /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { (submitted) && (variablesReturned(results) ? (
                            <SearchResultsTable
                                id="results"
                                data={results.hits.map((listing, index) => {
                                    return (
                                        (listing._source.study) && (
                                          <tr
                                            key={index}
                                            data-item={listing._id}
                                          >
                                            <td data-item={listing._id} data-index={index}>
                                                <h3 id="name">{listing._source.name[0]}</h3>
                                                <table id="nest-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Variable:</td>
                                                            <td>
                                                                <a href={`https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/variable.cgi?study_id=${listing._source.study}&phv=${listing._source.var.slice(3,11)}`}>
                                                                    {listing._source.var}
                                                                </a>
                                                            </td>
                                                            <td>Study:</td>
                                                            <td>{listing._source.study}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                          </tr>
                                        )
                                    );
                                })}
                            />
                        ) : (
                            <h3>No variables found</h3>
                        ))}
                    </Col>
                </Row>
            </Grid>

        </PageContent>
    )
}

export default SearchPage
