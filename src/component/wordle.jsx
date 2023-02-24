import React, { useEffect } from 'react';
import { useWordle } from '../hooks/useWordle';
import Grid from './Grid';

const Wordle = ({solution}) => {
 const { currentGuess, handleKeyup,guesses, isCorrect,turn } = useWordle(solution);
 useEffect(()=>{
    window.addEventListener('keyup',handleKeyup)
  return ()=>{window.removeEventListener('keyup',handleKeyup)}
 },[handleKeyup])
 useEffect(() => {
 }, [guesses, isCorrect, turn]);
    return (
      <div>
        <p>the solution is : {solution.word}</p>
        <p>the word is : {currentGuess}</p>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      </div>
    );
};

export default Wordle;