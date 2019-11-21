import React from 'react'
import styled from 'styled-components'
import { Input } from './input'
import { MagnifyingGlassIcon } from '../icons'

const SearchContainer = styled.div`
    // border: 1px solid #f99;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 90%;
    max-width: 500px;
    height: 3.1rem;
    z-index: 1;
    margin: auto;
    &:hover svg {
        fill: #333;
    }
`

const TextInput = styled(Input)`
    flex: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 0 1.5rem;
`

const SearchButton = styled.button`
    border: 0;
    position: absolute;
    right: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    z-index: 2;
    cursor: pointer;
    svg {
        transition: fill 250ms;
    }
`

export const MonarchSearch = () => {
    return (
        <SearchContainer>
            <TextInput placeholder="Monarch Search" />
            <SearchButton>
                <MagnifyingGlassIcon size="30" fill="#999" />
            </SearchButton>
        </SearchContainer>
    )
}