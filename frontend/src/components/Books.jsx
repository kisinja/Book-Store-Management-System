import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
const Books = () => {

    const [books, setBooks] = useState(null);
    const BASE_URL = 'http://localhost:8650/api';


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${BASE_URL}/books`);
                const data = await response.json();
                console.log(data.books);
                setBooks(data.books);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <div className="flex flex-wrap p-4 justify-between w-[90%] mx-auto gap-5" id="books">
                {books && books.map((book) => (
                    <Link key={book.id} to={`/books/${book._id}`}>
                        <div className="bg-red-700 bg-opacity-75 px-6 py-2 shadow rounded w-[300px] ml-2 text-white flex flex-col justify-between relative" id="book">
                            <h1 className="text-xl font-semibold italic underline text-center">{book.title}</h1>
                            <div className="w-full h-[200px]">
                                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-sm tracking-wider text-gray-300"><span className="text-black font-bold text-left">Author:</span> {book.author}</p>
                            <div className="hidden bg-black bg-opacity-75 font-bold details z-[-1] opacity-0">
                                <p className="text-sm tracking-wider text-gray-300">{book.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Books
