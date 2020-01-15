import React from 'react'
import styled from 'styled-components'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Heading } from '../typography'
import { Card, CardHeader, CardBody } from '../card'
import { SearchInput } from '../form'

const DataPointWrapper = styled.div`
    // border: 1px solid #f99;
    width: 100%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const DataText = styled.div`
    // border: 1px solid #f99;
    padding: 0.25rem 0;
    color: #fff;
    display: block;
    text-transform: uppercase;
    text-align: center;
`

const DataTitle = styled(DataText)`
    color: var(--color-crimson);
`

const DataCount = styled(DataText)`
    font-weight: bold;
    font-size: 300%;
    @media (min-width: 768px) {
        font-size: 250%;
    }
    color: var(--color-crimson);
`

const DataPoint = ({ title, count }) => {
    return (
        <DataPointWrapper>
            <DataTitle>{ title }</DataTitle>
            <DataCount>{ count }</DataCount>
        </DataPointWrapper>
    )
}

export const DataContainer = () => {
    return (
        <Card elevate={ false }>
            <CardHeader bgColor="transparent" fgColor="var(--color-crimson)" underline>
                Available Data
            </CardHeader>
            <CardBody bgColor="transparent">
                <Grid>
                    <Row>
                        <Col xs={ 6 }>
                            <DataPoint title="Studies" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 6 }>
                            <DataPoint title="Participants" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 6 }>
                            <DataPoint title="Families" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 6 }>
                            <DataPoint title="Samples" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 6 }>
                            <DataPoint title="Files" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 6 }>
                            <DataPoint title="Size" count={ Math.floor(Math.random() * 100) } />
                        </Col>
                        <Col xs={ 12 }>
                            <SearchInput />
                        </Col>
                    </Row>
                </Grid>
            </CardBody>
        </Card>
    )
}

