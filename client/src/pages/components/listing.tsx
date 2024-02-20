import { useCookies } from "react-cookie";

import { parseJwt } from "../../jwtDecode";
import "./listing.css";

function EditButton(props) {
  return <button className="editButton">Edit</button>;
}

export function Listing(props) {
  const [cookies, _] = useCookies(["user"]);

  const admin =
    (cookies.user && parseJwt(cookies.user)
      ? parseJwt(cookies.user).role
      : null) == 1;

  return (
    <div className="articleListing">
      <div className="atitle">{props.title}</div>
      <img className="image" src={props.img} />
      {admin ? <></> : <EditButton />}
    </div>
  );
}
