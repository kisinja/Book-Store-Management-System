
const Login = () => {
    return (
        <div className="text-white">
            <form>
                <div className="mb-3">
                    <label htmlFor="">Username: </label>
                    <input type="text" required placeholder="Enter your username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Password: </label>
                    <input type="password" placeholder="Enter your password" />
                </div>
            </form>
        </div>
    )
}

export default Login
