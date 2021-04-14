import React, {
    useState,
    useEffect,
    useRef
  } from "react";
  import axios from "axios";
  import {
    withRouter
  } from 'next/router'
  
  import styles from './styles.module.css'
  
  
  const matermind = () => {
      const combination = 4;
      const [newGame, setNewGame] = useState(false);
      const [random, setRandom] = useState([]);
      const [response, setResponse] = useState([]);
      const [responseHistory, setResponseHistory] = useState([]);
      const [messages, setMessages] = useState([]);
      const [gusses, setGuesses] = useState([10]);
  
      const isMounted = useRef(false);
      const res = useRef(["", "", "", ""]);
      useEffect(async () => {
        if (isMounted.current) {
          const result = await axios(
            `https://www.random.org/integers/?num=${combination}&min=0&max=7&col=1&base=10&format=plain&rnd=new`,
          );
          let number = result.data.split("").filter((num, key) => key % 2 === 0).map((num) => Number(num));
          setRandom(number);
          res.current = ["", "", "", ""]
          setResponse(res.current);
          setResponseHistory([]);
          setGuesses([10]);
          setNewGame(false)
          Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          console.log(random)
        } else {
          isMounted.current = true;
        }
  
      }, [newGame])
  
  
      const handleChange = (e) => {
        let newNum = Number(e.target.value);
        let id = e.target.id;
        res.current[id] = newNum;
        setResponse(res.current);
        console.log(response)
  
  
      }
  
      const checkIfMatch = (e) => {
        e.preventDefault();
        if (res.current.includes("")) return;
        setResponseHistory(responseHistory => [...responseHistory, response]);
        setGuesses(gusses - 1)
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        let newMessage = "";
        console.log(response)
        if (areEqual(random, response) === true) {
          newMessage = "Congratulations! If have gussed all the numbers and won the game!!!";
        } else {
          console.log(compare(random, response)[0], compare(random, response)[1])
          if (compare(random, response)[0]) {
            newMessage = "You have guessed a current number and its current locartion";
          } else if (compare(random, response)[1]) {
            newMessage = "You have guessed a current number";
          } else {
            newMessage = `Sorry! Your guess isn't correct, you have ${gusses} guesses left`;
          }
        }
  
        setMessages(messages => [...messages, newMessage])
        res.current = res.current.map(num => num = "")
        setResponse(res.current)
  
      }
      const areEqual = (random, response) => {
        console.log(random.join("") === response.join(""))
        if (random.join("") === response.join("")) {
          return true;
        } else {
          return false;
        }
      }
      const compare = (num1, num2) => {
        let samePos = false;
        let foundNum = false;
        for (let i = 0; i < num1.length; i++) {
          for (let j = 0; j < num2.length; j++) {
            if (i === j && num1[i] === num2[j]) {
              samePos = true;
              foundNum = true;
              return [samePos, foundNum]
            }
            if (num1[i] === num2[j]) {
              foundNum = true;
            }
          }
        }
        return [samePos, foundNum]
      }

    return (<div className={styles.game}>
    <button className={styles.button} onClick={()=>{setNewGame(true)}}>Start the Game</button>
    <div className="help">
        {gusses} guesses left
      </div>
    <div className={styles.body}>
        <form className={styles.numbersBox}>
            {Array.from(Array(combination)).map((x, i) => <input  id ={i} key={i} onChange = {handleChange} className={styles.number} ></input>)}

        </form>

        <button className = {styles.guessSubmit} onClick = {checkIfMatch} >Submit Guess</button>
    </div>
    <div className={styles.body}>
        <div className={styles.numbersBox}>
            {responseHistory.map((x, i) => <div><div  id ={i} key={i} className={styles.number} >{x}</div> <div key={i}>{messages[i]}</div></div>)}

        </div>
    </div>
    </div>)
}

export default withRouter(matermind);