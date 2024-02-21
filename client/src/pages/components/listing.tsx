import { useCookies } from "react-cookie";

import { parseJwt } from "../../jwtDecode";
import "./listing.css";

function EditButton(props: any) {
  return (
    <button
      className="editButton"
      onClick={() => {
        document.location.href = `/pg6301-2024-konte-Slenderman00/editor/${props.id}`;
      }}
    >
      Edit
    </button>
  );
}

export function Listing(props: any) {
  const [cookies, _] = useCookies(["user"]);

  const admin =
    (cookies.user && parseJwt(cookies.user)
      ? parseJwt(cookies.user).role
      : null) == 1;

  return (
    <div className="articleListing">
      <div
        onClick={() => {
          document.location.href = `/pg6301-2024-konte-Slenderman00/article/${props.id}`;
        }}
      >
        <div className="atitle">{props.title}</div>
        <img className="image" src={props.img} />
        <div className="category">
            {props.category}
        </div>
      </div>
      {admin ? <EditButton id={props.id} /> : <></>}
    </div>
  );
}
