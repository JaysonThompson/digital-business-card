import React from 'react'

import profileImage from '../../img/jayson-thompson.jpeg'

const Info = () => {
  return (
    <header>
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Jayson Thompson</h1>
        <h4 className="job-title">Software Engineer Manager</h4>
        <p className="weblink">jaysonthompson.com</p>
      </div>
      <div className="profile-buttons">
        <a className="email-link" href="mailto:jaysonthompson922@gmail.com">
          <i class="fa-solid fa-envelope"></i>
          Email
        </a>
        <a className="linkedIn" href="linkedin.com/in/jayson-thompson-a446483">
          <i class="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </header>
  )
}

export default Info
