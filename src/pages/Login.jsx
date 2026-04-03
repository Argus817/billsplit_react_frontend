import { useState } from 'react'
import LoginRegisterCommon from './LoginRegisterCommon'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/Axios'

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('/auth/token/', form)

            localStorage.setItem("access_token", res.data.access)
            localStorage.setItem("username", res.data.username)

            navigate("/")

        } catch (err) {
            console.error(err)
            alert("Invalid credentials")
        }
    };

    return (
        <LoginRegisterCommon>
            <h1>Billsplits</h1>
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>

            <form className='mb-3' onSubmit={handleSubmit}>
                <input
                    name="username"
                    className="form-control login-form-inputs"
                    placeholder="Username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    className="form-control login-form-inputs"
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                /><br />

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    <i className="bi bi-box-arrow-right"></i>
                    Sign in
                </button>
            </form>

            Not a member? <Link to='/register'>Register</Link>
        </LoginRegisterCommon>
    )
}

export default Login