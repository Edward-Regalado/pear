import React from 'react';
import BGPhoto from './images/green-bg.jpg';
import Tony from './images/tony.jpg';
import Kevin from './images/kevin.png';
import Marie from './images/marie.jpg';
import Garfield from './images/garfield.jpg';
import '../styles/About.css';

function AboutScreen() {
  return (
     <div className="container">
        <div className="header-container">

          <h1 className="heading">
            <i className="fas fa-rocket"></i>
              Meet The Team
            <i className="fas fa-user-astronaut"></i>
          </h1>
        </div>
        <div className="card-container">
          <div className="profileCard">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Kevin} alt="img" className="profile-img" />
            <h1>Kevin Henry</h1>
            <p className="job-title-aloy">Software Developer</p>
            <p className="about">Lorem ipsum dolor sit amet, quo tempor luptatum verterem et. Vis nostrum deterruisset eu. Ne quaeque accommodare per, an vix omnis reprehendunt comprehensam. Dolores honestatis an pri, nulla aliquam id his. Est ea justo deleniti oporteat.</p>
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/a-todd-charliemike/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/AL0YSI0US" target="blank"><i className="fab fa-github-square"></i></a></li>
              <li><a href="https://myaccount.google.com/" target="blank"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="https://twitter.com/" target="blank"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>

          <div className="profileCard">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Garfield} alt="img" className="profile-img" />
            <h1>Garfield Grant</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Lorem ipsum dolor sit amet, quo tempor luptatum verterem et. Vis nostrum deterruisset eu. Ne quaeque accommodare per, an vix omnis reprehendunt comprehensam. Dolores honestatis an pri, nulla aliquam id his. Est ea justo deleniti oporteat.</p>
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/matthew-santorsola/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/santorsm" target="blank"><i className="fab fa-github-square"></i></a></li>
              <li><a href="https://myaccount.google.com/" target="blank"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="https://twitter.com/" target="blank"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="profileCard">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Marie} alt="img" className="profile-img" />
            <h1>Marie Marcos</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">I'm a Navy Veteran and current Codefellows student from Washington State. I developed an interest in Software Development from my love of making things- if I can think it up and make it real, it just feels awesome- especially when someone else can enjoy it too. Coding has proven to be a great outlet for idea sharing and collaboration. I'm looking forward to my future in tech and using all I've learned to develop ideas and create solutions.</p>
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/marie-marcos/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/Mmarcos01" target="blank"><i className="fab fa-github-square" target="blank"></i></a></li>
              <li><a href="https://myaccount.google.com/" target="blank"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="https://twitter.com/" target="blank"><i className="fab fa-twitter-square" target="blank"></i></a></li>
            </ul>
          </div>
          <div className="profileCard">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="img" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">I'm a US Coast Guard Veteran with a background in the Hospitality & Food Service Industry. Currently living
          in Seattle and attending Codefellows full-time. I'd say that I'm an open-minded, honest, dedicated and
          hardworking individual. I have a passion for tech, building race cars, gaming, learning and writing code.
          I'm excited use my problem solving and critical thinking skills to build apps that helps improves the lives of
          people around the world.</p>
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/edward-regalado/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/Edward-Regalado" target="blank"><i className="fab fa-github-square"></i></a></li>
              <li><a href="https://myaccount.google.com/" target="blank"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="https://twitter.com/" target="blank"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default AboutScreen;
