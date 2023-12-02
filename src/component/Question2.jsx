import React, { useEffect, useState } from 'react'
import { Input, InputGroup, InputLeftElement, InputRightElement, Stack, Button, Text,Checkbox,  Spacer, Flex, Box} from '@chakra-ui/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// const options = [];
const Question2 = () => {
    const [mySentence, setMySentence] = useState("");
    const [options, setOptions] = useState([]);
    console.log("my options,", options);
    useEffect(() => {
        console.log("its running......")
        var modifiedText = mySentence.replace(/<u>(.*?)<\/u>/g, function(match, p1) {
            // Store the underlined word in an array
            const index = options.indexOf(p1);
            if (index < 0) { 
              setOptions([...options, p1]);
            }
            return '_ _ _ _';
        });
    }, [mySentence]);
  return (
    <div style={{width:"95%",borderRadius:"5px", boxShadow:"1px 2px 5px #9E9E9E", padding:"20px"}}>
        <div>
            <h2 style={{fontWeight:"700", fontSize:"20px"}}>
                Question2
            </h2>
            <div>
                <Text>Preview</Text>
                <Text borderRadius={5} border={"1px solid #CBD5E0"} p={2}>
                    {
                        mySentence.length == 0 ?  "preview" : 
                            <div dangerouslySetInnerHTML={{__html: mySentence.replace(/<u>(.*?)<\/u>/g, '_ _ _ _')}} />
                    }
                </Text>
                {/* <Input isReadOnly={true} value={`<div dangerouslySetInnerHTML={{__html: ${mySentence.replace(/<u>(.*?)<\/u>/g, '----')}}} />`} /> */}
            </div>
            <div>
                <Text>Sentence</Text>
                <ReactQuill modules={{
                  toolbar: [
                    [{ 'header': '1'}, {'header': '2'}],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline','code-block', 'indent'],
                    ['clean']
                  ],
                }} 
                value={mySentence} 
                onChange={(e)=>{setMySentence(e)}} 
            />
                {/* <Input value={mySentence} onChange={(e)=>{setMySentence(e.target.value)}}/> */}
            </div>
            <div style={{marginTop: "50px"}}>
                <Stack spacing={[1, 5]} direction={['column', 'column']}>
                    {
                        options.map((ele)=>(
                            <Checkbox isReadOnly size='lg' colorScheme='blue' defaultChecked borderRadius={5} border={"1px solid #CBD5E0"} p={2}>
                                {ele}
                            </Checkbox>
                        ))
                    }
                </Stack>
            </div>

        </div>
    </div>
  )
}

export default Question2