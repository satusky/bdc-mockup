import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeroWrapper = styled.div`
    height: 600px;
    position: relative;
    margin-bottom: 4rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${ props => props.backgroundColor };
        background-image: url(${ props => props.backgroundImage });
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        filter: brightness(1.5);
    }
`

HeroWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
}

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
}

const Title = styled.h1`
    display: inline-block;
    background-color: var(--color-crimson);
    clip-path: polygon(0% 50%, 1rem 0%, calc(100% - 1rem) 0%, 100% 50%, calc(100% - 1rem) 100%, 1rem 100%, 0% 50%);
    color: #fff;
    line-height: 4rem;
    padding: 0 3rem;
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

const TitleWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 2, 0.15));
    text-align: center;
`

TitleWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Hero = ({ backgroundColor, backgroundImage, overlay, title }) => {
    return (
        <HeroWrapper backgroundColor={ backgroundColor } backgroundImage={ backgroundImage }>
            <Overlay>
                { overlay }
            </Overlay>
            <TitleWrapper><Title>{ title }</Title></TitleWrapper>
        </HeroWrapper>
    )
}
