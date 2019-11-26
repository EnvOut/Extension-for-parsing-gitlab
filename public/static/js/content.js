/*global chrome*/
import $ from "jquery";

const selectors = {
    title: 'h2.title',
    taskNumber: '.breadcrumbs-sub-title > a',
    project: '.js-breadcrumb-item-text:last'
};

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
//     const firstRedItem = document.querySelector('.red');
//     const greenListItems = document.querySelectorAll('li.green');

    let title = $('h2.title').text();
    let number = $('.breadcrumbs-sub-title > a').text();
    let project = $('.js-breadcrumb-item-text:last').text();

    // let title = document.querySelector(selectors.title).textContent;
    // let number = document.querySelector(selectors.taskNumber).textContent;
    // let project = document.querySelector(selectors.project).textContent;


    return project + number + ' ' + title;
}

