import React from 'react';

function About({ visits }) {
    return (
        <div>
            <h1>Welcome to the About Page!</h1>
            <p>Home page has been visited {visits} times.</p>
            <p>Name: Ayush Patel</p>
            <p>Degree: Bachelor's of Applied Computer Science</p>
            <p>University: Dalhousie University</p>
        </div>
    );
}

export default About;
