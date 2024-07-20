import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image= styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Button = styled.button`
border:none;
background-color:white;
padding:10px;
cursor:pointer;
font-weight:500;
color:green;
`
const Title= styled.h1`
color:white;
margin-bottom:20px;
`
const Info= styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
flex-direction:column;
display:flex;
align-items:center;
justify-content:center;

`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
        <Info>

<Title>{item.title}</Title>
<Button>shop now</Button>
</Info>
    </Container>
  )
}

export default CategoryItem
