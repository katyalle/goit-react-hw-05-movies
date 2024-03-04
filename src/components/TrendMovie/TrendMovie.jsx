import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { getAllMovies } from "../../Api/TrendMovie";



const TrendMovie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getAllMovies();
                setMovies(data?.length ? data : []);
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

    const elements = movies.map(({ id, title }) => (<li key={id} >
                                                        <Link to={`/src/Api/TrendMovie.js/${id}`} state={{from: location}}>{title}</Link>
                                                    </li>));

    return (
        <>
            {error && <p >{error}</p>}
            {loading && <p>...Loading</p>}
            {Boolean(elements.length) && (<ol >
                {elements}
            </ol>)}
        </>
    )
}



export default TrendMovie;