import React from "react";
import styles from "../pages/styles.module.css";
import {
  Button,
  Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const GameOver = ({handleReturnToMain,attempts,random}) => (
    <Alert  variant="danger" className={styles.solved}>
    <Alert.Heading className = {styles.alertMessage}>Sorry, you've lost!</Alert.Heading>
    <p className = {styles.alertMessage}>
      Unfortunately you have exhausted all {attempts} guess attempts and none has matched the number!!!
    </p>
    <p className = {styles.alertMessage}>
      The number you were trying to guess was {random}
    </p>
    <hr/>
    <div className="d-flex justify-content-end">
      <Button onClick={handleReturnToMain} variant="outline-danger">
      Back to game!
      </Button>
    </div>
</Alert>
)

export default GameOver;