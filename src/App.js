import React, { useState } from 'react';
import img from './assets/Hoennash.png'

function App() {
  const [state, setState] = useState(null);
  console.log(typeof state);
  return (
    <div>
      <h1>halo</h1>
      <button onClick={() => setState({ baju: 1, celana: 2, topi: 3 })}>
        state 1
      </button>
      <button onClick={() => setState({ baju: 4, celana: 5, topi: 6 })}>
        state 2
      </button>
      <button onClick={() => setState(null)}>reset state</button>
      {state !== null && (
        <ul>
          <li>{state.baju}</li>
          <li>{state.celana}</li>
          <li>{state.topi}</li>
        </ul>
      )}
      <img src={img} alt="" />
    </div>
  );
}

export default App;
