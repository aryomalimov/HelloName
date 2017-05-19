import React, { Component, PropTypes } from 'react';
import './style/style.css';

class InputField extends Component {

    static propTypes = {
        changerName: PropTypes.func,
        changerSurname: PropTypes.func,
        onClicker: PropTypes.func
    };

    handleNameChange = (e) => {
        this.props.changerName(e.target.value);
    };

    handleSurnameChange = (e) => {
        this.props.changerSurname(e.target.value);
    };

    render() {
        return (
            <form className="form">
                <div className="form__inner">
                    <input type="text" className="form__input form__input_left" onChange={this.handleNameChange}/>
                    <input type="text" className="form__input form__input_right" onChange={this.handleSurnameChange}/>
                </div>
                <div className="form__button" onClick={this.props.onClicker}>
                    Нажми сюда
                </div>
            </form>
        );
    }

}

export default InputField;
