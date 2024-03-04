import axios from "axios";



const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",

})

export const getAllMovie = () => {
    return instance.get("/")
}

