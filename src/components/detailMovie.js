import PropTypes from "prop-types";

function DetailMovie({ title, year, coverImg, genres, rating, runtime }) {
  return (
    <div>
      <h1>
        {title}({year})
      </h1>
      <img alt="aa" src={coverImg} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>Rating {rating}</h3>
      <h3>Runtime {runtime} minute</h3>
    </div>
  );
}
DetailMovie.prototype = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};
export default DetailMovie;
