import React, {Component, PureComponent} from 'react'
import PropsTypes from 'prop-types'
import CommentsList from './CommentsList'
import {CSSTransitionGroup} from 'react-transition-group'
import './article.css'

class Article extends PureComponent {
	static propTypes = {
		article   : PropsTypes.shape({
			id   : PropsTypes.string.isRequired,
			title: PropsTypes.string.isRequired,
			text : PropsTypes.string
		}).isRequired,
		isOpen    : PropsTypes.bool,
		toggleOpen: PropsTypes.func
	};

	state = {
		updateIndex: 0
	};

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.isOpen !== this.props.isOpen
	// }

	render() {
		const {article, isOpen, toggleOpen} = this.props;

		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				<CSSTransitionGroup
					transitionName="article"
					transitionAppear
					transitionEnterTimeout={300}
					transitionLeaveTimeout={500}
					transitionAppearTimeout={500}
					component="div"
				>
					{this.getBody()}
				</CSSTransitionGroup>
			</div>
		)
	}

	getBody() {
		const {article, isOpen} = this.props;

		if (!isOpen) return null;

		return (
			<section>
				{article.text}
				<button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
				<CommentsList comments={article.comments} key={this.state.updateIndex}/>
			</section>
		)
	}
}

export default Article