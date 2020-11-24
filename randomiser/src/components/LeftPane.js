import React from 'react'
import {Paper,List,ListItem,ListItemText,Typography} from '@material-ui/core'
import axios from 'axios';

const quoteClickHandler = () =>{
    // console.log('Clicked');
    axios.get('https://litipsum.com/api/json')
    .then(res=>{
        const data = res.data;
        // console.log(data);
    })
}


const paragraphClickHandler = () =>{
    console.log('Clicked');
}


function LeftPane({styles}) {
    return (
        <Paper style={styles.Paper}>
            {/* <Button variant="contained" color="primary">Randomize</Button> */}
    <List component="nav">
        <ListItem button style={styles.Button} onClick={quoteClickHandler}>
          <ListItemText><Typography variant="h6">
                Randomize Text
              </Typography></ListItemText>
        </ListItem>
        <ListItem button style={styles.Button} onClick={paragraphClickHandler}>
        <ListItemText><Typography variant="h6">
                Randomize Paragraph
              </Typography></ListItemText>
        </ListItem>
    </List>
        </Paper>
    )
}

export default LeftPane;
