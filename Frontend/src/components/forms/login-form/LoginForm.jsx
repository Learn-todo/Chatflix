import { Button, SocialLogin, Input, Demarcation } from "../..";
import styles from "./style.module.css";

const LoginForm = () => {
	return (
		<div className={styles._container}>
			<div className={styles._buttonContainer}>
				<SocialLogin icon={`google`} text={`Log in with Google`} />
				<SocialLogin icon={`apple`} text={`Log in with Apple`} />
			</div>
			<Demarcation />
			<div className={styles._buttonContainer}>
				<Input type={`email`} placeholder={`Email`} name={`email`} />
				<Input
					type={`password`}
					placeholder={`Password`}
					name={`password`}
				/>
				<Button type={`primary`} text={`Log in`} size={`big`} />
			</div>
		</div>
	);
};

export default LoginForm;
