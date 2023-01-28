import styles from "./style.module.css";
import { useState } from "react";

import {
	EyeIcon,
	UserIcon,
	EmailIcon,
	EyeSlashIcon,
	LockIcon,
} from "../../components";

const Input = ({ type, name, placeholder }) => {
	const [openEye, setOpenEye] = useState(false);
	const [psswd, setPsswd] = useState("password" === type);

	const handleOpenEye = () => {
		setOpenEye((prev) => !prev);

		if (type === "password") {
			setPsswd((prev) => !prev);
		}
	};

	return (
		<div className={styles._container}>
			<input
				className={styles._input}
				placeholder={placeholder}
				id={name}
				name={name}
				type={psswd ? type : "text"}
			/>

			{type === "text" && (
				<UserIcon className={`${styles._icon} ${styles._left}`} />
			)}
			{type === "password" && (
				<LockIcon className={`${styles._icon} ${styles._left}`} />
			)}
			{type === "email" && (
				<EmailIcon className={`${styles._email} ${styles._left}`} />
			)}

			{type === "password" &&
				(openEye ? (
					<EyeIcon
						handleClick={handleOpenEye}
						className={`${styles._icon} ${styles._right}`}
					/>
				) : (
					<EyeSlashIcon
						handleClick={handleOpenEye}
						className={`${styles._icon} ${styles._right}`}
					/>
				))}

			<label className={styles._label} htmlFor={name}>
				{placeholder}
			</label>
		</div>
	);
};

export default Input;
