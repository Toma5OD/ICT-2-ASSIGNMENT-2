import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  root: {
    margin: "30px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around", 
    backgroundColor: "#eeeeee",
  },
});

export default function SimilarMovies({ itemData }) {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h5"
        component="h3">
        <h2>Similar Movies</h2>
      </Typography>
      <div className={classes.root}>
        <ImageList cols={6}>
          {itemData.results.map((item) => (
            <ImageListItem key={item.id}>
              <a href={`/movies/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </a>
              <ImageListItemBar
                title={item.title}
                subtitle={<span>Average Rating: {item.vote_average}</span>}
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}>
                    <LocalMoviesIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}