import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PlaceIcon from '@material-ui/icons/Place';
import EmojiPeopleIcon from '@material-ui/icons/AccessibilityNew';


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: 'fixed',
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ({ actor }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h5' component='h3'>
        Overview
      </Typography>
      <Typography variant='h6' component='p'>
        {actor.biography}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component='ul' className={classes.chipSet}>
          <Chip icon={<AccessTimeIcon />} label={`Birthday: ${actor.birthday} min.`} />
          <Chip icon={<PlaceIcon />} label={`Place of Birth: ${actor.place_of_birth} min.`} />
          <Chip icon={<EmojiPeopleIcon />} label={`Death Date if any: ${actor.deathday}`} />
        </Paper>
      </div>
    </>
  );
};
export default ActorDetails;