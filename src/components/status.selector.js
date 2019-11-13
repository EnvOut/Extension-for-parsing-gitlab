import React from 'react'
import stateStore from '../services/state';

class StateSelector extends React.Component {
    constructor(props) {
        super(props);
        // default on state REVIEW
        this.state = {activeId: stateStore.activeId}
    }

    handleClick(activeId) {
        this.setState({activeId})
        stateStore.activeId = activeId;
    }

    render() {

        const stateElementList = stateStore.getStates().map((it, index) => <StateElement id={index}
                                                                                         activeId={this.state.activeId}
                                                                                         handler={id => this.handleClick(id)}
                                                                                         name={it}/>)
        return (
            <ul className="uk-subnav uk-subnav-pill" uk-margin>
                {stateElementList}
            </ul>
        )
    }
}

class StateElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lol: 1}
    }

    render() {
        return <li onClick={e => this.props.handler(this.props.id)}
                   className={(this.props.id === this.props.activeId ? 'uk-active uk-background-primary' : '') }>
            <a href='#'>{this.props.name}</a>
        </li>
    }
}

export default StateSelector;
