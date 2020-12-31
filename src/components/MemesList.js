import './MemesList.css';
import React from 'react';
import MemeCard from './MemeCard';

const MemesList = (props) => {
    console.log(props.memes);
    const memes = props.memes.map((meme) => {
        return <MemeCard key = {meme.id} meme = {meme} />
    })
    return (
        <div className = "memes-list">
            {memes}
        </div>
    )
}

export default MemesList;