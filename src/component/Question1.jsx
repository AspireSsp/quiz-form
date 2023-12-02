import React, { useState } from 'react'
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack, Button, Text,  Spacer, Flex, Box} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import Select from 'react-select';



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const Question1 = () => {

    const [selectCategory, setSelectCategory] = useState("");
    const [catArr, setCatArr] = useState([]);
    const [ansArr, setAnsArr] = useState([]);
    const [changingItem, setChangingItem] = useState();

    const handleChange = (e, index) => {
        console.log(e, index);
        setAnsArr((prevCatArr) => {
            const newArray = [...prevCatArr];
            newArray[index].value = e.label;
            return newArray;
        });
        // setSelectCategory(selectedOption);
    };

    const addCategory = async()=>{
        setCatArr([...catArr, {value : "", label: "",}])
    }
    const removeCategory = async(index)=>{
        setCatArr((prevCatArr) => {
            const newArray = [...prevCatArr];
            newArray.splice(index, 1);
            return newArray;
        });
    }
    const addCategoryName = async(index, catName)=>{
        setCatArr((prevCatArr) => {
            const newArray = [...prevCatArr];
            newArray[index] = { ...newArray[index], label: catName };
            return newArray;
        });
    }
    const addAnswer = ()=>{
        setAnsArr([...ansArr, {value:"", label:""}]);
    }
    const addAnsName = async(ans, index)=>{
        console.log(ans, index);
        setAnsArr((prevAnsArr) => {
            const newArray = [...prevAnsArr];
            newArray[index] = {value:"", label: ans };
            return newArray;
        });
    }
    console.log(ansArr);
  return (
    <div style={{width:"95%",borderRadius:"5px", boxShadow:"1px 2px 5px #9E9E9E", padding:"20px"}}>
        <div>
            <h2 style={{fontWeight:"700", fontSize:"20px"}}>
                Question1
            </h2>
        </div>
        <div>
            <Input placeholder='description (optional)' />
        </div>
        <div>
            <h4 style={{padding:"5px"}}>Categories</h4>
        </div>
        <div>
            <Stack spacing={4} width={"300px"}>
                {
                    catArr?.map((ele,index)=>(
                        <InputGroup key={index}>
                            <Input placeholder='Enter Category' onChange={(e)=>{addCategoryName(index, e.target.value)}} />
                            <InputRightElement>
                            <CloseIcon color='gray' cursor={'pointer'} onClick={()=>{removeCategory(index)}} />
                            </InputRightElement>
                        </InputGroup>
                    ))
                }
           
                <Button colorScheme='teal' variant='outline' onClick={()=>{addCategory()}}>
                    Category 4 (opitional)
                </Button>
            </Stack>
        </div>
        <div style={{ marginTop: "20px"}}>
            <div>
                <Flex ms={6}>
                    <Text w={"400px"}> Item</Text>
                    
                    <Text>Belongs To</Text>

                </Flex>
            </div>
            <div style={{margin:"5px"}}>
                <Stack spacing={4} >
                    {
                        ansArr?.map((ele,index)=>(
                            <div style={{display:'flex'}}>
                                <InputGroup w="300px" m={2}>
                                    <Input onChange={(e)=>{addAnsName(e.target.value, index)}}/>
                                    <InputRightElement>
                                    <CloseIcon color='gray' />
                                    </InputRightElement>
                                </InputGroup>
                                <div style={{width:"200px",margin:"8px", marginLeft:"100px"}}>
                                    <Select
                                        value={{value:ele.value, label:ele.value}}
                                        onChange={(e)=>{handleChange(e, index)}}
                                        options={catArr}
                                    />
                                </div>
                            </div>
                        ))
                    }
                  
                    <Button colorScheme='teal' variant='outline' w={"300px"} onClick={()=>{addAnswer()}}>
                        Category 4 (opitional)
                    </Button>
                </Stack>
            </div>
            {/* <div style={{width:'300px', margin:"5px 80px" }}>
                <Stack>
                    <Text>Belongs To</Text>
                </Stack>
                <Stack spacing={4} width={"300px"}>
                    <InputGroup>
                        <Select
                            value={selectCategory}
                            onChange={(e)=>{handleChange(e)}}
                            options={options}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Select
                            value={selectCategory}
                            onChange={(e)=>{handleChange(e)}}
                            options={options}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Select
                            value={selectCategory}
                            onChange={(e)=>{handleChange(e)}}
                            options={options}
                        />
                    </InputGroup>
                   
                    <Button colorScheme='teal' variant='outline'>
                        Category 4 (opitional)
                    </Button>
                </Stack>
            </div> */}
        </div>
    </div>
  )
}

export default Question1