import React from "react";
import '../styles/meme.css'

function Meme() {

    const [memeData, setMemeData] =  React.useState({})

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(data.data.memes))

    }, [])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    function getMemeUrl() {
        const rndInt = Math.floor(Math.random() * memeData.length)
        let url = memeData[rndInt].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    console.log(meme)

    const handleText = (e) => {
        const { name, value } = e.target
        setMeme(premMeme => ({
            ...premMeme,
            [name]: value

        }))
    }

    return (
        <div className="meme">
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleText}


                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleText}
                />
                <button className="form--button" onClick={getMemeUrl}>
                    Get a new Meme
                </button>
            </div>
            <div className="meme--complete">
                <img className="meme--image" src={meme.randomImage}></img>
                <h1 className="meme--complete--top--text">{meme.topText}</h1>
                <h2 className="meme--complete--bottom--text">{meme.bottomText}</h2>
            </div>


        </div>
    )
}

export default Meme;