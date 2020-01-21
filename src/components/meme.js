import React from 'react';


export default function Meme(props) {
    const { id, text, favorite, image } = props.meme
    
    return (
        <div className="meme">
            <div className="img-wrapper">
                <img className="meme-img" src={image} alt="missing meme" />
                </div>
                <p>{text}</p>
                {favorite ? (
                <img 
                    src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" 
                    alt="favorite star"
                />
                ) : null}
                <button onClick={() => props.deleteMeme(id)}>Delete</button>
                <button>Edit</button>
            </div>           

    )
}