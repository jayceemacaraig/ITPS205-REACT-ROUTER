import gradPic from '../../public/ME.png'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
    <div>
        <h1>
            Hi I'm Jay Cee
        </h1>
        <h2>A web developer</h2>
        <p>A Full-Stack Developer based in Philippines</p>
        <div>
            <a target="_blank" href="https://www.facebook.com/Name.Jaycee"><img src="https://img.icons8.com/?size=100&id=118466&format=png&color=FFFFFF" alt=""></img></a>
            <a target="_blank" href="https://github.com/jayceemacaraig"><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF" alt=""></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/jay-cee-204b18270/"><img src="https://img.icons8.com/?size=100&id=ZO0pAGpcWYrB&format=png&color=FFFFFF" alt=""></img></a>
        </div>
         <NavLink className="contact-button" to="/contact">CONTACT ME</NavLink>
    </div>
    <img src={gradPic} alt="menu"></img>

</section>
  );
};

export default Hero;
