import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


const Book = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [books, setBooks] = useState(null);
    const BASE_URL = 'http://localhost:8650/api';

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`${BASE_URL}/books/${id}`);
                const data = await res.json();
                setBooks(data.book);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBook();
    });

    return (
        <>
            {
                books ? (
                    <>
                        <section className="flex justify-center items-center pt-12">
                            <div className={`bg-[url('${books.image}')] bg-red-700 bg-opacity-75 px-6 py-2 shadow rounded w-[80%] h-[80vh] ml-2 text-white flex flex-col items-center justify-between relative`} style={{ backgroundImage: `url('${books.image}')`, backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <center className="m-2 w-full bg-black p-2">
                                    <h1 className="text-4xl font-bold text-center text-red-600">{books.title}</h1>
                                </center>
                                <div key={books.id} className="absolute bottom-0 right-[2px] left-[2px] bg-black bg-opacity-85">
                                    {/* <img src={books.image} alt={books.title} className="w-full h-full object-cover" /> */}
                                    <div className="text-center">
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-gray-600 font-bold text-left">Author:</span> {books.author}</p>
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-gray-600 font-bold text-left">Description:</span> {books.desc}</p>
                                    </div>
                                    <div className="hidden bg-black bg-opacity-75 font-bold details z-[-1] opacity-0">
                                        <p className="text-sm tracking-wider text-gray-300">{books.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl text-center mt-4">Loading...</h1>
                    </>
                )
            }
        </>
    )
}

export default Book;
