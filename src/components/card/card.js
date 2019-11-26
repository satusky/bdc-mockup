import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useWindowWidth } from '../../hooks'

const CardContainer = styled.div`
    overflow: hidden;
    border-radius: 2rem;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
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
    width: 75%;
`

export const Card = ({ children }) => {
    const { isCompact } = useWindowWidth()
    
    return (
        <CardContainer>
            { children }
        </CardContainer>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}
