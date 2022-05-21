import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() { //Se ejecuta cuando se renderiza el componente
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <>
            <div className="movie-detail">Detalle de la pelicula</div>
            <div>
                <h2>Titulo: {this.props.movieDetail.Titulo}</h2>
                <img src={this.props.movieDetail.Poster} alt=''/>
                <h4>Año: {this.props.movieDetail.Year}</h4>
                <h4>Plot: {this.props.movieDetail.Plot}</h4>
            </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);