import React from "react";


export default function Box(props){
    
   

   

    const styles = {
        backgroundColor : props.ifOn ? "yellow": "black"
    }
    return (
        <div style={styles} className="box" onClick={props.handle}></div>
    )
}