import React ,{useEffect} from 'react';
import './About.css';
import aboutImg from './../img/p.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = ({title}) => {
  useEffect(()=>{
    AOS.init(
      {
        duration: 700,
      }
    );
  },[]);
  return (
    <>
      <div className="about"    data-aos="fade-up">
        <div className="about_list">
            <div className="about_img">
                <img src={aboutImg} alt="" />
               
            </div>

            <div className="about_details">
                <h4>About Me</h4>
                <h5>{title}</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum error illo necessitatibus asperiores totam! Asperiores tempora qui explicabo, dolore fuga cum impedit quibusdam est ex tenetur cumque expedita eaque doloremque? Ducimus deleniti inventore, deserunt distinctio .
                    <br />
                    <br />
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa quae vel laudantium incidunt! Neque placeat accusantium facilis error aliquid.
                </p>

                <div className="about_btn">
                    <button className='hire'>Hire Me</button>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
