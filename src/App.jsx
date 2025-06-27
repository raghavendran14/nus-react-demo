import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/CounterOne'
import CounterPure from './component/CounterTwoPure'


function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [text, setText] = useState('This a test message');
  const [show, setShow] = useState(true)
  console.log("I am in APP");

  return (
    <React.Fragment>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          // nonSteCount = nonSteCount + 1;
          // console.log("nonSteCount --", nonSteCount);

          setCount((count) => count + 1)
          setText("Component updated")
          // setCount1((count1) => count + 1)
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <button
          value={show}
          onClick={() => {
            setShow((show) => !show)
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        {show && <Counter count1={count1} updateCount={(count1) => {
          console.log("count1 ", count);

          setCount1(count1)
        }} />}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



      <CounterPure text={text} />

    </React.Fragment>
  )

  // return (
  //   <>
  //     {/* <Message text="This should not re-render every time!" /> */}
  //     <CounterPure text={text} />
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //   </>
  // );
}

export default App
