import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalInfo } from '../../App'

import { editUser } from '../Consts/UserApi'

function Form() {

  const paramsId = useParams();
  //console.log(params);
  const {editForm} = useContext(GlobalInfo)
 console.log(editForm);
  const navigate = useNavigate();
  const[userData,setUserData] = useState({
    name:'',email:'',phone:'',address:'',userId:''
  })

  const getVal = (e)=>{
    setUserData(
      {
        ...userData,
        [e.target.name]: e.target.value
      }
    )

  }
 useEffect(()=>{
  setUserData(editForm)
 },[])
  const submitEdit = async()=>{
    // e.preventDefault();
    const inputValues = {
      name : userData.name,
      email : userData.email,
      phone : userData.phone,
      address : userData.address,
      id : paramsId,
      userId : userData.userId
     }
   // console.log(inputValues);
     await editUser(inputValues)
     setUserData({
      name:'',email:'',phone:'',address:'',userId:''
     })
     navigate('/')
    
 }
  return (
    <>
        <Container sx={{ bgcolor: "#E3F2FD", pb: "50px", height: "100vh" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}} maxWidth="xl" >
              

              <Typography variant="h4" sx={{ textAlign: "center", mt: "10px", fontWeight: "550" }}>Edit Card</Typography>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}> <br />
                  <TextField label="Userid" sx={{ width: "300px" }} size="small" type='number'
                     name='userId'
                     value={userData.userId}
                     onChange={getVal}
                    /> <br />
                  <TextField label="Name" sx={{ width: "300px" }} size="small"
                   name='name'
                   value={userData.name}
                   onChange={getVal}
                  /> <br />
                  <TextField label="Email" type="email"  sx={{ width: "300px" }} size="small" 
                    name='email'
                    value={userData.email}
                    onChange={getVal}
                  /> <br />
                  <TextField label="Phone"  sx={{ width: "300px" }} size="small"  type='number'
                   name='phone'
                   value={userData.phone}
                   onChange={getVal}
                  /> <br />
                   <TextField label="Address"  sx={{ width: "300px" }} size="small"
                   name='Address'
                   value={userData.address}
                   onChange={getVal}
                      /> <br />
                
                <Button onClick={submitEdit} sx={{ mt: "8px", bgcolor: "blue", width: "300px" ,bgcolor:"#1b5e20" }} variant="contained" >Edit</Button>
                
                 
              </Box>

          </Container>
    </>
  )
}

export default Form