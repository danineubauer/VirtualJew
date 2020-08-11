import React from 'react';
import Button from '../Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
    },
    container: { 
        justify: 'center',
        alignContent: 'center', 
        height: '100%', 
        width: '100%'
    }
  });
  
export default function Start() { 
    
    const classes = useStyles();

        return (
            <Grid className={classes.root}>
                <Grid container spacing={2} className={classes.container} >
                    <Grid xs={3} item></Grid>
                    <Grid xs={6} align='center' justify='center' item>
                    <h3>Welcome to</h3>
                    <h1>Virtual Shabbat</h1>
                    <h1>A virtual shabbat experience designed to help you lead Shabbat dinner virtually with your family and friends.</h1>
                    <Button lable='Lets go!'/>

                    </Grid>
                    <Grid xs={3} item></Grid>

                </Grid>
            </Grid>
        )

}
    

