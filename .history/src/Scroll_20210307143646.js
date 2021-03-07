import React from 'react';
const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll' ,height:'80vh' , scrollBehavior:'smooth'}}>
            {props.children}
        </div>
    );
}
export default Scroll;