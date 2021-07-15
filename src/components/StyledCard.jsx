import styled from "styled-components"

import React from 'react'

function StyledCard() {

const DiveStyled = styled.div`
    border:2px solid red;
    background:#444;
    color:white;
`

const HeaderStyled = styled.h1`
    fontSize:20px;
    color:black;
`


    return (
        <div >
            <DiveStyled>
                <img src="https://img.ltwebstatic.com/images3_pi/2021/01/13/161051628109e6d37a00cae245b79a1556de326559_thumbnail_600x.jpg" width="150" height="150"/>
                <h1>tiger</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum sint, laborum in corporis inventore! </p>
            </DiveStyled>

            
        </div>
    )
}

export default StyledCard
