import React, { Fragment, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Hexagon } from './hexagon'
import { Container } from '../../layout'
import { Heading, Paragraph } from '../../typography'
import { DataBoltIcon, EducationIcon, MicroscopeIcon } from '../../icons'

export const SlideDeckContainer = styled(Container)`
    padding: 3rem;
    min-height: 400px;
    position: relative;
`

const INTERVAL = 5 * 1000

const carouselImages = [
    'http://picsum.photos/600/300',
    'http://picsum.photos/600/301',
    'http://picsum.photos/600/302',
]

export const Slide = styled.div`
    color: #ddd;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: ${ props => props.active ? 'opacity 1000ms' : 'opacity 1000ms' };
    opacity: ${ props => props.active ? 1 : 0 };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--color-eggplant);
        background-image: url(${ props => props.backgroundImage });
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        filter: brightness(2.5);
        z-index: -1;
    }
`

const SlideText = styled(Container)`
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

export const TabsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 270px;
    margin: -4rem 0 0 0;
`

export const Carousel = () => {
    const [index, setIndex] = useState(1)
    const indexRef = useRef(index)
    indexRef.current = index

    useEffect(() => {
        const timer = setInterval(() => setIndex((indexRef.current + 1) % carouselImages.length), INTERVAL)
        return () => clearInterval(timer)
    }, [index])

    const handleHover = newIndex => event =>{
        console.log(newIndex)
        setIndex(newIndex)
    }
    
    return (
        <Fragment>
            <SlideDeckContainer>
                <Slide backgroundImage={ carouselImages[0] } active={ index === 0 }>
                    <SlideText width="75%" maxWidth="666px" active={ index === 0 }>
                        <Heading center style={{ fontSize: '220%' }}>
                            Biomedical Data <em>when</em> you need it and <em>how</em> you need it.
                        </Heading>
                        <Paragraph style={{ lineHeight: 1.25 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sed qui consequatur, voluptatem laudantium odio rerum minima culpa fuga ipsam nobis accusantium tempora non voluptatibus voluptas quibusdam, quia cupiditate. Laborum harum minus, dolorum, dolores maiores iste? Eaque unde veniam quidem molestiae.
                        </Paragraph>
                    </SlideText>
                </Slide>
                <Slide backgroundImage={ carouselImages[1] } active={ index === 1 }>
                    <SlideText width="75%" maxWidth="700px" active={ index === 1 }>
                        <Heading center style={{ fontSize: '220%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Heading>
                        <Paragraph style={{ lineHeight: 1.25 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eveniet.
                        </Paragraph>
                        <Paragraph style={{ lineHeight: 1.25 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nulla id itaque, impedit possimus.
                        </Paragraph>
                    </SlideText>
                </Slide>
                <Slide backgroundImage={ carouselImages[2] } active={ index === 2 }>
                    <SlideText width="75%" maxWidth="800px" active={ index === 2 }>
                        <Heading center style={{ fontSize: '220%' }}>
                            Lorem ipsum dolor sit amet.
                        </Heading>
                        <Paragraph style={{ lineHeight: 1.25 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia odio quos quibusdam architecto atque maxime omnis expedita consequuntur ratione ut illo blanditiis, illum repellendus natus eos provident molestiae nostrum ex nihil ad soluta quod.
                        </Paragraph>
                    </SlideText>
                </Slide>
            </SlideDeckContainer>

            <TabsContainer>
                <Hexagon active={ index === 0 } color="#ccc" icon={ MicroscopeIcon } text="Analysis" hoverHandler={ handleHover(0) } />
                <Hexagon active={ index === 1 } color="var(--color-crimson)" icon={ DataBoltIcon } text="Data" hoverHandler={ handleHover(1) } />
                <Hexagon active={ index === 2 } color="#ccc" icon={ EducationIcon } text="Training" hoverHandler={ handleHover(2) } />
            </TabsContainer>
        </Fragment>
    )
}
