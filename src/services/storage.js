/*global chrome*/

import utils from "./utils";

class SyncStorage {
    #key = 'gitlab-helper.storage';

    addData(element) {
        console.log('addData: ', element);

        chrome.storage.sync.get(this.#key, function (result) {
            console.log('storage result: ', result);
            let data = result[this.#key];
            if (!data) {
                console.log('Data is not initialized');
                data = {items: [], key: this.#key};
            }
            console.log('data in storage: ', data);
            data.items.push(element);

            chrome.storage.sync.set({[this.#key]: data}, function () {
                console.log('Value is set to ' + data);
            });
        });
    }

    showData() {
        chrome.storage.sync.get(this.#key, function (result) {
            console.log('showData: ', result);

            console.log('clone');
            if (result) {
                var data = result[this.#key].items;
                console.log('data: ', data);
                if (data) {
                    utils.copyToClipboard(data.filter(i => i).join('\n'))
                }
            }
        });
    }

    clearData() {
        chrome.storage.sync.remove([this.#key], function () {
            console.log('Was deleted ');
        });
    }


}

export default new SyncStorage();

