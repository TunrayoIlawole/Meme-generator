import React, { Component } from 'react';

class FilterBar extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    onFormInput = () => {
        this.props.onInput(this.state.term);
    }

    render() {
        return (
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Meme search</label>
                        <input
                            type = "text"
                            value = {this.state.term}
                            onChange = {(e) => this.setState({
                                term: e.target.value.toLowerCase()
                            })}
                            onInput = {this.onFormInput}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default FilterBar;