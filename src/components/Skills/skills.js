import React from 'react';
import "./skills.css";

import css from "../../assets/css-icon.png";
import tailwind from "../../assets/tailwind-css-icon.png";
import js from "../../assets/javascript-programming-language-icon.png"
import html from "../../assets/html-icon.png"
import nextjs from "../../assets/nextjs-icon.png"
import react from "../../assets/react-js-icon.png"

const Skills = () => {

    const skill = [css,tailwind, js, html, nextjs, react]

  return (
    <section className='skills'>
      <h3>My Top Skills</h3>
      <div className='skill'>
         {skill.map((e , i) => {
            return (<div key={i}  className='skillDiv'>
                <img className='skillImg' src={e} alt="" />
            </div>)
         })}
      </div>
    </section>
  )
}

export default Skills;
