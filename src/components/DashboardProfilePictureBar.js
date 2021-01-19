import '../style/DashboardProfilePictureBar.css';
import React from 'react';
import { Grid } from '@material-ui/core';

const DashboardProfilePictureBar = () => {
  return (
    <div id="dashboard-profile-picture-bar-container">
      <div id="dashboard-profile-picture-bar-pic-container">
        <img src="./images/my_dp.jpg" alt="profile picture" />
      </div>
      <br /> <br /> <br /> <br />
      <Grid container>
        <Grid item xs={6}>
          <p className="dashboard-profile-picture-bar-texts">Following</p>
          <p className="dashboard-profile-picture-bar-texts"><b>34</b></p>
        </Grid>
        <Grid item xs={6}>
          <p className="dashboard-profile-picture-bar-texts">Followers</p>
          <p className="dashboard-profile-picture-bar-texts"><b>155</b></p>
        </Grid>
      </Grid>
      <div>
        <ul id="dashboard-profile-picture-bar-socials-list">
          <li>
            <a href="#">www.example.com</a>
          </li>
          <li>
            <a href="#">www.facebook.com</a>
          </li>
          <li>
            <a href="#">www.twitter.com</a>
          </li>
          <li>
            <a href="#">www.googleplus.com</a>
          </li>
          <li>
            <a href="#">www.behance.com</a>
          </li>
          <li>
            <a href="#">www.pinterest.com</a>
          </li>
          <li>
            <a href="#">www.instagram.com</a>
          </li>
          <li>
            <a href="#">www.youtube.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardProfilePictureBar;