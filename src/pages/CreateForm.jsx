import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Spacer,
    Stack,
  } from '@chakra-ui/react'
import Question1 from '../component/Question1'
import Question2 from '../component/Question2'
import Question3 from '../component/Question3'
const CreateForm = () => {
  return (
    <div>
        <div style={{boxShadow:"1px 3px 5px #9E9E9E", minHeight:"60vh", width:"100%", paddingBottom:"50px", display:'flex', flexDirection:"column", justifyContent:'center', alignItems:"center",}}>
            <div style={{display:'flex', justifyContent:"flex-end", padding: "20px", width:"100%"}}>
                <Button colorScheme='blue' variant='outline' >View</Button>
            </div>
            <div style={{display:'flex', flexDirection:"column", justifyContent:'center', alignItems:"center", width:"600px"}}>
                <Question1 />
                <Spacer />
                <Question2 />
                <Spacer />
                <Question3 />
            </div>
        </div>
    </div>
  )
}

export default CreateForm