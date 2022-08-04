import React ,{useEffect} from 'react';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Service = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration: 700,
      }
    );
  },[]);
  return (
    <>
      <div className="service">
        <h3 data-aos="fade-up">Services</h3>

        <div className="serv_list">
            <div className="serv_item" data-aos="fade-up">
                <h5>1</h5>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in enim non, laboriosam officia minus quisquam alias ex consectetur facere, a, reiciendis suscipit quam similique? Similique eius assumenda optio officia provident? Vitae perspiciatis porro ab.</p>
                <button className='serv_btn'>Read More</button>
            </div>

            <div className="serv_item" data-aos="fade-up">
                <h5>2</h5>
                <h4>Web Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in enim non, laboriosam officia minus quisquam alias ex consectetur facere, a, reiciendis suscipit quam similique? Similique eius assumenda optio officia provident? Vitae perspiciatis porro ab.</p>
                <button className='serv_btn'>Read More</button>
            </div>

            <div className="serv_item" data-aos="fade-up">
                <h5>3</h5>
                <h4>Security/SEO</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in enim non, laboriosam officia minus quisquam alias ex consectetur facere, a, reiciendis suscipit quam similique? Similique eius assumenda optio officia provident? Vitae perspiciatis porro ab.</p>
                <button className='serv_btn'>Read More</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Service;
