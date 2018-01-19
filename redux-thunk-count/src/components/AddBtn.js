import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	ADD_COUNT,
} from './constants';

import { 
	fetchCount,
} from './action';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	Add: () => { dispatch(fetchCount(ADD_COUNT)) }
});

class AddBtn extends Component {
	render() {
		const {
			Add,
		} = this.props
		return (
			<button onClick={Add}>+</button>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBtn)
// fetch tutorial
// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html