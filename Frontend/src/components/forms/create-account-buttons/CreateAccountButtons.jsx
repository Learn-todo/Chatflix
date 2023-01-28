import { SocialLogin, Demarcation } from "../..";
import styles from "./style.module.css";

const CreateAccountButtons = () => {
	return (
		<div className={styles._container}>
			<div className={styles._social}>
				<SocialLogin icon={`google`} text={`Sign up with Google`} />
				<SocialLogin icon={`apple`} text={`Sign up with Apple`} />
			</div>
			<Demarcation />
			<SocialLogin icon={`email`} text={`Sign up with Email`} />
		</div>
	);
};

export default CreateAccountButtons;
