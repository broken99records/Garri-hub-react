import React, { Component } from 'react';
import GenericSection from '../components/sections/GenericSection';
import SearchIcon from '@mui/icons-material/Search';
import { Card } from '@mui/material';
//import { color } from '@mui/system';
//import InfiniteScroll from 'react-infinite-scroll-component';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
//import { color } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

let cars;


const renderPosts = async () => {
  
  let uri = 'http://localhost:3004/cars?_sort=color&_order=asc';
  

const res = await fetch(uri);
const posts = await res.json();
console.log(posts);



 cars = posts.map((post) => 
 <Grid item component={Card} xs={posts.length/3} className={Card}>
    
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={post.brand}
            height="140"
            image="./src/assets/images/part-hero.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      
    </Grid>
)


}


window.addEventListener('DOMContentLoaded', () => renderPosts());

class Search extends Component {
 

render (){
    return(
    <GenericSection >

            <FormControl variant="standard">

            <InputLabel htmlFor="input-with-icon-adornment" sx={{ color: "white" }}>
              Search
            </InputLabel>
            
            <Input sx={{ color: "white" }}
          startAdornment={<InputAdornment position="start">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>} />

          </FormControl>  

          
          <Grid container spacing={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {cars}
            </Grid>
          
               

         

          
      </GenericSection>
      
      
    )
  }
}

export default Search;