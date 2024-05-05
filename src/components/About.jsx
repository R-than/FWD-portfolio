import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";

const About = () => {

  const FadeInAnimation = {
    initial: {
      opacity: 0,
      y: 400,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      
    },
  }

  const skills = [
  { icon: "fab fa-js", name: "JavaScript", color: "text-yellow-500" },
  { icon: "fab fa-css3-alt", name: "CSS", color: "text-blue-500" },
  { icon: "fab fa-html5", name: "HTML", color: "text-red-500" },
  { icon: "fab fa-php", name: "PHP", color: "text-purple-500" },
  { icon: "fas fa-liquid", name: "Liquid", color: "text-blue-500" },
  { icon: "fab fa-sass", name: "Sass", color: "text-pink-500" },
  { icon: "fab fa-git-alt", name: "Git", color: "text-red-500" },
  { icon: "fab fa-github", name: "GitHub", color: "text-red-400" },
  { icon: "fas fa-database", name: "MySQL", color: "text-indigo-500" },
  { icon: "fab fa-tailwind", name: "Tailwind CSS", color: "text-blue-300" },
  { icon: "fab fa-react", name: "React.js", color: "text-blue-500" },
  { icon: "fas fa-network-wired", name: "FTP", color: "text-gray-700" },
  { icon: "fab fa-gulp", name: "Gulp", color: "text-red-700" },
  { icon: "fab fa-wordpress", name: "Wordpress", color: "text-blue-500" },
  { icon: "fab fa-shopify", name: "Shopify", color: "text-green-500" },
];

  return (
    <section id="about" className="py-8 min-h-screen flex justify-center items-center mx-4">
      <div className="container flex-wrap mx-auto max-w-6xl flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 order-2 md:order-1 text-white mb-8 md:flex-row-reverse mb-0">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
          Welcome to my digital haven! I poured my heart into this project, and it's only going to get better. I'm all about creativity and adding my artistic touch. Front-end coding is where I found my groove - mixing tech with creativity is something I am passionate about and looking forward to doing more. Outside of that, I'm into photography and just started dabbling in making videography. Stick around, there's a lot of cool stuff coming.<br/>
          <a className=' flex justify-center font-bold text-orange-400 hover:text-orange-200' href="https://rathan30.myportfolio.com/">Check out my Photos</a>
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
          <motion.div className="grid grid-cols-3 gap-4"
            variants={FadeInAnimation}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {skills.map((skill, index) => (
              <SkillBox
                key={index}
                icon={skill.icon}
                name={skill.name}
                color={skill.color}
                delay={index * 0.3} 
              />
            ))}
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 justify-center items-center">
          <img src="../images/pfp.png" alt="Your Name" className=" max-w-full m-0 my-4 p-0 " />
        </div>
      </div>
    </section>
  );
}

const SkillBox = ({ icon, name, color, delay }) => {
  return (
    <motion.div
      className="skill-box bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110 hover:shadow-xl transition-transform duration-300 transition-shadow duration-300"
      initial={{ opacity: 0, y: 400, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: delay, duration: 0.5, type: "spring" } }}
      viewport={{
        once: true,
      }}
    >
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
    </motion.div>
  );
}


export default About;













