import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCount } from './action';

import {
	SUB_COUNT,
} from './constants';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	Sub: () => {dispatch(fetchCount(SUB_COUNT))}
});

class SubBtn extends Component {
	render() {
		const {
			Sub,
		} = this.props
		return (
			<button onClick={Sub}>-</button>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SubBtn)
// fetch tutorial
// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html