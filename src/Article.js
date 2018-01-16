import React, {Component} from 'react'
import PropsTypes from 'prop-types'
import CommentsList from './CommentsList'

export default class Article extends Component {
	static propTypes = {
		article: PropsTypes.share({
			id: PropsTypes.string.isRequired,
			title: PropsTypes.string.isRequired,
			text: PropsTypes.string
		})
	}

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}
	}

	render() {
		const {article} = this.props;
		const {isOpen} = this.state;

		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={this.toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		if (!this.state.isOpen) return null;

		const {article} = this.props;

		return (
			<section>
				{article.text}
				<CommentsList comments={article.comments}/>
			</section>
		)
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

// export default function Article(props) {
// 	const {article} = props;
//
// 	return (
// 		<div>
// 			<h3>{article.title}</h3>
// 			<section>{article.text}</section>
// 		</div>
// 	)
// }