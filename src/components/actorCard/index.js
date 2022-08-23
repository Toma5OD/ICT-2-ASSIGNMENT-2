import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {

    backgroundColor: 'white',
    color: 'black',
  },
  media: { height: 450 },
  bottom: { height: 100, alignItems: 'center' },
});

export default function ActorCard({ actor, action }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant='h4'>
            {actor.name}{' '}
          </Typography>
        }
        style={{ height: 80}}
      />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardActions className={classes.bottom} disableSpacing>
        <Link to={`/actors/${actor.id}`}>
          <Button variant='contained' size='large' color='primary'>
            Actor Details
          </Button>
        </Link>
      </CardActions>
    </Card>
    
  );
}