import { Log } from "../utils/logger";

function LoginButton() {

  const handleClick = () => {

    Log(
      "frontend",
      "info",
      "component",
      "Login button clicked"
    );

  };

  return (

    <button onClick={handleClick}>
      Login
    </button>

  );
}

export default LoginButton;