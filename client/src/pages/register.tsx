import Grid from "./components/grid";
import Navbar from "./components/navbar";

import { RegisterBox } from "./components/registerBox";

function Register() {
    return (
        <Grid>
            <Navbar currentRoute='/register'></Navbar>
            <div className="grid-centerbox">
                <RegisterBox/>
            </div>
        </Grid>
    )
}

export default Register;