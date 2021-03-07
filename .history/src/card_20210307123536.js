import React from 'react';
const card=(props)=>{
    return(
        <div className="bg-light-green pa3 br3 grow dib ma2 shadow-5 bd2">
            <img src={`https://robohash.org/${props.id}`} alt={`${props.name}`}/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}
export default card;