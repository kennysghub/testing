import React,{useState} from 'react';
import Socket from  './Socket';
import Counter from './components/Counter';

export default function App() {
    const [data,setData] = useState('')

    const handleClick = async() => {
        fetch('/api')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(`Error: ${err}`))
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        {data ? <p>{data}</p>:<p>null</p>}
        <Counter />
        <Socket />
    </div>
  )
}
