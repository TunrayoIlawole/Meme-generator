import React, { Component } from 'react';
import FilterBar from './components/FilterBar';
import getmemes from './api/getmemes';
import MemesList from './components/MemesList';

class App extends Component {
	state = {
		memes: [],
		memes2: []
	}

	componentDidMount = async() => {
		const response = await getmemes.get('get_memes');
		console.log(response);

		this.setState({
			memes: response.data.data.memes
		})
	}

	searchName = async(term) => {
		this.searchName.called = true;
		const response = await getmemes.get('get_memes');
		const actualRes = response.data.data.memes;

		const returnedData = actualRes.filter((word) => {
			return word.name.toLowerCase().includes(term);
		});

		this.setState({
			memes2: returnedData
		})
	}

	renderContent() {
		if (this.searchName.called && this.state.memes2.length === 0) {
			console.log('not found');
			return <div>No result found</div>
		}

		if(this.searchName.called) {
			return <MemesList memes = {this.state.memes2} />
		}

		return <MemesList memes = {this.state.memes} />
	}

	render() {
		return (
			<div className = "ui container" style = {{marginTop: '10px'}}>
				<FilterBar onInput = {this.searchName} />
				{this.renderContent()}
			</div>
		)
	}
}

export default App;