import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
	static PropTypes = {};

	state = {
		username: ''
	};

	render() {
		return (
			<div>
				Name: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
			</div>
		)
	}

	handleUserChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}
}

export default UserForm