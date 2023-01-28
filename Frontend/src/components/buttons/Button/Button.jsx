import styles from "./style.module.css";

const Button = ({ type, size, text }) => {
	return (
		<button
			className={`${type === "primary" && styles._primary} ${
				type === "secondary" && styles._secondary
			} ${size === "big" && styles._big} ${
				size === "small" && styles._small
			} ${styles._button}`}
		>
			<p className={styles._text}>{text}</p>
		</button>
	);
};

export default Button;
