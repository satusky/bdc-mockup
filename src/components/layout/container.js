import styled from 'styled-components'

export const Container = styled.div`
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    ${ props => props.center ? 'margin: auto;' : undefined }
`