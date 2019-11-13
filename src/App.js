import React from 'react';
import logo from './logo.svg';
import './App.css';
import sender from './services/sender'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="uk-container">
                    <CommonBtn handler={e=>sender.add()} type='default' message='Add'/>
                    <CommonBtn handler={e=>sender.copy()} type='primary' message='Copy'/>
                    <CommonBtn handler={e=>sender.clear()} type='secondary' message='Clear'/>
                </div>
            </div>
        );
    }
}

class CommonBtn extends React.Component {
    render() {
        return <button onClick={e=>this.props.handler()}
                       className={'uk-button uk-button-' + this.props.type + ' uk-width-1-1 uk-margin-small-bottom'}>{this.props.message}</button>;
    }
}

export default App;
