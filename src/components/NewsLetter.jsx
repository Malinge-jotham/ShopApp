import React from 'react'
import styled from 'styled-components'
import { Send } from '@mui/icons-material'

const Container=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
background-color:#fcf5f5;
flex-direction:column;

`
const Title=styled.h1`
font-size:42px;
margin-bottom:10px;

`
const Desc=styled.div`
font-weight: 300;
margin: 20px;
font-size: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid grey;
`

const Button= styled.button`
flex:1;
background-color:teal;
color:white;
`

const Input= styled.input`
border:none;
flex:8;
padding-left:20px;
`
const NewsLetter = () => {
  return (
    <Container>
      <Title>News letter</Title>
      <Desc>Get timely updates</Desc>
      <InputContainer>
      <Input placeholder='enter your email'/>
      <Button>
        <Send />
      </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
