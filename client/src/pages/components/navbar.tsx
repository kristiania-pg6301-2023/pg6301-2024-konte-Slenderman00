import { useCookies } from "react-cookie";

import "./navbar.css";
import logo from "../../assets/theflt.png";
import { parseJwt } from "../../jwtDecode";

function NavbarButton(props: any) {
  const isActive = props.isActive;

  return (
    <ul>
      <li>
        <a href={props.href} className={isActive ? "active" : ""}>
          {props.name}
        </a>
      </li>
    </ul>
  );
}

function NavbarLogo() {
  return <img src={logo} className="logo" />;
}

function Navbar(props: any) {
  const [cookies, _] = useCookies(["user"]);

  const currentRoute = props.currentRoute;

  //this checks if the user cookie exist, and if it is parsable (by trying to parse it)
  const username =
    cookies.user && parseJwt(cookies.user)
      ? parseJwt(cookies.user).username
      : null;

  return (
    <div className="navbar-container">
      <div className="sub-container">
        <NavbarButton
          href="/pg6301-2024-konte-Slenderman00/"
          name="HOME"
          isActive={currentRoute === "/"}
        />
        <NavbarButton
          href="/pg6301-2024-konte-Slenderman00/news"
          name="NEWS"
          isActive={currentRoute === "/news"}
        />
      </div>
      <NavbarLogo />
      <div className="sub-container">
        {cookies.user ? (
          <>
            <NavbarButton
              href="/pg6301-2024-konte-Slenderman00/profile"
              name={username}
              isActive={currentRoute === "/profile"}
            />
            <NavbarButton
              href="/pg6301-2024-konte-Slenderman00/logout"
              name="LOGOUT"
              isActive={false}
            />
          </>
        ) : (
          <>
            <NavbarButton
              href="/pg6301-2024-konte-Slenderman00/login"
              name="LOGIN"
              isActive={currentRoute === "/login"}
            />
            <NavbarButton
              href="/pg6301-2024-konte-Slenderman00/register"
              name="REGISTER"
              isActive={currentRoute === "/register"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
