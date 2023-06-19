import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count+1);
    };
    const decrease = () => {
        setCount(count-1);
    };
    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        {count}
        <div>
            <button onClick={increase}>Increase</button>
        </div>
        <div><button onClick={decrease}>Decrease</button></div>
        <button onClick={reset}>Reset</button>
        <p></p>
    </div>
  )
}
