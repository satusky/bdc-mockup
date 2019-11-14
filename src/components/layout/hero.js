import styled from 'styled-components'

export const Hero = styled.div`
    color: #ddd;
    padding: 3rem;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: var(--color-eggplant);
        background-image: url(${ props => props.image });
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        filter: brightness(2.5);
        z-index: -1;
    }
`