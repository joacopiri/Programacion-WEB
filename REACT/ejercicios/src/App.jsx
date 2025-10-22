import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Formulario from './components/CapInput'
import Texto from './components/useState'
import Efecto1 from './components/useEffect'
import Efecto2 from './components/useEffect-useState'
import Conceptos from './components/todos-los-conceptos'


function App() {
  const [count, setCount] = useState(0)

  function myFunction(id) {
    return id 
  }

  const myFunct = (id) => id 



  useEffect(() => {
    //se va a ejecutar el codigo que necesitemos
    console.log(count)
    


  }, [count])//los corchetes van las dependencias 

  return (
    <>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Conceptos />
    </>
  )
}

export default App