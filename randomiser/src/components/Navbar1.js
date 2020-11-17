import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core';

const styles={
    Typography:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:25
    }
}

function Navbar1() {
    return (
        <AppBar position="sticky">
        <Toolbar style={styles.Typography}>
            <Typography variant="h4">
                Randomizer | Made by Abhishek Gupta
            </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar1
