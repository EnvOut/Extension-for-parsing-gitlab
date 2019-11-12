import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="uk-container">
                <CommonBtn handler={handleAdd} type='default' message='Add'/>
                <CommonBtn handler={handleCopy} type='primary' message='Copy'/>
                <CommonBtn handler={handleClear} type='secondary' message='Clear'/>
            </div>
        </div>
    );
}

var locations = [];

function handleAdd() {
    locations.push(window.location.href)
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

function handleCopy() {
    let text = locations.join(",");

    // chrome.tabs.getSelected(null,function(tab) {
    //     text = tab.url;
    // });

    copyToClipboard(text);
    console.log('title: ' + document.title);
}

function handleClear() {
    locations.length = 0;
}

class CommonBtn extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <button onClick={this.props.handler()}
                       className={'uk-button uk-button-' + this.props.type + ' uk-width-1-1 uk-margin-small-bottom'}>{this.props.message}</button>;
    }
}

export default App;
