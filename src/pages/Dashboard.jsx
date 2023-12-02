import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
        <div>
            here is your old form list...

        </div>
        <div style={{height: "80vh", display:'flex',justifyContent:"center", alignItems:'center'}}>

            <Button colorScheme='blue'><Link to='/newform'>Add New Form</Link></Button>
        </div>
    </div>
  )
}

export default Dashboard