import React from "react";
import "./Detail.css";

class Detail extends React.Component {

    componentDidMount () {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail_container">
                    <img src={location.state.poster} alt={location.state.title}></img>
                    <h1 className="detail_title">{location.state.title}</h1>
                    <h3 className="detail_year">{location.state.year}</h3>
                    <h5 className="detail_genres">
                        {/*location.genres.map((genre, index) => {
                            return (
                                <li key={index} className="genre">{genre}</li>
                           )
                       })*/}
                    </h5>   
                    <p className="detail_summary">{location.state.summary}</p>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Detail;