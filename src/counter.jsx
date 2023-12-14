import { useState } from 'react';

const Counter = () => {
    // useState => [number, function];
    // const myNumber = useStateReturn[0];
    // const myFunc = useStateReturn[1];
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
