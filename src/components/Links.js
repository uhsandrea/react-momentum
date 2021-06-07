import React from 'react';
import './Links.css';
import { FaGoogle, FaYoutube, FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Links = () => {
  return (
    <div className="links">
      <a href="https://www.google.com/" target="_blank" rel="noreferrer"><FaGoogle className="link"/></a>
      <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><SiGmail className="link"/></a>
      <a href="https://www.github.com/" target="_blank" rel="noreferrer"><FaGithub className="link"/></a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube className="link"/></a>
    </div>
  );
}

export default Links;