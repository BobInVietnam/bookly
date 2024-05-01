import { loadUserData } from "./data";

export function submitForm(name: string, pass: string) {

  const userDB = loadUserData()
  var user = userDB.find((u) => u.user_id === name)
  if (user === undefined) {
    return "NO_USER";
  } else if (user.password === pass) {
    user.password = "";
    localStorage.setItem("user", JSON.stringify(user));
    return
  } else {
    return "WRONG_PASS";
  }
}