import React from 'react';
import ReactDOM from 'react-dom';

const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
   

ReactDOM.render(<>
<h1>This is my first challenge to build a web</h1>
<p>the web contains list of my fav web</p>
<ol>
    <li>Breakin Bad</li>
    <li>Money Heist</li>
    <li>Lil bunty</li>
<p>The date is {date}</p>
<p>The time is {time}</p>
</ol>
</>,
document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';

// const name="Anurag";

// ReactDOM.render(<>
// <h1 contentEditable="false"> My name is {name}</h1> </>,
// document.getElementById("root"));