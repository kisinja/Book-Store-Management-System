import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-red-700 bg-opacity-75 flex justify-between py-3 px-[5%] z-[100000] sticky top-0'>
            <div>
                <Link to="/">
                    <h1 className="text-red-700 text-3xl font-bold tracking-wider italic">BOOK <span className="text-red-400">STORE</span></h1>
                </Link>
            </div>
            <div className='flex gap-8 items-center'>
                <Link to="/" className='text-black hover:text-white hover:italic'>
                    Home
                </Link>
                <Link to="/books" className='text-black hover:text-white hover:italic'>
                    Books
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
