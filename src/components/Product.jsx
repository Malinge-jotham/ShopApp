import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Info=styled.div`
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
align-items:center;
justify-content:center;
display:flex;
transition:all 0.5s ease;
cursor:pointer;
opacity:0;
`

const Container= styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
opacity:1;
}
`
const Cirle=styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;

`
const Image=styled.img`
height:75%;
z-index:2;
`


const Icon=styled.div`

width:40px;
height:40PX;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
border-radius:50%;
margin: 5px;


transition:all o.5s ease;
&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
}
`

function Product({item}) {
  return (
    <Container>
        <Cirle />
        <Image src={item.img}/>
        <Info>
        <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            
        </Info>
    </Container>
  )
}

export default Product