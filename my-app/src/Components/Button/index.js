import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '40px'
  },
}));

export default function ButtonStart(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={props.icon}
      >
        {props.lable}
      </Button>
    </div>
  );
}
