import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Title } from '../typography'

const Border = styled.div`
    filter: drop-shadow(0 0.5rem 0 var(--color-crimson));
`

const HeroWrapper = styled.div`
    // & * { border: 1px solid #f99; }
    height: 30vw;
    min-height: 400px;
    max-height: 500px;
    position: relative;
    margin-bottom: 4rem;
    ${ props => props.clipped ? 'clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% calc(100% - 10vw));' : undefined }
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
    left: 0;
    top: 0;
    height: calc(100% - 3rem);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

Overlay.propTypes = {
    children: PropTypes.node.isRequired,
}

const HeroText = styled(Title)`
    color: #fff;
    font-size: 200%;
    @media (min-width: 600px) {
        font-size: 300%;
    }
    width: 45%;
    max-width: 600px;
    text-align: center;
`

HeroText.propTypes = {
    children: PropTypes.node.isRequired,
}

export const Hero = ({ clipped, title, backgroundColor, backgroundImage }) => {
    return (
        <Border>
            <HeroWrapper clipped={ clipped } backgroundColor={ backgroundColor } backgroundImage={ backgroundImage }>
                <Overlay>
                    <HeroText>{ title }</HeroText>
                </Overlay>
            </HeroWrapper>
        </Border>
    )
}
