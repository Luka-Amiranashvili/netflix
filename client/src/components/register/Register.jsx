import './register.css';

function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lukasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lukasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' className="loginInput" />
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='password' className="loginInput" />
                        <input placeholder='password Again' className="loginInput" />
                        <button className="loginButton">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
