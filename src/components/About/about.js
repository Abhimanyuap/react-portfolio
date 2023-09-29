import "./about.css";
import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
        <h3 className="aboutHeading">About</h3>
      <p>
        🚀 React Frontend Developer | 🎓 2020 BCom Graduate 👋 Greetings! I'm a
        React Frontend Developer and a proud 2020 BCom graduate. My journey is
        all about crafting exceptional user interfaces with React, using a
        toolkit that includes JavaScript, HTML5, CSS3, Redux, and more.
         <br /> <br />
        📱 Ensuring responsive designs for all screens is my priority, and I
        thrive on seamlessly merging design and development. Continuous learning
        drives me to stay updated with the ever-evolving tech world, and I bring
        a unique blend of business acumen and technical expertise to my
        projects. <br /> <br />
        🤝 Collaboration is where I shine, thanks to effective communication
        that simplifies tech jargon for smooth teamwork. Each project I
        undertake is infused with passion, aiming for nothing less than
        brilliance. <br /> <br />
        📧 Feel free to reach out via [abhimanyusingh73742@gmail.com], explore my work on
        my [Portfolio Website], or connect with me on <Link>Linkedin</Link>. Let's
        collaborate and create React magic together! 🚀💻🎨 <br />
      </p>
    </div>
  );
};

export default About;
