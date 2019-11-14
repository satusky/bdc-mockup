import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Input } from './input'

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
    right: 0;
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

const SearchIcon = () => {
    return (
        <svg fill="#666" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
    )
}

export const SearchInput = () => {
    return (
        <SearchContainer>
            <TextInput placeholder="Search" />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </SearchContainer>
    )
}