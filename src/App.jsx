import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewComponent from './NewComponent'

function App() {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState(['Vignesh', 'Abhiram', 'Bharath', 'prasad'])
  const [value, setValue] = useState('');
  function handleChange(e) {
        setNames([...names, e.target.value]);
        setValue(e.target.value);
    }

  const videoMap = {
    'Vignesh': 'https://www.youtube.com/embed/vQcHPQJ4Ujs?si=sGDSzhQetr87Plo1',
    'Abhiram': 'https://www.youtube.com/embed/5beOlS5Ts24?si=D56mHR7CsIBuVDCy',
    'Bharath': 'https://www.youtube.com/embed/vQcHPQJ4Ujs?si=sGDSzhQetr87Plo1',
    'prasad': 'https://www.youtube.com/embed/vQcHPQJ4Ujs?si=sGDSzhQetr87Plo1'
    
  }  

  
  return (
     <>
      {names.map((name) => (
        <>
     
      <h1>{name} + React</h1>
      <iframe width="560" height="315" src={videoMap[name]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
      ))}
      <input value={value} onChange={handleChange}/>
    </>

  )
}


export default App
