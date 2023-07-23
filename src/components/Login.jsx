import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Modal = styled.div`
    //border: solid red;
    
    position: absolute;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;

    form {
        //border: solid blue;
        background-color: white;
        width: 100%;
        height: 100%;
        padding: 1.5em;
        padding-top: 3em;
        border-radius: .3em;
        position: relative;

        @media only screen and (min-width: 500px) {
            max-width: 400px;
            height: auto;
            //aspect-ratio: 1/.75;
        }

        #exit-btn {
            //border: solid red;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
            margin-right: 1.5em;
            cursor: pointer;
        }

        .input-group {
            display: flex;
            flex-direction: column;

            label {
                margin: .5em 0;
                font-weight: bold;
            }

            input {
                padding: 1em;
                border-radius: .3em;
                //margin-bottom: .7em;
            }
        }

        button {
            padding: .75em;
            border-radius: .3em;
            margin-top: 1.5em;
            cursor: pointer;
        }
    }
`

const Login = (props) => {

    if (!props.show) {
        return null;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = {
            method: "post",
            url: "https://explorer-hub-backend.onrender.com/login",
            data: {
                email,
                password
            }
        }

        axios(config)
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
    }

    return (
        <Modal>
            <form>
                <button id="exit-btn" type="button" onClick={props.onClose}>X</button>
                <div className="input-group">
                    <label>E-Mail</label>
                    <input type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </button>
            </form>    
        </Modal>
        
    )
}

export default Login;