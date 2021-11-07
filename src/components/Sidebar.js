import { connect } from 'react-redux'
import { MovieAction } from '../actions/MovieActions'
function Sidebar({ categories, selectMovie }) {
    return (
        <aside>
            {categories.map(category => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                    <ul>
                        {category.movies.map(movie => (
                            <li key={movie.id}>
                                {movie.title} was released in {movie.released}
                                <button onClick={() => selectMovie(category, movie)}>Trailer</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )

}

const mapStateToProps = (store) => ({
    categories: store.movies.categories,
})

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (category, movie) => dispatch(MovieAction(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);