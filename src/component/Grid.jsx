import React from 'react';
import Row from './Row'
const Grid = ({ currentGuess,guesses,turn }) => {
    return (
    <div>
    {guesses.map((g,i)=>{
    if(i===turn){
    return <Row key={turn} currentGuess={currentGuess} turn={turn}/>; 
    }
    return <Row key={i} guess={g} />   
    })}    
    </div>
    );
};

export default Grid;