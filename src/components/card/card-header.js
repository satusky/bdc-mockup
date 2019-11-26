import PropTypes from 'prop-types'
import styled from 'styled-components'

export const CardHeader = styled.div`
    color: ${ props => props.fgColor ? props.fgColor : 'inherit' };
    background-color: ${ props => props.bgColor ? props.bgColor : 'inherit' };
    font-weight: bold;
    text-align: center;
    padding: 2rem 18%;
    border-bottom: 2px solid #fff;
    position: relative;
`

CardHeader.propTypes = {
    fgColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
}

CardHeader.defaultProps = {
    fgColor: '#fff',
    bgColor: 'var(--color-crimson)',
}

