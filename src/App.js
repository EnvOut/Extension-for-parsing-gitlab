import React from 'react';
import logo from './logo.svg';
import './App.css';
import sender from './services/sender'
import StateSelector from './components/status.selector'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <CommonBtn handler={e => sender.add()} type='default' message='Add'/>
                <CommonBtn handler={e => sender.copy()} type='primary' message='Copy'/>
                <CommonBtn handler={e => sender.clear()} type='secondary' message='Clear'/>
                <div className="uk-container uk-width-1-1"><StateSelector/></div>
            </div>
        );
    }
}

class CommonBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {click: false};
    }

    handleClick() {
        this.setState({click: true});
        setTimeout(() => {
            this.setState({click: false});
        }, 2000);

        this.props.handler()
    }

    render() {
        return <div className={this.state.click === true ? ' uk-animation-slide-right uk-animation-reverse' : ''}>
            <button onClick={e => this.handleClick()}
                    className={'uk-button uk-button-' + this.props.type + ' uk-width-1-1 uk-margin-small-bottom'}>{this.props.message}</button>
        </div>;
    }
}

export default App;
