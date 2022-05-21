import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(m => 
              <li>
                 <Link to={`(/movie/${m.id})`}>
                   {m.title}
                 </Link>
                 <button onClick={() => this.props.removeMovieFavorite(m.id)}>x</button>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
