import React, { useState } from 'react'
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
    returned: false,
}

const SearchPage = () => {
    const [query, setQuery] = useState(initialQuery)
    const [results, setResults] = useState(initialResponse)
    const [submitted, setSubmitted] = useState(false)

    const handleChangeQuery = e => setQuery({
        index: 'test',
        query: e.target.value,
    })

    const handleSubmit = e => {
        setResults(initialResponse)
        setSubmitted(false)
        console.log(query)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query)
        };
        const fetchResults = async () => await fetch("http://search.helx-dev.renci.org:5551/search", requestOptions)
            .then(response => response.json())
            .then(data => {
                const varResults = data.result.hits.hits.filter((hit) => (hit._source.study && hit._source.name[0] != '')).map((listing, index) => {
                    [, listing._source.variableDigits] = listing._source.var.match(/^phv(\d+)\.v\d+\.p\d+$/);
                    return listing
                });
                const varReturned = (varResults.length > 0) ? (true) : (false);
                setResults({
                    status: data.status,
                    hits: varResults,
                    message: data.message,
                    returned: varReturned
                });
                setSubmitted(true);
            })
            .catch(error => console.log(error));
        fetchResults()
    }

    console.log(results)

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
                        <button onClick={ () => setResults(initialResponse), () => setSubmitted(false) } aria-label="Search"><DeleteIcon size={ 32 } fill="var(--color-crimson)" /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { submitted && ((results.returned) ? (
                            <SearchResultsTable
                                id="results"
                                data={ results.hits.map((listing, index) => {
                                    const variableLink =`https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/variable.cgi?study_id=${ listing._source.study }&phv=${ listing._source.variableDigits }`
                                    return (
                                          <tr
                                            key={ index }
                                            data-item={ listing._id }
                                          >
                                            <td data-item={ listing._id } data-index={ index }>
                                                <h3 id="name">{ listing._source.name[0] }</h3>
                                                <table id="nest-table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Variable:</td>
                                                            <td>
                                                                <ExternalLink to={ variableLink }>
                                                                        { listing._source.var }
                                                                </ExternalLink>
                                                            </td>
                                                            <td>Study:</td>
                                                            <td>{ listing._source.study }</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                          </tr>
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
