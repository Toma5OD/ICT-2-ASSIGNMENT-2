import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import TvSeriesPage from "./pages/tvSeriesPage";
import TVShowDetailsPage from "./pages/tvShowDetailsPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PopularActorsPage from './pages/popularActorsPage';
import ActorsPage from './pages/actorDetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
            <Route path="/tv-series" element={<TvSeriesPage/>} />
            <Route path="/tv_shows/:id" element={<TVShowDetailsPage/>} />
            <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
            <Route path="/actors/:id" element={<ActorsPage />} />
            <Route path='/person/popular' element={<PopularActorsPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));