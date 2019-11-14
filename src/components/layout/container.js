import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #f99;
    width: ${ props => props.width || '100%' };
    max-width: ${ props => props.maxWidth || '100%' };
    ${ props => props.center ? 'margin: auto;' : undefined }
`