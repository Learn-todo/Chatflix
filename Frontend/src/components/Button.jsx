const Button = ({ type, size, text }) => {
  return (
    <button
      className={`${
        type === "primary" &&
        "bg-primary text-white active:bg-primary-800 hover:shadow-lg hover:shadow-primary/40"
      } ${
        type === "secondary" &&
        "border-2 border-primary active:border-primary-800 text-primary-600 active:text-primary-800 hover:shadow-lg hover:shadow-primary/40"
      } ${size === "big" && "h-[60px] w-[392px] p-2"} ${
        size === "small" && "py-3 px-10"
      } outline-1 outline-offset-1 outline-primary-900/40 transition ease-out duration-300 flex items-center justify-center rounded-[5px]`}
    >
      <p className={`font-medium text-xl`}>{text}</p>
    </button>
  );
};

export default Button;
