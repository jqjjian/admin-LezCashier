
// module.exports = function(){
// 	var element = document.createElement('h1');
// 	element.innerHTML = "hello world!1111111";
// 	return element;
// };
// import React from 'react'
// import $ from 'jquery'

class Comment extends React.Component {
	render() {
		return (
			<div>
				<div className="comment-body">
					{this.props.children}
				</div>
				<div className="comment-author">
					{this.props.author}
				</div>
			</div>
		);
	}
}


class CommentList extends React.Component {
	render() {
		var commentNode = this.props.comments.map(function(arr,index){
			return <Comment key={"comment-"+ index } author={arr.author}>{arr.body}</Comment>
		});
		return (
			<div className="comment-list">
				{commentNode}
			</div>
		);
	}
}

class CommentForm extends React.Component {

	handleSubmit(e){
		e.preventDefault();
		const author = this.refs.author.getDOMNode().value.trim(),
					body = this.refs.body.getDOMNode().value.trim(),
					form = this.refs.form.getDOMNode();
		this.props.onSubmit({author: author, body: body})
		form.reset();
	}
	render() {
		return (
			<form className="comment-form" ref="form" onSubmit={e => {this.handleSubmit(e)}}>
				<input type="text" placeholder="Your name" ref="author" />
				<input type="text" placeholder="Input Your comment" ref="body" />
				<input type="submit" placeholder="Your name" value="Add comment" />
			</form>
		);
	}
}

export default class CommnetBox extends React.Component {
	constructor(props) {
		super();
		this.state = {
			comments: props.comments || []
		}
	}

	loadDataFromServer(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: comments => {
				this.setState({comments: comments});
			},
			error: (xhr, status, err) => {
				console.log(err.toString());
			}
		});
	}

	handleNewComment(comment){
		const comments = this.state.comments,
					newComments = comments.concat([comment]);
		this.setState({comments: newComments});
		setTimeout(()=>{
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				type: 'POST',
				data: comment,
				success: comments => {
					this.setState({comments: comments});
				},
				error: (xhr, status, err) => {
					this.setState({comments: comments});
					console.log(err.toString());
				}
			});
		},2000);
	}

	componentDidMount() {
		this.loadDataFromServer();
	}
	render() {
		return (
			<div className="comment-box">
				<h1>Comments</h1>
				<CommentList comments={this.state.comments}/>
				<CommentForm onSubmit={comment => this.handleNewComment(comment)} />
			</div>
		);
	}
}


// box = React.render(
// 	<CommnetBox url="comments.json" />,
// 	document.getElementById('content')
// );

