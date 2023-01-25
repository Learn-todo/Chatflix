import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div className={`w-full flex flex-col items-center p-8 gap-4 h-screen`}>
      <Button text={`Primary Button`} type={`primary`} size={`big`} />
      <Button text={`Secondary Button`} type={`secondary`} size={`big`} />
      <Button text={`Sign up`} type={`primary`} size={`small`} />
      <Button text={`Log in`} type={`secondary`} size={`small`} />
    </div>
  );
}

export default App;
