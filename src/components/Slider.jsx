import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
//import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper= styled.div`
height:100%;


`
const Slide= styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImageContainer= styled.div`
height:100px;
flex:1;

`
const InfoContainer= styled.div`
`

const Image = styled.img`
  height: 80%;
`;



const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
      <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <ImageContainer>
            <Image src="shopapp\public\Assets\girl.jpg" alt=''/>
        </ImageContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow direction='right'>
      <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slide