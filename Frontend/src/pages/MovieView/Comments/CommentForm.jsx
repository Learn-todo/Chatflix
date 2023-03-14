import { useState } from "react";
import "./Comments.css";
import "./style.module.css";

const CommentForm = ({
	handleSubmit,
	submitLabel,
	hasCancelButton = false,
	handleCancel,
	initialText = "",
}) => {
	const [text, setText] = useState(initialText);

	const isTextAreaDisabled = text.length === 0;

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
      };
      

	return (
	
			<form onSubmit={onSubmit} className="position-relative w-100">
				<textarea
					className="comment-form-textarea text-input-text px-4 py-2 w-100 bg-input border-0"
					placeholder="Join the discussion"
					onChange={(e) => setText(e.target.value)}/>
				<button className="comment-form-button" disabled={isTextAreaDisabled}>
					{submitLabel}
				</button>

				{hasCancelButton && (
					<button
						type="button"
						className="comment-form-button comment-form-cancel-button"
						onClick={handleCancel}>
						Cancel
					</button>
				)}
			</form>
	
	);
};

export default CommentForm;
