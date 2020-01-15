import React from 'react'
import styled from 'styled-components'
import { Heading } from '../../typography'

export const HexHeadings = styled.div`
    flex: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    transform: translate(0, 0);
`

const HexHeadingTextWrapper = styled(Heading).attrs({ center: true })`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    margin: 0;
    font-size: 220%;
    color: var(--color-crimson);
    font-weight: 900;
    ${
        props => props.active ? `
            transition: transform 500ms ease-out 100ms, opacity 500ms;
            opacity: 1;
            transform: scale(1);
        ` : `
            transition: transform 500ms 250ms, opacity 1000ms;
            opacity: 0;
            transform: scale(0.90);
        `
    }
`

export const HexHeadingText = ({ text, active }) => {
    return (
        <HexHeadingTextWrapper active={ active }>
            { text }
        </HexHeadingTextWrapper>
    )
}
