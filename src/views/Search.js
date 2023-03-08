import React, { Component } from 'react';
import GenericSection from '../components/sections/GenericSection';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SearchIcon from '@mui/icons-material/Search';


class Search extends Component {

render (){
    return(
     <GenericSection>   
    <MissedVideoCallIcon/>
    <SearchIcon/>
    </GenericSection>
       
    )
}
}

export default Search;