import { Component } from "react"
import { Movies } from "../components/Movies"

class Main extends Component {

    state = {
        movies: [],
    }


    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=c9289430&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            {
                movies.length ? (
                    <Movies movies={movies} />
                ) : <h3>Loading...</h3>
            }
        </main>
    }

}

export { Main }