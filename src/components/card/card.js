import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Card = styled.div`
    overflow: hidden;
    ${ props => props.elevate && `box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.25);` }
    margin-bottom: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
`

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevate: PropTypes.bool.isRequired,
}

Card.defaultProps = {
    elevate: true,
}