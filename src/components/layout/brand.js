import React from 'react'
import bdcLogo from '../../images/bdc-logo.svg'
import bdcLogoWhite from '../../images/bdc-logo-white.svg'

export const Brand = ({ white = false }) => {
    return <img src={ white ? bdcLogoWhite : bdcLogo } height="60" alt="BioData Catalyst logo"/>
}