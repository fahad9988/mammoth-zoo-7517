import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getMensData } from '../../redux/MensWomens/actions'
import { Flex,Box,Grid, GridItem,SimpleGrid,VStack,HStack, Center, CheckboxGroup, Stack, Checkbox, Heading } from '@chakra-ui/react'
import MensCard from './MensCard'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FilterandSort from './FilterandSort'
import Pagination from './Pagination'
const Mens = () => {
   const [brand,setBrand]=useState([])
   const [page,setPage]=useState(Number(1))
   const [val,setVal]=useState(true)
    const products=useSelector((store)=>store.mens.products.data)
    const activePage=useSelector((store)=>store.mens.activePage)
    const perPage=useSelector((store)=>store.mens.perPage)
    const dispatch=useDispatch()
    const location=useLocation()
    //const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    
console.log("products",products)

    useEffect(()=>{

      

       if(location || products.length===0){
        const queryParams={
          params:{
              brand:searchParams.get("brand")
          }
          
        }
        dispatch(getMensData(queryParams))
      }
      
    },[location.search])

    
  

  return (
    <>
    <Flex style={{justifyContent:"space-between",alignItems:"flex-start",marginTop:"20px",margin:"3%"}}>


      <FilterandSort />
      
    
     
      <Box width="75%"  m="auto"  justifyContent="center">
<SimpleGrid minChildWidth={250}   > 
       


{products && products.filter((_,index)=>{
  return(
    index>=perPage*(activePage-1)&&
    index<perPage*activePage
  );
})
.map((item)=>{
  return <MensCard  key={item._id} {...item}  />
})
}
</SimpleGrid>
</Box>
    </Flex>
    <Box >
    <Pagination />
  </Box>
  </>
  )
}

export default Mens