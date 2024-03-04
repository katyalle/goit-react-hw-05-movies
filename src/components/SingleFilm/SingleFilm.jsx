import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMoviesById } from "Api/TrendMovie"
import styles from "./single-film.module.css"

const SingleFilm = () => {
    const { id } = useParams();
    const [movie, setMovies] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
             try {
                setLoading(true);
                const { data } = await getMoviesById(id);
                setMovies(data)
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <div>

            {loading && <p>...Loading</p>}
            {error && <p >{error}</p>}
            {movie && (
               
                <>
                <h1>{movie.title}</h1>
            <p>{movie.body}</p>
                </>
          ) }
        </div>
    )
}
export default SingleFilm