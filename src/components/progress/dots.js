import React from 'react'
import styled, { keyframes } from 'styled-components'

const throb = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
`

const glow = keyframes`
    0% {
        opacity: 0.6;
    }
    50% {
        opacity: 0.85;
    }
    100% {
        opacity: 0.6;
    }
`

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Tray = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Dot = styled.div`
    background-color: ${ props => props.color || '#333' };
    margin: 0.75rem;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    animation: ${ throb } 1500ms ease-out infinite;
    &:nth-child(1) { animation-delay: 0ms; }
    &:nth-child(2) { animation-delay: 250ms; }
    &:nth-child(3) { animation-delay: 500ms; }
`

const LoadingText = styled.div`
    // font-weight: bold;
    text-align: center;
    color: ${ props => props.color || '#333' };
    opacity: 0.75;
    animation: ${ glow } 1500ms ease-out infinite;
`

export const Dots = ({ color }) => (
    <Wrapper>
        <Tray>
            <Dot color={ color } />
            <Dot color={ color } />
            <Dot color={ color } />
        </Tray>
        <LoadingText color={ color }>Loading...</LoadingText>
    </Wrapper>
)