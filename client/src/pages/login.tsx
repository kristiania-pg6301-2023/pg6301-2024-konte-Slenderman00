import { Grid } from "./components/grid";
import Navbar from "./components/navbar";

import { LoginBox } from "./components/loginBox";

function Login() {
  return (
    <Grid>
      <Navbar currentRoute="/login"></Navbar>
      <div className="grid-centerbox">
        <LoginBox />
      </div>
    </Grid>
  );
}

export default Login;
