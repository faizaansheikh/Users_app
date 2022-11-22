import  React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./users.css"
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Consts/UserApi';
import { GlobalInfo } from '../../App';

export default function MediaCard({id,userId,name,email,phone,address,fetchData,setUsers,users}) {

  const {apiValues} = useContext(GlobalInfo)
  const deletes = async(id)=>{
    await deleteUser({
      _id : id
    })
    fetchData()
  }
  const edit = ()=>{
    const data={userId,name,email,phone,address};
   // console.log(data);
  
     apiValues(data)
  }

  
  
  return (


    <Card sx={{ width: 380, mt: "25px" , mb:"25px"}}>

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ m: "10px" }} gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography sx={{ m: "10px" }} gutterBottom variant="h5" component="div">
            {userId}
          </Typography>
        </Box>
        <Typography sx={{ m: "10px" }} variant="body5" color="text.secondary">
          <span className='em'>Email</span> : {email}
        </Typography> <br />
        <Typography sx={{ m: "10px" }} variant="body5" color="text.secondary">
          <span className='em'>Phone</span>  : {phone}
        </Typography> <br />
        <Typography sx={{ m: "10px" }} variant="body5" color="text.secondary">
          <span className='em'>Address</span>  : {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ ml: "13px", mb: "10px", display: 'flex' }}>
          <Link to={`/edit/${id}`}>
          <Button onClick={edit} variant="contained" size="small" sx={{ bgcolor: '#2e7d32' }}> Edit </Button>
          </Link>
        
          <Button onClick={()=>deletes(id)} variant="contained" size="small" sx={{ ml: "10px", bgcolor: "#d50000" }}> Delete </Button>
         
        </Box>


      </CardActions>

    </Card>
  
  );
}