import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'; 
import Spinner from '../components/spinner';
import MyPlaylistAddIcon from "../components/cardIcons/playlistAddIcon";

//Upcoming movies page leveraging from cache support provided by react-query library already made in 'Fix upcoming movies page.' commit.

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('movie', getUpcomingMovies)

  const addToFavourites = () => null;
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <MyPlaylistAddIcon movie={movie} />
      }}
      selectFavourite={addToFavourites}
    />
  );
};
export default UpcomingMoviesPage;