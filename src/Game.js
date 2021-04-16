import React from "react";
import styles from "../pages/styles.module.css";
import {
  Button,
  Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  faBrain,
  faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';


const Game = ({handleReturnToMain,playNumbers,handleClick, setNewGame, gusses, messages, secondsLeft, checkIfMatch, clearNumbers, newGame, responseHistory}) => (
    <div className={styles.secondView}>
        <h1 className={styles.item}> Master<FontAwesomeIcon icon={faBrain} />ind</h1>
        <div className={styles.numbersTable}>

        <div className={styles.box}>
            <form className={styles.numbersBox}>
                {Array.from(Array(playNumbers + 1)).map((x, i) => <button  id ={i} key={i} onClick = {handleClick} className={styles.number} >{i}</button>)}
            </form>
        
            <Button variant="secondary" className={styles.newStartButton}  onClick={()=>{setNewGame(!newGame)}}>
            Start A New Game
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
            {responseHistory[i].map((num, idx) => 
                <button className={styles.square} id ={idx} key={idx}>
                {num}
                </button>)} 
            </div>
            {messages[i] === "" ? <div></ div> :   <div className={styles.message}>{messages[i]}</ div> }  
            </div>)}
        </div>
        <div className={styles.timer}>Time Remaining: {secondsLeft}</div>

        <div>
        <Button variant="success" className = {styles.guessSubmit} onClick = {checkIfMatch} >
            Submit A Guess
        </Button>
        <Button variant="danger" className = {styles.guessSubmit} onClick = {clearNumbers} >
            Clear Numbers
        </Button>
        </div>
        <FontAwesomeIcon icon={faChevronCircleLeft} className={styles.exit} onClick={handleReturnToMain}/> 
    </div> 
)

export default Game;