import React from 'react';


class MemeCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }

        this.memeRef = React.createRef();
    }

    componentDidMount() {
        this.memeRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.memeRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans: spans});
    }

    render() {
        const {name, url} = this.props.meme;
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref = {this.memeRef}
                alt = {name}
                src = {url}
                />
            </div>
        )
    }
}

export default MemeCard;