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
  import {Button, Jumbotron, Alert } from "react-bootstrap";
  import 'bootstrap/dist/css/bootstrap.css';


  
  const Matermind = () => {
      const combination = 4;
      const [newGame, setNewGame] = useState(false);
      const [random, setRandom] = useState([]);
      const [response, setResponse] = useState([]);
      const [responseHistory, setResponseHistory] = useState([]);
      const [messages, setMessages] = useState([]);
      const [gusses, setGuesses] = useState(10);
      const [count, setCount] = useState(1);
      const [hasStarted, setHasStarted] = useState(false);
      const [solved, setSolved] = useState(false);
      const [gameOver, setGameOver] = useState(false)
  
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
          setResponseHistory(Array(1).fill(res.current));
          setGuesses(10);
          setCount(1);
          setNewGame(false);
          setHasStarted(true);
          setSolved(false);
          setMessages([]);
          setGameOver(false);
          Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        } else {
          isMounted.current = true;
        }
      }, [newGame])
  
  
      const handleClick = (e) => {
        e.preventDefault();
        let id = e.target.id;
        if (res.current[res.current.length -1] !== ""){
          return;
        }
        for (let i = 0; i<res.current.length; i++){
          if(res.current[i] === ""){
            res.current[i] = Number(id);
            break;
          }
          setResponse(res.current)

        }
      }
      const checkIfMatch = (e) => {
        e.preventDefault();
        if (res.current.includes("")) return;
        let newReponsehistory = responseHistory;
        newReponsehistory[count - 1] = response;
        // if (count <= 10) {
        //   newReponsehistory.push(["","","",""])
        // }
        setGuesses(gusses - 1)
        if (gusses === 1) {
          setTimeout(()=> setGameOver(true), 100)
        } else {
          newReponsehistory.push(["","","",""])

        }
        setResponseHistory(newReponsehistory);

        setCount(count + 1);
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        let newMessage = "";
        if (areEqual(random, res.current) === true) {
          newMessage = "Congratulations! If have gussed all the numbers and won the game!!!";
          setSolved(true);
        } else {
          console.log(compare(random, response)[0], compare(random, response)[1])
          if (compare(random, response)[0]) {
            newMessage = "Good try! You have guessed a current number and its current locartion";
          } else if (compare(random, response)[1]) {
            newMessage = "Good try! You have guessed a current number";
          } else {
            newMessage = `Oops! Your guess isn't correct. Try again!`;
          }
        }
        setMessages(messages => [...messages, newMessage])
        res.current = res.current.map(num => num = "")  
      }
      const areEqual = (random, response) => {
        if (random.join("") === response.join("")) {
          return true;
        } else {
          return false;
        }
      }
      const compare = (num1, num2) => {
        console.log("here.....",num1, num2)
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

    return (<div className = {styles.container}>
     {!hasStarted ?  
     <Jumbotron className={styles.firstView} >
       <h1 className={styles.item}> Mastermind Game!</h1>
       <p className={styles.item}>
       To start a new game, click on the start button below!
       </p>
    
      <Button variant="primary"  size="lg" block className={styles.startButton} onClick={()=>{setNewGame(true)}}>
       Start
      </Button>
   
   </Jumbotron> 
   
   : solved ? 
   <>
      <Alert  variant="success" className={styles.solved}>
        <Alert.Heading>Congratulations!</Alert.Heading>
        <p>
         You have gussed all the numbers and won the game!!! 
         The number you guessed is {random}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setHasStarted(false)} variant="outline-success">
            Back to game!
          </Button>
        </div>
      </Alert>
    </>
   
   : gameOver && hasStarted?  <Alert  variant="danger" className={styles.solved}>
   <Alert.Heading>You lost!</Alert.Heading>
   <p>
    Unfortunatley you have exausted all 10 guess attempts and no one matched the number!!! 
    The number you were trying to guess {random}
   </p>
   <hr />
   <div className="d-flex justify-content-end">
     <Button onClick={() => setHasStarted(false)} variant="outline-danger">
       Back to game!
     </Button>
   </div>
 </Alert>
:
   <div className={styles.secondView}>
    <h1 className={styles.item}> Mastermind Game!</h1>
      <div className={styles.numbersTable}>

       <div className={styles.box}>
        <form className={styles.numbersBox}>
            {Array.from(Array(8)).map((x, i) => <button  id ={i} key={i} onClick = {handleClick} className={styles.number} >{i}</button>)}
        </form>
     
        <Button variant="success" className = {styles.guessSubmit} onClick = {checkIfMatch} >
          Submit A Guess
        </Button>
      </div>
     </div>
     <div className={styles.guessBox}>
     <p className={styles.text}>
         You Have <b>{gusses} </b> Guesses Left
       </p>
       {responseHistory.map((x, i) => 
         <div className={styles.guessRow} id ={i} key={i} > 
          <div className={styles.insideBox}> 
            {/* <div className={styles.text}>{i+1}</div> */}
           {responseHistory[i].map((num, idx) => 
             <button className={styles.square} id ={idx} key={idx}>
               {num}
             </button>)} 
          </div>
          {messages[i] === "" ? <div></ div> :   <div className={styles.message}>{messages[i]}</ div> }  
         </div>)}


     </div>
     <Button variant="secondary" className={styles.newStartButton}  onClick={()=>{setNewGame(true)}}>
       Start A New Game
      </Button>
    </div> }
    </div>)
}

export default withRouter(Matermind);