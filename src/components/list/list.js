import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const UnorderedList = styled.ul`
    list-style-type: none;
    margin: 0 0 2rem 0;
    padding: 0;
`

export const ListTitle = styled.h4`
`

export const ListItemContainer = styled.li`
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    line-height: 1.25;
`

const PrimaryText = styled.span`
    display: block;
`

const SecondaryText = styled.span`
    display: block;
    font-size: 90%;
`

export const ListItem = ({ primary, secondary }) => {
    return (
        <ListItemContainer>
            <PrimaryText>{ primary }</PrimaryText>
            { secondary && <SecondaryText>{ secondary }</SecondaryText> }
        </ListItemContainer>
    )
}

ListItem.propTypes = {
    primary: PropTypes.node.isRequired,
    secondary: PropTypes.node,
}

export const List = ({ children }) => {
    return (
        <UnorderedList>
            { children }
        </UnorderedList>
    )
}

List.propTypes = {
    children: PropTypes.node.isRequired,
}