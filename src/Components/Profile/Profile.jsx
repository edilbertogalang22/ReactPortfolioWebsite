import React, { useEffect } from "react";
import Typed from "typed.js"; // import typed.js
import "./Profile.css";
import profile_img from "../../assets/Profile.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Profile = () => {
  useEffect(() => {
    // initialize Typed.js
    const typed = new Typed(".text", {
      strings: ["Junior Front-End Developer", "Freelancer", "Video Editor"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // destroy Typed instance during cleanup para iwas memory leak
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="profile">
      <img src={profile_img} alt="profile" />
      <h1>
        <span className="name">I'm Edilberto Galang,</span> And I'm <br />
        <span id="text" className="text"></span>
      </h1>
      <p>
        I'm a Fresh Graduate of Bachelor of Science in Information Systems,
        skilled in (BASIC - HTML, CSS, JavaScript, React.) Passionate about
        creating software and web applications, with strong teamwork and
        collaboration skills.
      </p>
      <div className="profile-action">
        <div className="profile-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="profile-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Profile;
