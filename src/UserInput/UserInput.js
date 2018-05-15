import React from 'react';

const userInput = (props) => {
    return (
    <div>
        <input type='text' onChange={props.onChange}/>
        
    </div> 
    )
};
export default userInput; 