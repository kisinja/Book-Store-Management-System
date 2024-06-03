import { BrowserRouter, Route, Routes } from "react-router-dom"
import Books from "./components/Books"
import Home from "./components/Home"
import Book from "./components/Book"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Books />} path="/books" />
        <Route element={<Book />} path="/books/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
