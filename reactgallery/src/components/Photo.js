import React from 'react';

export default function Photo(props){
    return (
        props.data.map((pics)=> {
            // {console.log(pics)}
            return (
        <ul>
            <li>
                <img src={`https://farm5.staticflickr.com/${pics.server}/${pics.id}_${pics.secret}.jpg`} alt="" key={pics.id} />
            </li>
            <li>
                <img src={`https://farm5.staticflickr.com/${pics.server}/${pics.id}_${pics.secret}.jpg`} key={pics.id} alt="" />
            </li>
            <li>
                <img src={`https://farm5.staticflickr.com/${pics.server}/${pics.id}_${pics.secret}.jpg`} alt="" key={pics.id}/>
            </li>
            <li>
                <img src={`https://farm5.staticflickr.com/${pics.server}/${pics.id}_${pics.secret}.jpg`} alt="" key={pics.id}/>
            </li>
        </ul>
            )
        })
    )
}