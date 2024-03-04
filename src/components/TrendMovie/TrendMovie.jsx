import { Component } from "react";
import {getAllMovie} from "../../Api/TrendMovie"
import axios from "axios";


class TrendMovie extends Component {
    state = {
        movie: [],
        loading: false,
        error: null,
    }
    componentDidMount() {
this.setState({loading: true})

        getAllMovie()
            .then(({ data }) => {
                this.setState({
                    loading: false,
                    posts: data?.length ? data: []
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error.message,
            })
        })
}


    render() {
       
        const { movie, loading, error } = this.state;
        
        const elements = movie.map(({ id, title, body }) => <li key={id} >
                                                            <h3>{title}</h3>
                                                            <p>{body}</p>
                                                            </li> );
                                                                
        
        
        return (

            <>
                {error && <p>{error}</p>}
                {loading && <p>...Loading</p>}
                
             <ul>
                {elements}
            </ul>
            </>

           
        )
    }
}

export default TrendMovie;