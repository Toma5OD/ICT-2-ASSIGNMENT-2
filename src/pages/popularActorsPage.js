import React from 'react';
import PageTemplate from '../components/templateActorListPage';
import { getPopularActors } from '../api/tmdb-api';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getActorImages } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const PopularActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    'actors',
    getPopularActors,
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actor = data.results;

  return (
    <PageTemplate
      title='Popular Actors'
      actor={actor}
      action={(actor) => {
        return <AddToFavouritesIcon actors={actor} />;
      }}
    />
  );
};
export default PopularActorsPage;
