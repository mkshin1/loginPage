import React, {useState} from 'react'
import axios from 'axios'
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants'
import {withRouter} from 'react-router-dom'
import './RegisterForm.css'


function RegisterForm(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        const {id, value} = e.target

        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // const sendDetailsToServer = () => {
    //     if(state.email.length && state.password.length) {
    //         props.showError(null)
    //         const payload = {
    //             "email": state.email,
    //             "password": state.password
    //         }
    //         axios.post(API_BASE_URL + '/user/register', payload)
    //         .then(res => {
    //             if(res.status === 200){
    //                 setState(prevState => ({
    //                     ...prevState,
    //                     'successMessage': 'Registration successful. Redirecting to home page'
    //                 }))
    //                 localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token)
    //                 redirectToHome()
    //                 props.showError(null)
    //             }
    //             else{
    //                 props.showError("Some error occured")
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     }
    //     else {
    //         props.showError('Please enter valid username and password')
    //     }

    // }

    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/home')
    // }

    // const redirectToLogin = () => {
    //     props.updateTitle('Login')
    //     props.history.push('/login')
    // }

    // const handleSubmitClick = e => {
    //     e.preventDefault()
    //     if(state.password === state.confirmPassword){
    //         // logic
    //         sendDetailsToServer()
    //     }
    //     else {
    //        // logic
    //        props.showError('Passwords do not match')
    //     }
    // }

    return (
        
        <div class="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div class="form-group text-left">
                    <label htmlFor="exampleInputEmail">Email address</label>
                    <input 
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={state.email}
                    onChange={handleChange}
                    />

                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your information with anyone
                    </small>
                </div>

                    <div class="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.passoword}
                        onChange={handleChange}
                        />
                    </div>

                    <div class="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input 
                        type="password"
                        class="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Register
                    </button>

                
            </form>
            
        </div>
    )
}

export default RegisterForm
