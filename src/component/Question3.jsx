import React, { useState } from 'react'
import { Textarea, Input, OrderedList, ListItem, Button,Flex, Spacer, Text, Select } from '@chakra-ui/react'


const Question3 = () => {
    const [questions, setQuestions] = useState([]);


    const addnewQuestion = ()=>{
        const que = {
            question: "",
            option1 : "",
            option2 : "",
            option3 : "",
            option4 : "",
            ans : 0
        }
        setQuestions([...questions, que]);
    }
    const deleteQuestion = (index)=>{
        let que = questions;
        que = que.splice(index, 1);
        setQuestions([...que]);
    }

  return (
    <div style={{width:"95%",borderRadius:"5px", boxShadow:"1px 2px 5px #9E9E9E", padding:"20px"}}>
        <div>
            <h2 style={{fontWeight:"700", fontSize:"20px"}}>
                Question3
            </h2>
        </div>
        <div>
            <Textarea w={"500px"} placeholder='Type passage here...' />
        </div>
        <div style={{marginTop:"20px"}}>
            <div>
                <h2 style={{fontWeight:"600", fontSize:"16px"}}>
                    Add Questions-
                </h2>
            </div>
            <div>
                {
                    questions.map((ele, index)=>(
                        <div key={index} style={{marginTop:"20px", border: "1px solid #CDCBCB", borderRadius:"8px", padding: "8px"}}>
                            <Flex>
                                <Text>
                                    Question {index+1}
                                </Text>
                                <Spacer />
                                <Button m={2} colorScheme='red' variant='outline' onClick={()=>{deleteQuestion(index)}}>Delete</Button>
                            </Flex>
                            <Input placeholder='type question' mb={2}/>
                            <OrderedList  spacing={4}>
                                <ListItem><Input placeholder='type option-1' /></ListItem>
                                <ListItem><Input placeholder='type option-2' /></ListItem>
                                <ListItem><Input placeholder='type option-3' /></ListItem>
                                <ListItem><Input placeholder='type option-4' /></ListItem>
                            </OrderedList>
                            <Select placeholder='Select Answer' m={2}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                                <option value='option3'>Option 4</option>
                            </Select>
                        </div>
                    ))
                }
            </div>
            <div>
                <Button m={2} colorScheme='blue' onClick={addnewQuestion}>Add Question</Button>
            </div>
        </div>
    </div>
  )
}

export default Question3