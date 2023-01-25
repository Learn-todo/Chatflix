import "./index.css";
import Button from "./components/Button";
import SignUpButton from "./components/SignUpButton";

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
    </div>
  );
}

export default App;
