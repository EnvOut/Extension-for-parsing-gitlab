// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./content.css";
//
// class Main extends React.Component {
//     render() {
//         return (
//             <div className={'my-extension'}>
//                 <h1>Hello world - My first Extension</h1>
//             </div>
//         )
//     }
// }
//
// const app = document.createElement('div');
// app.id = "my-extension-root";
// document.body.appendChild(app);
// ReactDOM.render(<Main />, app);

import $ from "jquery";

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
    // If message is injectApp
    console.log('received message: ', request);
    if (request.addUrl) {
        // Inject our app to DOM and send response
        let data = fetchData();
        console.log('sends data: ', data);
        response({
            cloned: true,
            clonedText: data
        });
    }
});

function fetchData() {
// url = window.location.href
    let title = $('h2.title').text();
    let number = $('.breadcrumbs-sub-title > a').text();
    let project = $('.js-breadcrumb-item-text:last').text();

    return '- ' + project + number + ' ' + title;

}

