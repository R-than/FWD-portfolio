import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section id="about" className="bg-black py-8 min-h-screen flex justify-center items-center mx-4">
      <div className="container flex-wrap mx-auto max-w-6xl flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 order-2 md:order-1 text-white mb-8 md:flex-row-reverse mb-0">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget urna nec libero vehicula blandit. Sed euismod, nunc nec interdum luctus, felis libero lacinia nisi, vel posuere elit tortor nec metus. Quisque auctor molestie metus, id dapibus elit lacinia sed.</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
          <div className="grid grid-cols-3 gap-4 ">
            <SkillBox icon="fab fa-js" name="JavaScript" color="text-yellow-500" />
            <SkillBox icon="fab fa-css3-alt" name="CSS" color="text-blue-500" />
            <SkillBox icon="fab fa-html5" name="HTML" color="text-red-500" />
            <SkillBox icon="fab fa-php"  color="text-purple-500" /> {/* name="PHP" */}
            <SkillBox icon="fas fa-liquid" name="Liquid" color="text-blue-500" />
            <SkillBox icon="fab fa-sass" name="Sass" color="text-pink-500" />
            <SkillBox icon="fab fa-git-alt" name="Git" color="text-red-500" /> 
            <SkillBox icon="fab fa-github" name="GitHub" color="text-red-400" />
            <SkillBox icon="fas fa-database" name="MySQL" color="text-indigo-500" />
            <SkillBox icon="fab fa-tailwind" name="Tailwind CSS" color="text-blue-300" />
            <SkillBox icon="fab fa-react" name="React.js" color="text-blue-500" />
            <SkillBox icon="fas fa-network-wired" name="FTP" color="text-gray-700" />
            <SkillBox icon="fab fa-gulp" name="Gulp" color="text-red-700" />
            <SkillBox icon="fab fa-wordpress" name="Wordpress" color="text-blue-500" />
            <SkillBox icon="fab fa-shopify" name="Shopify" color="text-green-500" />
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 justify-center items-center">
          <img src="../images/pfp.png" alt="Your Name" className=" max-w-full m-0 my-4 p-0 " />
        </div>
      </div>
    </section>
  );
}

const SkillBox = ({ icon, name, color }) => {
  return (
    <div className="skill-box bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110 hover:shadow-xl transition-transform duration-300 transition-shadow duration-300">
      <div className={`relative ${color}`} style={{ transition: 'box-shadow 0.3s, background-color 0.3s' }}>
        <i className={`${icon} text-2xl mb-1`}></i>
        <span className="text-base font-semibold">{name}</span>
        <div className="absolute inset-0 rounded-lg -z-1 bg-opacity-25 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      </div>
      <style jsx>{`
        .skill-box:hover {
          box-shadow: 0 0 25px #ffea75; /* Yellow glow */
        }
      `}</style>
    </div>
  );
}

export default About;












