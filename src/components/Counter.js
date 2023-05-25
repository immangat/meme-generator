import React from "react";

function Counter(props){
    return (
        <div style={props.styles} >
                <h1>{props.number}</h1>
            </div>
    )
}

export default Counter