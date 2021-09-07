import React, {useState} from 'react'
import './LoginForm.css'


function LoginForm() {
    const [state, setState] = useState({
        email: "",
        password:"",
        successMessage: null
    })

    const handleChange = e => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    return (
        <div class="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
            <div class="form-group text left">
                <label id="special" htmlFor="exampleInputEmail1">Email address</label>
                <input 
                type="email"
                class="form-control"
                id="email"
                aria-describeby="emailHelp"
                placeholder="enter email"
                value={state.email}
                onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
            </div>

            <div class="form-group text-left">
                <label  htmlFor="exampleInputPassword1">Password</label>
                <input 
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                />
            </div>
            <div>
                <div class="form-check"></div>
            </div>
            <button
                type="submit"
                class="btn btn-primary"
            >Submit</button>
            </form>

            <div class="alert alert-success mt-2" style={{display:state.successMessage ? 'block' : 'none'}} role='alert'>
            {state.successMessage}
            </div>

            <div class="registerMessage">
                <span>Dont have an account?</span>
                <span class="loginText">Register</span>
            </div>
        </div>
    )
}

export default LoginForm
