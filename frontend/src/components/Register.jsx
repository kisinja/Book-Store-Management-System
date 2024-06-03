
const Register = () => {
    return (
        <div className="text-white">
            <form>
                <div className="mb-3">
                    <label htmlFor="">Username: </label>
                    <input type="text" required placeholder="Enter your username" />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Email: </label>
                    <input type="text" required placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Password: </label>
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" placeholder="Confirm Password" />
                </div>
            </form>
        </div>
    )
}

export default Register
