import '../style/Feed.css';
import React from 'react';
import { Grid, Button, Chip } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import EmailIcon from '@material-ui/icons/Email';
import ExploreIcon from '@material-ui/icons/Explore';

const Feed = () => {
  return (
    <div id="feed-container">
      <div id="feed-avatar-nd-last-active-container">
        <div id="feed-avatar">
          <img src="./images/my_dp.jpg" alt="user profile" />
        </div>
        <div id="feed-name-nd-last-active">
          <p id="feed-post-freelancer-name">John Doe</p>
          <p>3 min ago</p>
        </div>
        <div></div>
      </div>
      <div id="feed-freelancer-info-container">
        <div id="freelancer-status">Epic Coder</div>
        <div id="freelancer-location">
          <ExploreIcon /> India
        </div>
        <div id="feed-post-bookmark-nd-msg">
          <div>
            <BookmarkBorderIcon className="pointer-icon"  />
            <EmailIcon className="pointer-icon" id="feed-post-email-icon" />
          </div>
        </div>
      </div>
      <div id="freelancer-title">
        Senior Wordpress Developer
      </div>
      <div id="feed-row-4">
        <div>
          <Button variant="contained" color="primary">
            Full Time
          </Button>
        </div>
        <div id="feed-post-freelancer-rate">
          $30 /hr
        </div>
      </div>
      <p id="feed-post-description">
        Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
        Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
        Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
      </p>
      <div id="feed-post-tags-container">
        <Chip label="HTML" component="a" href="#chip" clickable />
        <Chip label="PHP" component="a" href="#chip" clickable />
        <Chip label="CSS" component="a" href="#chip" clickable />
        <Chip label="Javascript" component="a" href="#chip" clickable />
        <Chip label="Wordpress" component="a" href="#chip" clickable />
      </div>
    </div>
  );
};

export default Feed;