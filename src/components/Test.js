import React from "react";
import WindowWidth from "./WindowWidth";

function Test(props) {

    const[show, setShow] = React.useState(true)


    const handleClick = () => {
        setShow(prev => !prev)
    }
    return (
        <div className="test--container">
            <button onClick = {handleClick}>
                Toggle WindowTracker
            </button>
            {
              show &&  <WindowWidth />
            
            }
                
                
            

        </div>
    )
}

export default Test