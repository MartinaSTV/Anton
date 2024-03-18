import { useRecoilState } from "recoil";
import { logIn } from "../LogInService";
import { useState } from "react";
import Token from "../../../atoms/Token";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [, setToken] = useRecoilState(Token);
  const navigate = useNavigate();

  const handelOnLogIn = () => {
    logIn(username, password, setToken);
    navigate("/Journal");
  };

  return (
    <section>
      <h1>Logga In</h1>
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
        <button type="submit" onClick={handelOnLogIn}>
          Logga in
        </button>
      </form>
    </section>
  );
};
export default LogIn;
