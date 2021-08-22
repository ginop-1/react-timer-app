import FullTimer from "./components/FullTimer";
import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./index.css";

export default function App() {
  function getStorage() {
    let timerStorage = localStorage.getItem("timerList");
    if (!timerStorage || timerStorage === []) return [];
    return JSON.parse(timerStorage.toString());
  }

  const [timerList, setTimerList] = useState(getStorage());

  function removeTimer(timer) {
    setTimerList((timerList) => timerList.filter((t) => t.id !== timer.id));
  }

  useEffect(() => {
    localStorage.setItem("timerList", JSON.stringify(timerList));
  }, [timerList]);

  return (
    <div id="main">
      {timerList.map((timer) => (
        <FullTimer
          key={timer.id}
          id={timer.id}
          expiryTimestamp={timer.expiryTimestamp}
          removeTimer={() => removeTimer(timer)}
        />
      ))}
      <div
        className={
          timerList.length === 0 ? "add-button before" : "add-button after"
        }
      >
        <IconButton
          onClick={() => {
            // add a new FullTimer component
            const time = new Date();
            time.setSeconds(time.getSeconds() + 0);
            setTimerList((timerList) => [
              ...timerList,
              {
                id: window.prompt("Insert timer name") + ` ${timerList.length}`,
                expiryTimestamp: time,
              },
            ]);
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}
