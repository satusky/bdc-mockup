import React from 'react'
import styled from 'styled-components'

export const HexagonWrapper = styled.div`
    filter: drop-shadow(0 0 16px rgba(0, 0, 2, 0.15));
    &:nth-child(4n - 1) {
        transform: translate(-15%, 55%);
    }
    &:nth-child(4n + 1) {
        transform: translate(15%, 55%);
    }
`

export const HexagonInterior = styled.div`
    width: 200px;
    height: 173px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    // width: 173px; height: 200px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); // 30 deg rotation
    background-color: ${ props => props.color || '#ecc' };
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background-color 500ms, transform 500ms ease-out;
    transform: scale(${ props => props.active ? 1.05 : 1 });
    cursor: pointer;
`

const HexagonText = styled.span`
    text-transform: uppercase;
    margin-top: 1rem;
`

export const Hexagon = ({ color, active, icon, text, hoverHandler }) => {
    const Icon = icon
    return (
        <HexagonWrapper>
            <HexagonInterior active={ active } color={ active ? 'var(--color-crimson)' : '#dcc' } onMouseOver={ hoverHandler }>
                <Icon size="60" />
                <HexagonText>{ text }</HexagonText>
            </HexagonInterior>
        </HexagonWrapper>
    )
}