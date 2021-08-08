import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likeCount: 15},
  { id: 2, message: "It's my first post", likeCount: 20}
];

let dialogsData = [
  { id: 1, name: "Artem" },
  { id: 2, name: "Butuz" },
  { id: 3, name: "Sanchez" },
  { id: 4, name: "Seriy" },
  { id: 5, name: "Egor" },
  { id: 6, name: "Andrey" }
];

let messages = [
  { id: 1, item: 'Hi' },
  { id: 2, item: 'How is your it-kamasutra?' },
  { id: 3, item: 'Yo' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
