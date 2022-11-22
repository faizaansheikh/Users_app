import { Box, Button, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import Cards from './Cards'
import MyContainer from './MyContainer'
// import api from '../axios/Axios'
 import { getUser } from '../Consts/UserApi'
import { Link } from 'react-router-dom'

function Users() {
  const [users,setUsers] = useState([])
  
  const fetchData = async () => {
    const res = await getUser()
    setUsers(res.data)

  }
  useEffect(() => {
    fetchData()
    // console.log(users.name);
  }, [])
 
  return (
    <>
      <MyContainer>
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" sx={{ textAlign: "center", pt: "20px" }}>
            Users Page
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", pt: "20px", fontWeight: "light", fontSize: "30px" }}>
            There are {users.length} users
          </Typography>
          <Link to='/adduser'>
          <Button variant="contained" sx={{ width: "150px", mt: "10px" }}>Add user</Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", mt: "20px", flexWrap: 'wrap' }}>

          {
            users.map((data)=>{
              return(
                <Cards users={users} setUsers={setUsers} fetchData={fetchData} id={data._id} userId={data.userId} name={data.name} email={data.email} phone={data.phone} address={data.address}/>
              )
           
            })
          }
   
          
        </Box>
      </MyContainer>
    </>
  )
}

export default Users