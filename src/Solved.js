import React from "react";
import styles from "../pages/styles.module.css";
import {
  Button,
  Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


const Solved = ({handleReturnToMain, random}) => (
<>
    <Alert  variant="success" className={styles.solved}>
    <Alert.Heading className = {styles.alertMessage}>Congratulations!</Alert.Heading>
    <p className = {styles.alertMessage}>
    You have guessed all the numbers and won the game!!! 
    The number you guessed is {random}
    </p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={handleReturnToMain} variant="outline-success">
        Back to game!
      </Button>
    </div>
  </Alert>
</>
)

export default Solved;