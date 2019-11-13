import React from 'react';
import logo from './logo.svg';
import './App.css';
import sender from './services/sender'

function App() {
    return (
        <div className="App">
            <div className="uk-container">
                <CommonBtn handler={sender.add} type='default' message='Add'/>
                <CommonBtn handler={sender.copy} type='primary' message='Copy'/>
                <CommonBtn handler={sender.clear} type='secondary' message='Clear'/>
            </div>
        </div>
    );
}

class CommonBtn extends React.Component {
    render() {
        return <button onClick={this.props.handler()}
                       className={'uk-button uk-button-' + this.props.type + ' uk-width-1-1 uk-margin-small-bottom'}>{this.props.message}</button>;
    }
}

export default App;
