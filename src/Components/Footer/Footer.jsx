import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_list">
            <h3>Going To The Internet</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati rerum totam reiciendis omnis repellat.</p>

            <div className="footer_icon">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
        </div>
      </footer>

      <div className="side_icons">
        <ul>
            <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
            <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
