import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardContainer = styled.div`
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
    height: 100%;
`

const CardHeader = styled.div`
    background-color: var(--color-crimson);
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
    border-bottom: 2px solid #fff;
    position: relative;
`

const CardBody = styled.div`
    padding: 1rem 2rem;
    background-color: ${ props => props.bgColor ? props.bgColor : 'inherit' };
    color: ${ props => props.fgColor ? props.fgColor : 'inherit' };
    height: 100%;
`

const CardTitle = styled.div`
    font-size: 133%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const OffsetCardTitle = styled(CardTitle)`
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1.5rem;
    height: 3rem;
    background-color: #fff;
    color: #333;
    padding: 0.5rem 2rem;
`

export const Card = ({ title, offsetTitle, bgColor, fgColor, children }) => {
    return (
        <CardContainer>
            <CardHeader style={{ height: offsetTitle ? '3rem' : '6rem' }}>
                { offsetTitle ? <OffsetCardTitle>{ title }</OffsetCardTitle> : <CardTitle>{ title }</CardTitle> }
            </CardHeader>
            <CardBody bgColor={ bgColor } fgColor={ fgColor }>
                { children }
            </CardBody>
        </CardContainer>
    )
}

Card.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}
