import React, { useEffect, useRef } from 'react';

const Home = ({ visits, setVisits }) => {
    const hasIncremented = useRef(false);

    useEffect(() => {
        if (!hasIncremented.current) {
            setVisits(prevVisits => prevVisits + 1);
            hasIncremented.current = true;
        }
    }, [setVisits]);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Home has been visited {visits} times.</p>
            <p>Banner ID: B00951805</p>
        </div>
    );
};

export default Home;
