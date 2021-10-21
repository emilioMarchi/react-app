import React, {useState} from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className='counter'>
            <button className='btn'>+</button>
            <p>{counter}</p>
            <button className='btn'>-</button>
        </div>
    )
}

export default Counter;