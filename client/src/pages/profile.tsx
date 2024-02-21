import { Grid } from "./components/grid";
import Navbar from "./components/navbar";
import { RoundImage } from "./components/rouncImage";
import {
  GenericInput,
  GenericInputLarge,
  GenericSubmit,
} from "./components/inputs";

import { useEffect, useState } from "react";

import "./profile.css";
import { getProfileData, updateProfileData } from "../api";

function Profile() {
  const [user, setUser] = useState({ name: "", bio: "", picture: "" });

  useEffect(() => {
    getProfileData((result: any) => {
      if ("success" in result) {
        setUser(result.success);
      }
    });
  }, []);

  return (
    <Grid>
      <Navbar currentRoute="/profile"></Navbar>
      <div className="editProfileBox">
        <div className="internal">
          <RoundImage src={user.picture} />
          <div className="textInputs">
            <div className="nameBox">{user.name}</div>
            <GenericInputLarge
              value={user.bio}
              callback={(result: any) => {
                setUser((prevUser) => ({ ...prevUser, bio: result }));
              }}
            />
            <GenericInput
              value={user.picture}
              callback={(result: any) => {
                setUser((prevUser) => ({ ...prevUser, picture: result }));
              }}
            />
            <GenericSubmit
              callback={() => {
                updateProfileData(user.bio, user.picture, (result: any) => {
                  if ("success" in result) {
                    alert("saved");
                    location.reload();
                  } else {
                    alert(result.error);
                  }
                });
              }}
            />
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Profile;
