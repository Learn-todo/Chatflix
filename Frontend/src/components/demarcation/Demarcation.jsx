import styles from "./style.module.css";

const Demarcation = () => {
	return (
		<div className={styles._demarcationContainer}>
			<div className={styles._demarcationLine}></div>
			<p className={styles._demarcationText}>or</p>
			<div className={styles._demarcationLine}></div>
		</div>
	);
};

export default Demarcation;
