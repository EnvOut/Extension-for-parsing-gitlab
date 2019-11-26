/*global chrome*/

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

    return project + number + ' ' + title;

}

