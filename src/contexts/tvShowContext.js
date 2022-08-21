import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [myReviews, setMyReviews] = useState([]);

    const addToFavourites = (tvShow) => {
        if (!favourites.includes(tvShow.id)) {
            let newFavourites = [...favourites, tvShow.id];
            setFavourites(newFavourites);
        }
    };

    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};
export default MoviesContextProvider;