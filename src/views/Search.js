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


class Search extends Component {

render (){
    return(
    <GenericSection>

            <FormControl variant="standard">

            <InputLabel htmlFor="input-with-icon-adornment" sx={{ color: "white" }}>
              Search
            </InputLabel>
            
            <Input sx={{ color: "white" }}
          startAdornment={<InputAdornment position="start">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>} />

          </FormControl>       


        
        <Card />
      </GenericSection>
      
      
    )
  }
}

export default Search;