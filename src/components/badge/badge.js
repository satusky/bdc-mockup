import styled from 'styled-components'

export const Badge = styled.span`
    background-color: #fff;
    color: #666;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    font-weight: 700;
    padding: 0.5rem;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    margin: 0;
    ${ props => props.margin && `margin: ${ props.margin };` }
`