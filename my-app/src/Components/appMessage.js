import React, { Component, PropTypes } from 'react';
import './style/style.css';


class AppMessage extends Component {
    static propTypes = {
         text: PropTypes.string
    };

    render() {
        return (
            <div className="message">
                { this.props.text }
            </div>
        );
    }
}

export default AppMessage;