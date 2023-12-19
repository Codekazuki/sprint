import React from "react";
import "./index.css";

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
  return (
    <div className='skill-buttons'>
      <Skill skill='React' emoji='💪' color='green' />
      <Skill skill='Javascript' emoji='❤️' color='blue' />
      <Skill skill='HTML + CSS' emoji='💕' color='#456738' />
      <Skill skill='Tailwind' emoji='🤦‍♀️' color='#567888' />
      <Skill skill='Bootsrap' emoji='👌' color='#235699' />
      <Skill skill='Material UI' emoji='😍' color='#845188' />
    </div>
  );
}

function Skill(props) {
  return (
    <button className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </button>
  );
}

export default Card;
