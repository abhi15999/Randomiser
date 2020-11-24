import React from 'react'
import {Paper} from '@material-ui/core'


function RightPane(props) {
    return (
        <Paper style={props.styles.Paper}>
        <div>
            <h2>{props.data.title}</h2>
    <p>{props.data.text}</p>
    </div>
</Paper> 
    )
}

export default RightPane
