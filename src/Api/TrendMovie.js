import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
})

export const getAllMovies = ()=> {
    return instance.get("/");
}

export const getMoviesById = id => {
    return instance.get(`/${id}`);
}

export const searchMovies= (q, _page = 1) => {
    return instance.get("/", {
        params: {
            q,
            _limit: 6,
            _page,
        }
    })
}

export const getCommentsByMovieId = id => {
    return instance.get(`/${id}/comments`);
}

