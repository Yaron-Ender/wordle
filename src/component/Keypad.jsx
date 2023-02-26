import React from 'react';

const Keypad = ({keypadLetters,usedKeys}) => {
    return (
        <div className='keypad'>
         {keypadLetters.map((l)=>{
        // console.log(usedKeys[l.key])
return  <div key={l.key} className={usedKeys[l.key]}>{l.key}</div>
         })}   
        </div>
    );
};

export default Keypad;