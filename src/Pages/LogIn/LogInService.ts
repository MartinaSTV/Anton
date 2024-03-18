import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { appDb } from "../../service/fireB";

const createUser = (
  email: string,
  password: string,
  setToken: (token: string) => void
) => {
  const auth = getAuth(appDb);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user
        .getIdToken()
        .then((accessToken) => {
          setToken(accessToken);
        })
        .catch((error) => {
          console.error("Error getting access token:", error);
        });
    })
    .catch((error) => {
      //fixa felmedelanden
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      // ..
    });
};

const logIn = (
  password: string,
  email: string,
  setToken: (token: string) => void
) => {
  const auth = getAuth(appDb);
  signInWithEmailAndPassword(auth, email, password)
    .then((resp: { user: any }) => {
      // Signed in
      const user = resp.user;
      user
        .getIdToken()
        .then((accessToken: string) => {
          setToken(accessToken);
        })
        .catch((error: any) => {
          console.error("Error getting access token:", error);
        });
    })
    .catch((error: { code: any; message: any }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export { createUser, logIn };
