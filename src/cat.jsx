const Cat = ({
    name,
    breed,
    age,
}) => {
    return (
        <div
            style={{
                border: 'solid 1px purple',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1em',
                margin: '1em',
            }}
        >
            <h3>{name}</h3>
            <h4>Breed: {breed}</h4>
            <h4>Age: {age}</h4>
        </div>
    );
};

export default Cat;
