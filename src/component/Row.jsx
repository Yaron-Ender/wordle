import React from 'react';

const Row = ({guess,currentGuess}) => {
if(guess){
return(
<div className="row past">
{guess.map((g,i)=>(
<div key={i} className={`${g.color} colored`}>{g.key}</div>
))}
</div>
)
}
if(currentGuess){
let letters = currentGuess.split('');
return(
<div className="row current">
{letters.map((letter, i) => (
<div key={i} className="filled">{letter}</div>
))}

{[... new Array(5 - letters.length)].map((_, i) => (
<div key={i}></div>
    ))} 
</div>
)    
}
return (
<div className='row'>
    <div></div>  
    <div></div>  
    <div></div>  
    <div></div>  
    <div></div>  
</div>
);
};

export default Row;


