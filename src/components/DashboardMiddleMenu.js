import '../style/DashboardMiddleMenu.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InfoIcon from '@material-ui/icons/Info';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExtensionIcon from '@material-ui/icons/Extension';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50px'
  },
}));

const DashboardMiddleMenu = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <div>Feed</div>
          <div className="dashboard-middle-menu-icons">
            <EventNoteIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Info</div>
          <div className="dashboard-middle-menu-icons">
            <InfoIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Jobs</div>
          <div className="dashboard-middle-menu-icons">
            <BookmarksIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Bids</div>
          <div className="dashboard-middle-menu-icons">
            <AssignmentTurnedInIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Portfolio</div>
          <div className="dashboard-middle-menu-icons">
            <ExtensionIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Reviews</div>
          <div className="dashboard-middle-menu-icons">
            <ChatBubbleOutlineIcon />
          </div>
        </Grid>
        <Grid item xs>
          <div>Payment</div>
          <div className="dashboard-middle-menu-icons">
            <AccountBalanceWalletIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardMiddleMenu;