import React, { Fragment, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { HexMenu, Hexagon } from './hex-menu'
import { BoxMenu, BoxMenuItem } from './box-menu'
import { HexHeadings, HexHeadingText } from './hex-headings'
import { DataBoltIcon, EducationIcon, ToolsIcon, ByodIcon } from '../../icons'
import { useWindowWidth } from '../../../hooks'
import { Visible } from 'react-grid-system'

const INTERVAL = 5 * 1000
const carouselItems = [
    {
        text: 'Tools',
        description: 'Take control of your data with customizable tools and workflows',
        icon: ToolsIcon,
        path: '/resources/tools',
    },
    {
        text: 'Data',
        description: 'Access biomedical data when you need it and how you need it',
        icon: DataBoltIcon,
        path: '/resources/data',
    },
    {
        text: 'Learn',
        description: 'Get the support you need to explore, analyze, and discover',
        icon: EducationIcon,
        path: '/resources/training',
    },
    {
        text: 'BYOD',
        description: 'Get the support you need to explore, analyze, and discover',
        icon: ByodIcon,
        path: '/resources/byod',
    },
]

const CarouselWrapper = styled.div`
    // border: 1px solid #f99; * { border: 1px solid #99f; }
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -10rem;
    height: 400px;
    @media(max-width: 992px) {
        align-items: flex-end;
    }
    position: relative;
`

export const Carousel = ({ style }) => {
    const [index, setIndex] = useState(1)
    const indexRef = useRef(index)
    indexRef.current = index
    const { isCompact } = useWindowWidth()

    useEffect(() => {
        const timer = setInterval(() => setIndex((indexRef.current + 1) % carouselItems.length), INTERVAL)
        return () => clearInterval(timer)
    }, [index])

    const handleHover = newIndex => event => setIndex(newIndex)
    
    return (
        <Fragment>
            <Visible xs sm md>
                <BoxMenu>
                    {
                        carouselItems.map((tab, i) => (
                            <BoxMenuItem
                                key={ i }
                                path={ tab.path }
                                text={ tab.text }
                                icon={ tab.icon }
                            />
                        ))
                    }
                </BoxMenu>
            </Visible>
            <Visible lg xl>
                <CarouselWrapper>
                    <HexHeadings>
                        { carouselItems.map((item, i) => <HexHeadingText key={ i } active={ index === i } text={ item.description } />) }
                    </HexHeadings>
                    <HexMenu>
                        {
                            carouselItems.map((tab, i) => (
                                <Hexagon
                                    key={ i }
                                    path={ tab.path }
                                    active={ index === i }
                                    size={ 180 }
                                    growOnActive={ !isCompact }
                                    showtext={ !isCompact }
                                    text={ tab.text }
                                    icon={ tab.icon }
                                    hoverHandler={ handleHover(i) }
                                />
                            ))
                        }
                    </HexMenu>
                </CarouselWrapper>
            </Visible>
        </Fragment>
    )
}
