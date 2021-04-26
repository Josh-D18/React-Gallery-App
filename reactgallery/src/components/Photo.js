import React from 'react';

export default function Photo(props){
    return ( 
        <li>
            <img src={`https://farm5.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`} alt={`${props.data.title}`}/>
        </li>
    )
}