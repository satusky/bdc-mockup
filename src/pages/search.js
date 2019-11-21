import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { PageContent } from '../components/layout'
import { MonarchSearch } from '../components/form'
import { Title, Heading, Paragraph } from '../components/typography'
import { LineBreak } from '../components/layout'
import { Container as Grid, Row, Col} from 'react-grid-system'
import { DeleteIcon } from '../components/icons'

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [rows, setRow] = useState(10)
    const [start, setStart] = useState(0)
    const handleChangeQuery = e => setQuery(e.target.value)

    const handleSubmit = e => {
        console.log('Searching...')
        var params = new URLSearchParams()
        params.append('rows', rows)
        params.append('start', start)
        params.append('highlight_class', 'hilite')
        params.append('boost_q', 'category:genotype%5E-10')
        params.append('prefix', 'HP')
        params.append('prefix', 'MONDO')
        params.append('prefix', 'EFO')
        params.append('prefix', 'OBA')
        params.append('prefix', 'NCIT')
        params.append('prefix', '-OMIA')
        const fetchResults = async () => await axios.get(`https://api-dev.monarchinitiative.org/api/search/entity/autocomplete/${ query }`, {
            params: params
        }).then(response => {
                console.log(response.data)
                setResults(response.data.docs)
            })
            .catch(error => console.error(error))
       fetchResults()
    }

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>

            <Title>Search</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea dolorem natus unde aspernatur, rerum excepturi maiores nobis in iusto adipisci, voluptate quod quas fugit voluptatum. Nostrum maiores dignissimos deleniti.
            </Paragraph>

            <input type="number" value={ 500 } />
            
            <MonarchSearch value={ query } onChange={ handleChangeQuery } onSubmit={ handleSubmit } />

            <Grid fluid>
                <Row>
                    <Col xs={ 12 } sm={ 10 }>
                        <Heading>
                            Results {
                                results.length > 0 && <span>({ start + 1 } - { start + 1 + results.length })</span>
                            }
                        </Heading>
                    </Col>
                    <Col xs={ 12 } sm={ 2 }>
                        <br/>
                        <button onClick={ () => setResults([]) }><DeleteIcon size={ 32 } fill="var(--color-crimson)" /></button>
                    </Col>
                </Row>
            </Grid>

            <pre style={{ backgroundColor: '#ccc', overflowX: 'hidden' }}>
                { JSON.stringify(results.map(({ id }) => id), null, 2) }
            </pre>

        </PageContent>
    )
}

export default SearchPage
