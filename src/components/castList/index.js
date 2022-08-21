import React from "react";
import Paper from "@material-ui/core/Paper";
import ListCast from "../listCast";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const MovieDetails = ({ movie }) => {

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  page: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  castTitle: {
    margin  : "40px"
  },
});

  const classes = useStyles();
    return (
        <>
            <Paper component="ul" className={classes.page}>
                <Typography
                    variant="h5"
                    component="h6"
                    className={classes.castTitle}>
                    <h2>Movie Cast</h2>
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <ListCast />
                </Grid>
            </Paper>
        </>
    );
};
export default MovieDetails;