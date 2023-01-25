import { useState } from "react";
import EyeIcon from "../icons/eye-icon";
import EyeSlashIcon from "../icons/eye-slash-icon";
import LockIcon from "../icons/lock-icon";
import UserIcon from "../icons/user-icon";
import EmailIcon from "../icons/email-icon";

const Input = ({ type, name, placeholder }) => {
  const [openEye, setOpenEye] = useState(true);
  const [psswd, setPsswd] = useState("password" === type);

  const handleOpenEye = () => {
    setOpenEye((prev) => !prev);

    if (type === "password") {
      setPsswd((prev) => !prev);
    }
  };

  return (
    <div className="relative flex w-full max-w-sm text-base font-medium">
      <input
        className="peer autofill:bg-black-700 focus:border-blue-600 outline-none pl-14 py-2 pr-4 border-2 rounded border-gray-300 placeholder:text-transparent enabled:bg-transparent w-full  text-white-1100"
        placeholder={placeholder}
        id={name}
        name={name}
        type={psswd ? type : "text"}
      />

      {type === "text" && (
        <UserIcon
          className={`stroke-white-600 peer-focus:stroke-blue-600 absolute top-2 z-10 left-4 pointer-events-none`}
        />
      )}

      {type === "password" && (
        <LockIcon
          className={`stroke-white-600 peer-focus:stroke-blue-600 absolute top-2 z-10 left-4 pointer-events-none`}
        />
      )}

      {type === "email" && (
        <EmailIcon
          className={`fill-white-600 peer-focus:fill-blue-600 absolute top-2 z-10 left-4 pointer-events-none`}
        />
      )}

      {type === "password" &&
        (openEye ? (
          <EyeIcon
            handleClick={handleOpenEye}
            className={`stroke-white-600 peer-focus:stroke-blue-600 absolute top-2 z-10 right-4`}
          />
        ) : (
          <EyeSlashIcon
            handleClick={handleOpenEye}
            className={`stroke-white-600 peer-focus:stroke-blue-600 absolute top-2 z-10 right-4`}
          />
        ))}

      <label
        className="transition-all -top-[10px] px-2 left-4 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:p-0 peer-placeholder-shown:left-[60px] peer-placeholder-shown:top-[10px] absolute peer-placeholder-shown:bg-transparent bg-black-900 text-white-600 peer-placeholder-shown:text-gray-300 peer-focus:text-blue-600"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
