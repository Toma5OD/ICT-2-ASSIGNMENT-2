import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
}));

const ActorHeader = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const actor = props.actor;

  return (
    <Paper component='div' className={classes.root}>
      <IconButton aria-label='go back' onClick={() => navigate(-1)}>
        <ArrowBackIcon color='primary' fontSize='large' />
      </IconButton>

      <Typography variant='h4' component='h3'>
        {actor.name}
        <br />
      </Typography>
      <IconButton aria-label='go forward' onClick={() => navigate(1)}>
        <ArrowForwardIcon color='primary' fontSize='large' />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;