import { useState } from 'react';
import createCat from './utils/create_cat.js';
import Cat from './cat.jsx';

const Cats = () => {
    const [cats, setCats] = useState([]);

    const handleClick = () => {
        const newCat = createCat();

        setCats(cats.concat([newCat]));
    }

    return (
        <div>
            <h1>My Cats</h1>
            <button onClick={handleClick}>Adopt a Cat</button>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {
                    cats.map((cat) => {
                        return <Cat age={cat.age} breed={cat.breed} name={cat.name} key={cat.name} />;
                    })
                }
            </div>
        </div>
    );
};

export default Cats;
