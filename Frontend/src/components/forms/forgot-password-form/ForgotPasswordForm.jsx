import { Button, Input } from "../..";
import styles from "./style.module.css";

const ForgotPasswordForm = () => {
	return (
		<div className={styles._container}>
			<Input type={`email`} name={`email`} placeholder={`Email`} />
			<Button size={`big`} text={`Continue`} type={`primary`} />
		</div>
	);
};

export default ForgotPasswordForm;
