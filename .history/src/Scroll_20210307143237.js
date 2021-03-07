import React from 'react';
export Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll' ,height:'80vh'}}>
            {props.children}
        </div>
    );
}