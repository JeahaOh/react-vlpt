import React, { useState } from "react";
import { Prompt } from "react-router-dom";

const Blocking = () => {
  const [isBlocking, setIsBlocking] = useState(false);
  return (
    <>
      <div>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Aure you sure you want to go ${location.pathname}?`
          }
        />
        <p>Blocking? {isBlocking ? "click a link or back button" : "Nope"}</p>
        <button onClick={() => setIsBlocking(true)}>blocking</button>
      </div>
    </>
  );
};

export default Blocking;
