import '../style/PortfolioBox.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BurstModeIcon from '@material-ui/icons/BurstMode';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '70px'
  },
}));

const PortfolioBox = () => {

  const classes = useStyles();

  return (
    <div id="portfolio-box-container">
      <div id="portfolio-box-container-row1">
        <div id="portfolio-box-container-row1-text">Portfolio</div>
        <div id="portfolio-box-container-row1-icon">
          <BurstModeIcon />
        </div>
      </div>
      <div id="portfolio-box-container-row2">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <img src="./images/book.jpg" alt="book" />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;