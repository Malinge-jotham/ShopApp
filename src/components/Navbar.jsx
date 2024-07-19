//import {Search} from '@material-ui/icons'
import { Search, ShoppingCartOutlined} from "@mui/icons-material"
import { Badge } from "@mui/material"


import styled from 'styled-components'

const Container= styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px  20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Language= styled.span`
cursor:pointer;
font-sixe:14px;

`
const SearchContainer=styled.div`
border:0.1px solid lightgrey;
dispalay:flex;
align-items:center;
margin-left:25px;
padding:10px;

`
const Left= styled.div`
flex:1;
display:flex;
`
const  Right= styled.div`
 flex:1;    
 justify-content:flex-end;
 display:flex;
 align-items:center;  
 margin-left:25px;
 
 `
const Center= styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight:bold;

`
const Menuitem= styled.div`
font-size:14px;

`
function Navbar() {
  return (
    <Container>
    <Wrapper>
      <Left>
<Language>EN</Language>
<SearchContainer>
  <input/>
  <Search style={{color:'blue',fontSize:18}}/>
  </SearchContainer>
      </Left>
      <Center>
        <Logo>TINEGA</Logo>
      </Center>
      <Right>
        <Menuitem>Register</Menuitem>
        <Menuitem>Sign-in</Menuitem>
        <Menuitem>
        <Badge  badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge></Menuitem>
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
