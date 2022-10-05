import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/detailMovie";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailMovie
          summary={detail.description_full}
          title={detail.title}
          year={detail.year}
          coverImg={detail.medium_cover_image}
          genres={detail.genres}
          rating={detail.rating}
          runtime={detail.runtime}
        />
      )}
    </div>
  );
}
export default Detail;
