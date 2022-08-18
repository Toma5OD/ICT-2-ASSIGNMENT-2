import React, {useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import IconButton from "@material-ui/core/IconButton";

const MyPlaylistAddIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatchList = (e) => {
        e.preventDefault();
        context.addToMustWatchList(movie);
    }

    return (
        <IconButton aria-label="add to must watch list" onClick={handleAddToMustWatchList}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    )
};

export default MyPlaylistAddIcon;
