import { BrowserRouter, Route, Routes } from "react-router-dom"
import Books from "./components/Books"
import Home from "./components/Home"
import Book from "./components/Book"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Books />} path="/books" />
        <Route element={<Book />} path="/books/:id" />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
