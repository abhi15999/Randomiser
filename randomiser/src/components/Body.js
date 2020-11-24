import React, { Component } from 'react'
import {Grid,Paper,List,ListItem,ListItemText,Typography} from '@material-ui/core';
import {RightPane} from './index.js'
import axios from 'axios';

export default class Body extends Component {

    constructor(props){
        super(props);
        this.state ={
            paragraph:{}
        }
    }
    
    render() {


const styles = {
    Container:{
        lineHeight:'400px',
    },

    Paper:{
        margin:'10px 5px',
        padding:20,
        height:'400px'
    },

    Button:{
        padding:"30px 10px",
        color:"white",
        backgroundColor:"#0275d8",
        margin:"50px 0px",
        borderRadius:'10px',
        cursor:'pointer'
    }
}

const quoteClickHandler = () =>{
    axios.get('https://litipsum.com/api/json')
    .then(response=>{
        this.setState({paragraph:response.data});
        console.log(response.data);
    })
}


 const paragraphClickHandler = () =>{
    console.log(typeof this.state.paragraph);
}
         
        
        return (
            
            <Grid container >
            <Grid item sm={12} md={6}>  
            <Paper style={styles.Paper}>
            {/* <Button variant="contained" color="primary">Randomize</Button> */}
    <List component="nav">
        <ListItem button style={styles.Button} onClick={quoteClickHandler}>
          <ListItemText><Typography variant="h6">
                Randomize Quote
              </Typography></ListItemText>
        </ListItem>
        <ListItem button style={styles.Button} onClick={paragraphClickHandler}>
        <ListItemText><Typography variant="h6">
                Randomize Paragraph
              </Typography></ListItemText>
        </ListItem>
    </List>
        </Paper>
            </Grid>
            <Grid item sm={12} md={6}>
                <RightPane data={this.state.paragraph} styles={styles}/>
            </Grid>
        </Grid>
          
        )
    }
}

