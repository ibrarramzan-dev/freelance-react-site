import '../style/NameNdTitleContainer.css';
import React from 'react';

const NameNdTitleContainer = () => {
  return (
    <div id="name-nd-title-container">
      <p id="dashboard-user-name">John Doe</p>
      <p>
        <span id="dashboard-freelancer-title">Graphic Designer at Self Employed</span>
        <span id="dashboard-status-link-text">
          <a href="#">Status</a>
        </span>
      </p>
    </div>
  );
};

export default NameNdTitleContainer;