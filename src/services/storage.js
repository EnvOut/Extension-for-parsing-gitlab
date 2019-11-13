/*global chrome*/

import utils from "./utils";
import stateStore from "./state"

class SyncStorage {
    key = 'gitlab-helper.storage';

    addData(resp) {
        console.log('addData: ', resp);

        const currentKey = this.key;

        let state = stateStore.getActiveState();
        const element = {resp, state};
        chrome.storage.sync.get(this.key, function (result) {
            console.log('storage result: ', result);
            let data = result[currentKey];
            if (!data) {
                console.log('Data is not initialized');
                data = {items: [], key: currentKey};
            }
            console.log('data in storage: ', data);
            data.items.push(element);

            chrome.storage.sync.set({[currentKey]: data}, function () {
                console.log('Value is set to ' + data);
            });
        });
    }

    showData() {
        const currentKey = this.key;

        chrome.storage.sync.get(this.key, function (result) {
            console.log('showData: ', result);

            console.log('clone');
            if (result && result[currentKey] && result[currentKey].items) {
                const data = result[currentKey].items;
                console.log('data: ', data);
                if (data) {
                    let text = data.filter(i => i)
                        .filter(it => it.resp)
                        .map(it => elementToText(it))
                        .join('\n');
                    utils.copyToClipboard(text)
                }

            }
        });
    }

    clearData() {
        chrome.storage.sync.remove([this.key], function () {
            console.log('Was deleted ');
        });
    }
}

function elementToText(element) {
    const statePart = element.state ? '\n    Status: ' + element.state : '';
    return element.resp + statePart;
}

export default new SyncStorage();

