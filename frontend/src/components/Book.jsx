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
                            <div className={`bg-[url('${books.image}')] bg-red-700 bg-opacity-75 px-6 rounded w-[80%] h-[80vh] text-white flex flex-col items-center justify-between relative`} style={{ backgroundImage: `url('${books.image}')`, backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <center className="m-2 w-full bg-black p-2 rounded-[30px]">
                                    <h1 className="text-3xl font-bold text-center text-white" id="title">{books.title}</h1>
                                </center>
                                <div key={books.id} className=" bg-black bg-opacity-85">
                                    <div className="flex justify-between py-4 px-12">
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-red-600 font-bold text-left">Author:</span> <span id="oswald">{books.author}</span></p>
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-red-600 font-bold text-left">Price: </span>KES <span id="oswald">{books.price}</span></p>
                                    </div>
                                    <div className="flex justify-between py-4 px-12">
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-red-600 font-bold text-left">Genre:</span> <span id="oswald">{books.genre}</span></p>
                                        <p className="text-sm tracking-wider text-gray-300"><span className="text-red-600 font-bold text-left">Year: </span><span id="oswald">{books.year}</span></p>
                                    </div>
                                    <div className="details py-4 px-8 text-center">
                                        <h1 className="text-red-600 font-semibold">Description</h1>
                                        <p className="text-sm tracking-wider text-gray-300">{books.desc}</p>
                                    </div>
                                    <div className="flex justify-between px-8 py-4">
                                        <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700" id="buy">Buy</button>
                                        <button className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700" id="more">Borrow</button>
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
