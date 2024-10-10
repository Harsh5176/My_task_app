import React from 'react';
import './About.css';  

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p><strong>Name:</strong> Harsh Vekariya</p>
          <p><strong>B-tech:</strong> Sem-3 </p>
          <p><strong>Enrollment:</strong> 23010101297</p>
          <p><strong>Batch:</strong> B-7 </p>
          <p><strong>Email:</strong> <a href="mailto:23010101297@darshan.ac.in">23010101297@darshan.ac.in</a></p>
        </div>
        <div className="about-image">
          <img src='https://media.licdn.com/dms/image/v2/D5603AQH7nBFiB1gJJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711894209392?e=1733961600&v=beta&t=bOBS9LJYu8ZZsO6pew0U-2ly6T5UMku_STOYcTTlKmk' alt="Harsh Vekariya" />
        </div>
      </div>
    </div>
  );
}
