import React, {Component} from 'react'
import PropsTypes from 'prop-types'
import CommentsList from './CommentsList'

class Article extends Component {
	static propTypes = {
		article: PropsTypes.shape({
			id: PropsTypes.string.isRequired,
			title: PropsTypes.string.isRequired,
			text: PropsTypes.string
		})
	};

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props;

		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		const {article, isOpen} = this.props;

		if (!isOpen) return null;

		return (
			<section>
				{article.text}
				<CommentsList comments={article.comments}/>
			</section>
		)
	}
}

export default Article