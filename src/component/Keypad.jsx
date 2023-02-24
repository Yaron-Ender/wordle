import React from 'react';

const Keypad = ({keypadLetters}) => {
    console.log(keypadLetters)
    return (
        <div className='keypad'>
         {keypadLetters.map((l)=>{
return  <div key={l.key}>{l.key}</div>
         })}   
        </div>
    );
};

export default Keypad;