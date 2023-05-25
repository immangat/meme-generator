import React from "react";

export default function WindowWidth(props) {

    const[width, setWidth] = React.useState(window.innerWidth)
     

    React.useEffect(() =>{
        const watchWidth = () => setWidth(window.innerWidth)
        window.addEventListener("resize", watchWidth)
        return () => { 
            console.log("Clean up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <div>
             <h1>Window Width: {width}</h1>
        </div>
    )
}