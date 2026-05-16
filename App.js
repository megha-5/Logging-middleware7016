import "./App.css";

import LoginButton from "./components/LoginButton";
import UserData from "./components/UserData";

function App() {

  return (

    <div className="app-container">

      <div className="card">

        <h1>Logging Middleware Dashboard</h1>

        <p className="subtitle">
          React-based reusable logging middleware with API integration.
        </p>

        <div className="button-group">

          <LoginButton />

          <UserData />

        </div>

        <div className="info-box">

          <h3>Features Implemented</h3>

          <ul>
            <li>Reusable Logger Utility</li>
            <li>Frontend Logging Middleware</li>
            <li>API Request Logging</li>
            <li>Error Handling</li>
            <li>React Component Structure</li>
          </ul>

        </div>

      </div>

    </div>

  );
}

export default App;