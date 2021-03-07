import React from 'react';
const card=({name,email,id})=>{
    return(
        <div className="tc bg-dark-blue pa3 br3 grow dib ma2 shadow-5 bw2">
            <img src={`https://robohash.org/${id}?200x200`} alt={`${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default card;