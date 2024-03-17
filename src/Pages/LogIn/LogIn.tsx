import { createUser } from "./LogInService";
import { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  return (
    <section>
      <h1>Skapa Konto</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="username">Användarnamn</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord</label>
          <input
            onChange={(e) => {
              setPasword(e.target.value);
            }}
            required
            type="text"
            id="password"
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            createUser(username, password);
          }}
        >
          Logga in
        </button>
      </form>
    </section>
  );
};
export default LogIn;
