import './login.scss'

function Register() {
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&s" className='logo' alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sing In</h1>
                    <input type="email" placeholder='Email or phone number' />
                    <input type="password" placeholder=' Password' />
                    <button className="loginButton">
                        Sign In
                    </button>
                    <span>New to Netflix? <b>Sign up now.   </b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Register
