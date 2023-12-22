import React from "react";
import "./index.css";
const skillData = [
  {
    skill: "HTML+CSS",
    level: "expert",
    color: "#45t398",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#45t398",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#45t398",
  },
  {
    skill: "Saas",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "GIT & GitHub",
    level: "intermediate",
    color: "#45t398",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#45t398",
  },
];
const Card = () => {
  return (
    <div className='card'>
      <Avatar />
      <Bio />
      <SkillList />
    </div>
  );
};

function Avatar() {
  return <img className='avatar' src='pizzas/salamino.jpg' alt='avatar' />;
}
function Bio() {
  return (
    <div>
      <h1>Ayodele Agbowuro</h1>
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere
        vitae nesciunt numquam reiciendis quam.
      </h3>
    </div>
  );
}
function SkillList() {
  const skill = skillData;
  return (
    <div className='skill-buttons'>
      {/* <Skill skill='React' emoji='💪' color='green' />
      <Skill skill='Javascript' emoji='❤️' color='blue' />
      <Skill skill='HTML + CSS' emoji='💕' color='#456738' />
      <Skill skill='Tailwind' emoji='🤦‍♀️' color='#567888' />
      <Skill skill='Bootsrap' emoji='👌' color='#235699' />
      <Skill skill='Material UI' emoji='😍' color='#845188' /> */}

      {skill.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <button className='skill' style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level}</span>
    </button>
  );
}

export default Card;
