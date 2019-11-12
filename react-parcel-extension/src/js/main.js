import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import Button from './components/Button';

class App extends React.Component {
    render() {
        return (
            <div>
                Your App injected to DOM correctly!
                <Button/>
            </div>
        )
    }
}

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
    // If message is injectApp
    if (request.injectApp) {
        // Inject our app to DOM and send response
        console.log('inject ');
        // injectApp();
        response({
            startedExtension: true,
        });
    }
});

function injectApp() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "chromeExtensionReactApp");
    document.body.appendChild(newDiv);
    ReactDOM.render(<App/>, newDiv);
}

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

