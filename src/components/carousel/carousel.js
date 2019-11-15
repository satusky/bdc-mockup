import React, { Fragment, useEffect, useRef, useState } from 'react'
import { HexagonContainer, Hexagon } from '../hexagon'
import { Container, Hero } from '../layout'
import { Heading, Paragraph } from '../typography'
import { DataBoltIcon, EducationIcon, MicroscopeIcon } from '../icons'

export const Carousel = () => {
    const [index, setIndex] = useState(1)
    const indexRef = useRef(index)
    indexRef.current = index

    useEffect(() => {
        const timer = setInterval(() => setIndex((indexRef.current + 1) % 3), 3000)
        return () => clearInterval(timer)
    }, [index])

    const handleHover = newIndex => event =>{
        console.log(newIndex)
        setIndex(newIndex)
    }
    
    const carouselImages = [
        'http://picsum.photos/600/300',
        'http://picsum.photos/600/301',
        'http://picsum.photos/600/302',
    ]

    return (
        <Fragment>
            <Hero image={ carouselImages[index] }>
                <Container width="75%" maxWidth="666px">
                    <Heading center style={{ fontSize: '220%' }}>
                        Biomedical Data <em>when</em> you need it and <em>how</em> you need it.
                    </Heading>
                    <Paragraph style={{ lineHeight: 1.25 }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sed qui consequatur, voluptatem laudantium odio rerum minima culpa fuga ipsam nobis accusantium tempora non voluptatibus voluptas quibusdam, quia cupiditate. Laborum harum minus, dolorum, dolores maiores iste? Eaque unde veniam quidem molestiae.
                    </Paragraph>
                </Container>
            </Hero>

            <HexagonContainer>
                <Hexagon active={ index === 0 } color="#ccc" icon={ MicroscopeIcon } text="Analysis" hoverHandler={ handleHover(0) } />
                <Hexagon active={ index === 1 } color="var(--color-crimson)" icon={ DataBoltIcon } text="Data" hoverHandler={ handleHover(1) } />
                <Hexagon active={ index === 2 } color="#ccc" icon={ EducationIcon } text="Training" hoverHandler={ handleHover(2) } />
            </HexagonContainer>
        </Fragment>
    )
}
