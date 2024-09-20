import "./styles.css";

import { useState } from "react";
import Enemy from "./components/Enemy";
import Button from "./components/Button";
import runGame from "./utilities/runGame";
import initialEnemyData from "./data/initialEnemyData";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [enemiesData, setEnemiesData] = useState(initialEnemyData);

  runGame(gameRunning, setEnemiesData);

  return (
    <div className="wrapper">
      <div className="meadow-container">
        <div className="castle-container">
          {enemiesData.map((enemy)=>(
            <Enemy key={enemy.id} top={enemy.position.top} left={enemy.position.left} transform={enemy.orientation} image={enemy.altImage}/>
          ))}
        </div>
      </div>

      <Button stateProps={{ gameRunning, setGameRunning }} />
    </div>
  );
}
