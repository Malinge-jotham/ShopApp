import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
background-color:teal;
color:white;
height:25px;
fw:500;
display:flex;
align-items:center;
justify-content:center;
`
function Annoucemments() {
  return (
    <Container>
        free delivery on order above $50 
    </Container>
  )
}

export default Annoucemments