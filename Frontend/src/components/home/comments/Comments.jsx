import { useState, useEffect } from "react";
import CommentForm from "../comments/CommentForm";
import Comment from "../comments/Comment";
import {
	getComments as getCommentsApi,
	createComment as createCommentApi,
	updateComment as updateCommentApi,
	deleteComment as deleteCommentApi,
} from "./api"; // Api post fix

const Comments = ({currentUserId }) => {
	const [comments, setComments] = useState([]);
	const [activeComment, setActiveComment] = useState(null);
	const rootComments = comments.filter((comment) => comment.parentId === null);

	const getReplies = (commentId) => {
		return comments
			.filter((comment) => comment.parentId === commentId)
			.sort(
				(a, b) =>
					new Date(a.createdAt).getTime() - new Date(b.createdAt.getTime())
			);
	};

	const addComment = (text, parentId) => {
		createCommentApi(text, parentId).then((comment) => {
			setComments([comment, ...comments]);
			setActiveComment(null);
		});

	};

	const updateComment = (text, commentId) => {
		updateCommentApi(text, commentId).then(() => {
			const updatedComments = comments.map((comment) => {
				if (comment.id === commentId) {
					return { ...comment, body: text };
				}
				return comment;
			});
			setComments(updatedComments);
			setActiveComment(null);
		});
	};

    const deleteComment = (commentId) => {
		if (window.confirm("Are you sure you want to delete comment?")) {
			deleteCommentApi(commentId).then(() => {
				const updatedComments = comments.filter(
					(comment) => comment.id !== commentId
				);
				setComments(updatedComments);
			});
		}
	};
	useEffect(() => {
		getCommentsApi().then((data) => {
			setComments(data);
		});
	}, []);
	return (
		<div className="comments">
			<div className="comment-form-title">
				Write Comment
				<CommentForm submitLabel="Post" handleSubmit={addComment} />
			</div>
			<div className="comments-container">
				{rootComments.map((rootComment) => (
					<Comment
						key={rootComment.id}
						comment={rootComment}
						replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
						setActiveComment={setActiveComment}
                        addComment={addComment}
						currentUserId={currentUserId}
						deleteComment={deleteComment}
						updateComment={updateComment}
						
					/>
				))}
			</div>
		</div>
	);
};

export default Comments;
