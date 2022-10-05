import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, year, rating, coverImg, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link> ({year})
      </h2>
      <h3>rating : {rating}</h3>
      <img alt={title} src={coverImg} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
