const key = 'gitlab-helper.storage';

function addData(element) {
    console.log('addData: ', element);

    chrome.storage.sync.get(key, function (result) {
        console.log('storage result: ', result);
        let data = result[key];
        if (!data) {
            console.log('Data is not initialized');
            data = {items: [],key};
        }
        console.log('data in storage: ', data);
        data.items.push(element);

        chrome.storage.sync.set({[key]:data}, function () {
            console.log('Value is set to ' + data);
        });
    });
}

function showData() {
    chrome.storage.sync.get(key, function (result) {
        console.log('showData: ', result);

        console.log('clone');
        if (result) {
            var data = result[key].items
            console.log('data: ', data);
            if (data) {
                copyToClipboard(data.join('\n'))
            }
        }
    });
}

function clearData() {
    chrome.storage.sync.remove([key], function () {
        console.log('Was deleted ');
    });
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

window.onload = () => {

    const $startButton = document.querySelector('.start');
    $startButton.onclick = () => {
        // Get active tab
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, (tabs) => {
            // Send message to script file
            chrome.tabs.sendMessage(
                tabs[0].id,
                {injectApp: true},
                response => {
                    console.log('succusfull injected app')
                    // window.close()
                }
            );
        });
    };


    const $AddButton = document.querySelector('.add');

    $AddButton.onclick = () => {
        // Get active tab
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
                        addData(resp)
                    }

                    // window.close()
                }
            );
        });
    };


    const $CloneButton = document.querySelector('.clone');
    $CloneButton.onclick = () => {
        let data = showData();
    };


    const $ClearButton = document.querySelector('.clear');
    $ClearButton.onclick = () => {
        clearData();
    };
};
