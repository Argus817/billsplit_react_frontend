import LoginRegisterCommon from './LoginRegisterCommon'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <LoginRegisterCommon>
            <h1>Billsplits</h1>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>

            <form className='mb-3'>
                <input id="action" name="action" type="hidden" value="login" />
                <input id="username" name="username" className="form-control login-form-inputs" placeholder="Username" required="" type="text" autoCapitalize="none" />
                <input id="password" name="password" className="form-control login-form-inputs" placeholder="Password" required="" type="password" />
                <input id="password_confirm" name="password_confirm" className="form-control login-form-inputs" placeholder="Confirm Password" required="" type="password" /><br />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    <i className="bi bi-box-arrow-right"></i> 
                    Register
                </button>
            </form>
            Already have an account? <Link to='/login'>Log in</Link>
        </LoginRegisterCommon>
    )
}

export default Register
