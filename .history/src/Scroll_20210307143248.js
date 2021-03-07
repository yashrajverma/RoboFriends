import React from 'react';
export const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll' ,height:'80vh'}}>
            {props.children}
        </div>
    );
}