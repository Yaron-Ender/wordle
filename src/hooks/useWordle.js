import { useState } from "react"

export const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({}); // {a: 'grey', b: 'green', c: 'yellow'} etc
  //format the guess into array of letter objects
  //e.g. [{key:'a',color:'green'}]
  const formatGuess = () => {
    console.log(solution);
 let solutionArray = [...solution.word];
 let formatedGuess = [...currentGuess].map((l)=>{
  return {key:l,color:'grey'}
 })
 //find any green letter
  formatedGuess.forEach((l,i)=>{
  if(solutionArray[i]===l.key){
  formatedGuess[i].color='green'
  solutionArray[i]=null
  }
  })
  //find any yellow colors
  formatedGuess.forEach((l,i)=>{
  // check if the letter is inside solution array and it not at the right position
if(solutionArray.includes(l.key)&& l.color !=='green'){
 formatedGuess[i].color = "yellow";
 solutionArray[solutionArray.indexOf(l.key)] = null
}
})
  return formatedGuess
  };

  // add a new guess to the state guess
  //update the isCorrect state if the guess is corect
  //add one to the turn
  const addNewGuess = (formatedGuess) => {
//formatedGuess is array of letter object
//1.check if currentGuess(a string) === to the right solution
if(currentGuess===solution.word){
  setIsCorrect(true)
}
setGuesses((prevGuess)=>{
  let newGuesses = [...prevGuess]
  newGuesses[turn] = formatedGuess
  return newGuesses
})
setHistory((prevHistory)=>{
 return [...prevHistory,currentGuess]
})
setTurn((prevTurn)=>{
  return prevTurn +1
})
setCurrentGuess('')
//update state for keypad
formatedGuess.forEach((letterObj) => {
  setUsedKeys((prev) => {
if(letterObj.color==='green'){
  return { ...prev, [letterObj.key]: letterObj.color }; 
}
  if (prev[letterObj.key] !== "green" && prev[letterObj.key] !== "yellow") {
    return { ...prev, [letterObj.key]: letterObj.color };
  } else {
    return prev;
  }
  });
});
  };
  
  //handle keyup event and track current guess
  //if user press enter , add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      //word is 5 char. long
      if (currentGuess.length !== 5) {
        console.log("word must be five char long");
        return;
      }
      //word doesn't exsist
      if (history.includes(currentGuess)) {
        console.log("you already tried that word");
        return;
      }
      //turn  < 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      // if the 3 if block above doesn't return so the answer is valid
      // and we continue to format the guess
      const formated = formatGuess();
      addNewGuess(formated)
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return (prev += key);
        });
      }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup,usedKeys };
};