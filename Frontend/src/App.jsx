import "./index.css";
import Button from "./components/buttons/Button";
import SignUpButton from "./components/buttons/SignUpButton";
import Input from "./components/Input";

function App() {
  return (
    <div
      className={`w-full flex flex-col items-center p-8 gap-4 h-screen bg-white-700`}
    >
      <Button text={`Primary Button`} type={`primary`} size={`big`} />
      <Button text={`Secondary Button`} type={`secondary`} size={`big`} />
      <Button text={`Sign up`} type={`primary`} size={`small`} />
      <Button text={`Log in`} type={`secondary`} size={`small`} />
      <SignUpButton icon={`google`} text={`Sign up with Google`} />
      <SignUpButton icon={`apple`} text={`Sign up with Apple`} />
      <SignUpButton icon={`email`} text={`Sign up with Email`} />
      <div className="flex flex-col gap-4 items-center w-full bg-black-600 max-w-lg p-8">
        <Input type={`text`} name={`full-name`} placeholder={`Full Name`} />
        <Input type={`text`} name={`username`} placeholder={`username`} />
        <Input type={`email`} name={`email`} placeholder={`Email`} />
        <Input type={`password`} name={`password`} placeholder={`Password`} />
      </div>
    </div>
  );
}

export default App;
