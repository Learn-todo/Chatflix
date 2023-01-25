import AppleIcon from "../icons/apple-icon";
import GoogleIcon from "../icons/google-icon";
import EmailIcon from "../icons/email-icon";

/**
 *
 * @param text The text you want displayed in the button.
 * @param icon Appropriate icon for the Button. Valid options are google, apple or email.
 *
 * @return {JSX.Element} A Sign Up button. Either Google Sign up, Apple Sign up or Email Sign up.
 */
const SignUpButton = ({ text, icon }) => {
  return (
    <button
      className={`py-4 w-full max-w-sm bg-white-100 gap-2 text-black-1100 hover:shadow-lg hover:shadow-gray/40 outline-1 outline-offset-1 outline-primary-900/40 transition ease-out duration-300 flex items-center justify-center rounded-[5px]`}
    >
      {icon === "google" && <GoogleIcon />}
      {icon === "apple" && <AppleIcon />}
      {icon === "email" && <EmailIcon className={`fill-black-900`} />}
      <p className={`font-medium text-xl`}>{text}</p>
    </button>
  );
};

export default SignUpButton;
