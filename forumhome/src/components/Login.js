import React, { useEffect, useState } from "react";
import { Container, Paper, Button } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
    const divStyle = {
        display: "flex"
    }

    const aStyle = {
        textDecoration: "none"
    }

    const [userName, setUserName] = useState("");
    const textUserName = (e: any) => setUserName(e.target.value);

    const [password, setPassword] = useState("");
    const textPassword = (e: any) => setPassword(e.target.value);

    return (
        <Container className="mt-5 w-50">            
            <form
                className="border border-dark p-5">
                <div className="form-group mb-3">
                    <input type="text" onChange={textUserName}
                        value={userName} className="form-control" placeholder="Username..."/>
                </div>
                <div className="form-group mb-3">
                    <input type="password"  className="form-control" placeholder="Password..."
                    onChange={textPassword} value={password}/>
                </div>
                <div className="form-group mb-5">
                    <input type="submit" value="Login" className="btn btn-block btn-primary w-100 mt-2"  
                    />
                </div>

                <div className="form-group mt-5 text-center">
                    <label>Don't have any acount?     </label>
                    <a href="" style={aStyle}>   Register</a>
                </div>
            </form>
        </Container>
    )
}
