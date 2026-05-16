import { Log } from "../utils/logger";

function UserData() {

  const fetchUsers = async () => {

    try {

      Log(
        "frontend",
        "info",
        "api",
        "Fetching users"
      );

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      console.log(data);

      alert(`Successfully fetched ${data.length} users`);

      Log(
        "frontend",
        "info",
        "api",
        "Users fetched successfully"
      );

    } catch (error) {

      Log(
        "frontend",
        "error",
        "api",
        error.message
      );

    }
  };

  return (
    <button onClick={fetchUsers}>
      Fetch Users
    </button>
  );
}

export default UserData;