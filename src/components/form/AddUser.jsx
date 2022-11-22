import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../Consts/UserApi'
import { useFormik } from 'formik'
import { addUserSchema } from './Validation'
const initialValues = {
  id : '',
  names : '',
  email : '',
  phone : '',
  address : ''
}
function AddUser() {
  const navigate = useNavigate();
  const {values,errors,touched,handleSubmit,handleBlur,handleChange} =  useFormik({
    
    initialValues:initialValues,
    validationSchema : addUserSchema,
    onSubmit: async(values)=>{
      let newValues = {
        name : values.names,
        email : values.email,
        phone : values.phone,
        address : values.address,
        userId : values.id
      }
   
        await postUser(newValues)
        navigate('/')
       
    }

  })
 // console.log(errors);
  return (
    <>
       <Container sx={{ bgcolor: "#E3F2FD", pb: "50px", height: "100vh" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}} maxWidth="xl" >
              

                <Typography variant="h4" sx={{ textAlign: "center", mt: "10px", fontWeight: "550" }}>Add User</Typography>
                <Box component="form" sx={{ display: "flex", flexDirection: "column"}}> <br />
               
                 
                    <TextField label="Id" sx={{ width: "300px" }} size="small" type='number'
                     name='id'
                     value={values.id}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    /> 
                    
                      {
                       errors.id && touched.id ? (  <>
                        <Typography  variant="body1" sx={{color:'red',pl:'7px',pt:'8px',pb:'8px',fontSize:'15px'}}>{errors.id}</Typography>  
                        </>) : <br /> 
                      }
                    

                    <TextField label="Name" sx={{ width: "300px" }} size="small"
                     name='names'
                     value={values.names}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    /> 

                    {
                       errors.names && touched.names ? (  <>
                        <Typography  variant="body1" sx={{color:'red',pl:'7px',pt:'8px',pb:'8px',fontSize:'15px'}}>{errors.names}</Typography>  
                        </>) : <br /> 
                      } 
                     
                    <TextField label="Email" type="email"  sx={{ width: "300px" }} size="small"
                    name='email'
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                    /> 

                      {
                       errors.email && touched.email ? (  <>
                        <Typography  variant="body1" sx={{color:'red',pl:'7px',pt:'8px',pb:'8px',fontSize:'15px'}}>{errors.email}</Typography>  
                        </>) : <br /> 
                      } 
                       
                    <TextField label="Phone"  sx={{ width: "300px" }} size="small"  type='number'
                       name='phone'
                       value={values.phone}
                       onChange={handleChange}
                       onBlur={handleBlur}
                    /> 
                    {
                       errors.phone && touched.phone ? (  <>
                        <Typography  variant="body1" sx={{color:'red',pl:'7px',pt:'8px',pb:'8px',fontSize:'15px'}}>{errors.phone}</Typography>  
                        </>) : <br /> 
                      } 
                      
                     <TextField label="Address"  sx={{ width: "300px" }} size="small"
                       name='address'
                       value={values.address}
                       onChange={handleChange}
                       onBlur={handleBlur}
                      /> 
                      {
                       errors.address && touched.address ? (  <>
                        <Typography  variant="body1" sx={{color:'red',pl:'7px',pt:'8px',pb:'8px',fontSize:'15px'}}>{errors.address}</Typography>  
                        </>) : <br /> 
                      } 
                   
                   
                  <Button onClick={handleSubmit} sx={{ mt: "8px", bgcolor: "blue", width: "300px" ,bgcolor:"#1b5e20" }} variant="contained" >Add</Button>
                  
                   
                </Box>

            </Container>
    </>
  )
}

export default AddUser