import React from "react";
import './footer.css'


const Footer = () => {
  return (
    <div className="footer">
      &copy; Ian Flaherty
      <div className="links">
        <a href="https://github.com/Ian-Flaherty" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="GitHub Logo"
            rel="no referrer"
          />
        </a>
        <a href="https://www.linkedin.com/in/ian-flaherty-a5105a197" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="LinkedIn Logo"
            rel="no referrer"
          />
        </a>
      </div>
      <div className="icon">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        <br></br>
        Images from{" "}
        <a href="https://www.unsplash.com" title="Unsplash">
          www.unsplash.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
