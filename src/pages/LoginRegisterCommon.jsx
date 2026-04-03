import ThemeButton from '../components/ThemeButton'
import '../assets/loginpage.css'

const LoginRegisterCommon = ({ children }) => {
    return (
        <div className="text-center">
            {children}
            <br></br>
            <h4>
                <ThemeButton />
            </h4>
        </div>
    )
}

export default LoginRegisterCommon
