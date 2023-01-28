import { GoogleIcon, AppleIcon, EmailIcon } from "../../../components";
import styles from "./style.module.css";

/**
 *
 * @param text The text you want displayed in the button.
 * @param icon Appropriate icon for the Button. Valid options are google, apple or email.
 *
 * @return {JSX.Element} A Sign Up button. Either Google Sign up, Apple Sign up or Email Sign up.
 */
const SocialLogin = ({ text, icon }) => {
	return (
		<button className={styles._button}>
			{icon === "google" && <GoogleIcon />}
			{icon === "apple" && <AppleIcon />}
			{icon === "email" && <EmailIcon className={styles._email} />}
			<p className={styles._text}>{text}</p>
		</button>
	);
};

export default SocialLogin;
