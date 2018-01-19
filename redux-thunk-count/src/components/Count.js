import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubBtn from './SubBtn';
import AddBtn from './AddBtn';

import {
	INIT_COUNT,
} from './constants';

import { fetchCount } from './action';

var Loader = require('react-loader');

const container ={
	margin: '10px',
}

const mapStateToProps = (state) => ({
	count: state.count,
	isLoadComplete: state.isLoadComplete,
});

const mapDispatchToProps = (dispatch) => ({
	initCount: () => { dispatch(fetchCount(INIT_COUNT)) }
});

class Count extends Component {
	componentDidMount() {
		this.props.initCount();
	}

	render() {
		const {
			count,
			isLoadComplete,
		} = this.props
		return (
			<div style={container}>
				<Loader loaded={isLoadComplete}>
					<SubBtn />
					<div style={{display: 'inline-block', margin: '30px'}}>{count}</div>
					<AddBtn />
				</Loader>
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Count)