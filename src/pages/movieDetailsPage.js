import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getSimilarMovies} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import SimilarMovies from "../components/similarMovies";
import CastList from "../components/castList";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: similarMovies } = useQuery(
    ["similarMovies", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie && similarMovies ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <CastList />
            <SimilarMovies itemData={similarMovies} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;