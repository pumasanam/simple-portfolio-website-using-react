import React ,{useEffect} from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration: 700,
      }
    );
  },[]);

  const formsubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <>
            <div className="contact" data-aos="fade-up">
            <div className="form" >
                <h2>Feel Free To Ask Anything</h2>
                    <div className="submit">
                        <form action="" onSubmit={formsubmit}>
                            <input type="text"   placeholder='Name' />
                            <input type="email"  placeholder='Email' />
                            <textarea  placeholder='Message' id="" cols="30" rows="10"></textarea>
                            <button type='submit'>Sent Message</button>
                        </form>
                    </div>
            </div>

           
      </div>
    </>
  );
};

export default Contact;
