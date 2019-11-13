/*global chrome*/
import storage from "./storage";

class Sender {
    add() {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, (tabs) => {
            // Send message to script file
            chrome.tabs.sendMessage(
                tabs[0].id,
                {addUrl: true},
                response => {
                    console.log('response: ', response);
                    if (response && response.cloned) {
                        let resp = response.clonedText;
                        console.log('received: ', resp);
                        storage.addData(resp)
                    }
                }
            );
        })
    }

    copy() {
        storage.showData()
    }

    clear() {
        storage.clearData()
    }
}

export default new Sender();

