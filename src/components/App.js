import '../style/App.css';
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Banner from './Banner';
import DashboardProfilePictureBar from './DashboardProfilePictureBar';
import NameNdTitleContainer from './NameNdTitleContainer';
import DashboardMiddleMenu from './DashboardMiddleMenu';
import Feed from './Feed';
import PortfolioBox from './PortfolioBox';

const App = () => {
  return (
    <div id="app-container">
      <Banner />
      <Grid container>
        <Grid item xs={12} md={3}>
          <DashboardProfilePictureBar />
        </Grid>
        <Grid item xs={12} md={6} className="dashboard-cols-spacing">
          <NameNdTitleContainer />
          <DashboardMiddleMenu />
          <br />
          <Feed />
          <Feed />
          <Feed />
        </Grid>
        <Grid id="dashboard-right-col" item xs={12} md={3} className="dashboard-cols-spacing">
          <div id="dashboard-right-col-setting-btn-container">
            <Button variant="contained" color="secondary">
              <SettingsIcon /> <span id="dashboard-right-col-setting-btn">Setting</span>
            </Button>
          </div>
          <div className="clear-box"></div>
          <div id="dashboard-right-col-portfolio-box-container">
            <PortfolioBox />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;