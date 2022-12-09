import { Component } from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        this.fetchMovies("matrix", "");
    }

    fetchMovies = (text, type) => {
        fetch(`http://www.omdbapi.com/?apikey=c9289430&s=${text}&type=${type}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies } = this.state;

        return <main className="container content">
            <Search searchCallBack={this.fetchMovies} />
            {
                movies.length ? (
                    <Movies movies={movies} />
                ) : (
                    <Preloader />
                )
            }
        </main>
    }

}

export { Main }