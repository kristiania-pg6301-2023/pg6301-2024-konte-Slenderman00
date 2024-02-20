import { useCookies } from "react-cookie";

//logs the user out and yeets the user to a new path

export function Logout() {
  const [_, setCookie] = useCookies(["user"]);
  setCookie("user", "");
  window.location.href = "/";
  return <></>;
}
