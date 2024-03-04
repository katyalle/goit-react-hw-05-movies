import { Routes, Route } from "react-router-dom"
import HomePage from "Pages/HomaPage/HomePage"
import MoviePage from "Pages/MoviePage/MoviePage"
import MainMenu from "./MainMenu/MainMenu"
import NotFoundPage from "Pages/NotFoundPage/NotFoundPage"
import SinglePage from "Pages/SinglePage/SinglePage"

function App() {
  return (
    <div className="App">
      <MainMenu />
      
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="pages/:id" element={ <SinglePage/>} />
        {/* <Route path="*" element={<NotFoundPage/>}/> */}
      </Routes>
    </div>
  )
}
export default App