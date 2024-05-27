import React from 'react';

function About({ visits }) {
    return (
        <div>
            <h1>Welcome to the About Page!</h1>
            <p>Home page has been visited {visits} times.</p>
        </div>
    );
}

export default About;
