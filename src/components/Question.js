import React, {useEffect, useState} from "react";

function Question({ question, onAnswered }){
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    // console.log("The Question component has been re-rendered");
    let timeOutID = setTimeout(() => {
      setTimeRemaining((timeRemaining) => (timeRemaining -= 1), 1000);
    });

    if(timeRemaining = 0){ //If timer reaches 0:
      // setTimeRemaining(10); //Reset timeRemaining to 10 seconds after 10 seconds have passed.
      onAnswered(false);
    }

    // Is any cleanup needed? YES
    return function cleanup(){
      clearTimeOut(timeOutID);
    };
    // Are there any errors/warnings from using useEffect?
  }, [timeRemaining, onAnswered]); //Run only when  timeRemaining changes

  /*
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  */

  function handleAnswer(isCorrect){
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const {id, prompt, answers, correctIndex} = question;

  return(
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return(
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;