import { Box, Container } from '@mui/material'
import React from 'react'
import './users.css'
function MyContainer(props) {
  return (
    <>
    {/* <Container maxWidth="lg">
       <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
     
       {props.children}
       <Box/>
     </Container> */}
     <div className='cont-div'>
     {props.children}
     </div>
  </>
  )
}

export default MyContainer