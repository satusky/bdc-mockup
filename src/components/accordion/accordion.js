import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const AccordionWrapper = styled.div`
    border: 1px solid #f99;
    display: flex;
    flex-direction: column;
`

const AccordionTitle = styled.span`
    font-weight: bold;
    font-size: 120%;
    padding: 1rem;
    cursor: pointer;
    background-color: #eee;
    color: ${ props => props.active ? 'var(--color-crimson)' : '#333' };
    transition: background-color 250ms, color 500ms;
    &:hover {
        background-color: #ddd;
    }
`

const AccordionBody = styled.div`
    overflow: hidden;
    transition: ${ props => props.active
        ? `max-height 250ms ease, opacity 500ms 250ms`
        : `max-height 500ms ease 250ms, opacity 500ms`
    };
    max-height: ${ props => props.height }px;
    opacity: ${ props => props.active ? 1 : 0 };
`
const AccordionContents = styled.div`
    margin: 2rem;
`

export const Accordion = ({ title, content, children }) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState(0)
    const contentElement = useRef(null)

    const handleToggle = () => {
        setActive(!active)
    }

    useEffect(() => {
        setHeight(active ? contentElement.current.scrollHeight : 0)
    }, [active])

    return (
        <AccordionWrapper>
            <AccordionTitle onClick={ handleToggle } active={ active }>
                { title }
            </AccordionTitle>
            <AccordionBody ref={ contentElement } active={ active } height={ height }>
                <AccordionContents>
                    { children }
                </AccordionContents>
            </AccordionBody>
        </AccordionWrapper>
    )
}
