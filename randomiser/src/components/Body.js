import React from 'react'
import {Grid} from '@material-ui/core';
import {LeftPane,RightPane} from './index.js'
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

function Body() {
    return (
        <Grid container style={styles.Container}>
            <Grid item sm={12} md={6}>  
                <LeftPane styles={styles} />
            </Grid>
            <Grid item sm={12} md={6}>
                <RightPane styles={styles}/>
            </Grid>
        </Grid>
    )
}

export default Body
