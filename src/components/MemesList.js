import React from 'react';

const MemesList = (props) => {
    console.log(props.memes);
    const memes = props.memes.map((meme) => {
        return <img key = {meme.id} src = {meme.url} alt = {meme.name} width = '200px' height = '200px' styles = {{margin: '10px'}} />
    })
    return (
        <div>
            {memes}
        </div>
    )
}

export default MemesList;