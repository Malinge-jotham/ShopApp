import Product from './Product'
import {popularProducts} from "../data"
import styled from 'styled-components'

const Container=styled.div`
padding:20px;
display:flex;
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Products
