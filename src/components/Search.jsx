import { Component } from "react";

class Search extends Component {
    state = {
        search: "",
        type: "",
    }

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.props.searchCallBack(this.state.search, this.state.type);
        }
    }

    handleRadiobuttonChange = (event) => {
        this.setState({type: event.target.value});
    }

    render() {
        const { search, type } = this.state;

        return <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    type="search"
                    placeholder="search"
                    value={search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    className="btn search-btn"
                    onClick={() => this.props.searchCallBack(this.state.search, this.state.type)}
                >
                    Submit
                </button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        value=""
                        type="radio"
                        onChange={this.handleRadiobuttonChange}
                        checked={type === ""}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        value="movie"
                        type="radio"
                        onChange={this.handleRadiobuttonChange}
                        checked={type === "movie"}
                    />
                    <span>Movie</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        value="series"
                        type="radio"
                        onChange={this.handleRadiobuttonChange}
                        checked={type === "series"}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    }
}

export { Search }