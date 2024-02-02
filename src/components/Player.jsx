import React,{useState,useRef} from 'react';
export default function Player() {

  const [playerName,setPlayerName]=useState('unknown entity');
  const enteredName=useRef();
  const handleOnClick=()=>{
    setPlayerName(enteredName.current.value);

    enteredName.current.value='';

  }
  return (
    <section id="player">
      <h2>Welcome {playerName ==='' ? 'Unknown entity' : playerName}</h2>
      <p>
        <input type="text" ref={enteredName} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
